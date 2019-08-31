"use strict";var SIGN_MAGIC="RPK Sig Block 42",BEGIN_TAG=165,JOINT_TAG=90,CRYPT_TYPE_RSA_SHA256=259,SIGN_TYPE_FULL_PACKAGE=16777473,SIGN_TYPE_BLOCK=16777474,SIGN_TYPE_FILE_LIST=16777729,_fs=require("fs"),_path=require("path"),_crypto=require("crypto"),_signature=require("./signature"),_jsrsasign=require("jsrsasign");function signZip(e,t,n,r){var i=Buffer.from(_signature.Base64.unarmor(n)),a=new _jsrsasign.X509;a.readCertPEM(n.toString());var s=_jsrsasign.KEYUTIL.getPEM(a.subjectPublicKeyRSA),l=_fs.readFileSync(e.zip);if(!l||l.length<=4)return console.log("### App Loader ### Zip文件打开失败:",e.zip),!1;if("4034b50"!==l.readInt32LE(0).toString(16).toLowerCase())return console.log("### App Loader ### Zip文件格式错误:",e.zip),!1;var o=parserZip(l);return o.options=e,o.tag&&Object.keys(o.sections).forEach(function(e){var n=o.sections[e];processChunk(l,n,t)}),signChunk(o,t,s,i),r||(r=makeSignFile(e.zip)),saveChunk(l,o,r),!0}function parserZip(e){var n={tag:!1,length:e.length,sections:{header:null,central:null,footer:null}};return n.sections.footer=readEOCD(e),n.sections.footer.tag&&(n.sections.central=readCD(e,n.sections.footer.previous,n.sections.footer.startIndex-n.sections.footer.previous),n.sections.central.tag&&(n.sections.header=readFH(e,n.sections.central.previous,n.sections.central.startIndex-n.sections.central.previous),n.sections.header.tag&&(n.tag=!0))),n}function readEOCD(e){var n={tag:!1};if(e&&22<=e.length)for(var t=e.length-22;0<=t;){if("6054b50"===e.readInt32LE(t).toString(16).toLowerCase()){n.tag=!0,n.startIndex=t,n.len=e.length-t,n.previous=e.readInt32LE(t+16);break}t-=1}return n}function readCD(e,n,t){var r={tag:!1};return e&&e.length>=n&&"2014b50"===e.readInt32LE(n).toString(16).toLowerCase()&&(r.tag=!0,r.startIndex=n,r.len=t,r.previous=e.readInt32LE(n+42)),r}function readFH(e,n,t){var r={tag:!1};return e&&e.length>=n&&"4034b50"===e.readInt32LE(n).toString(16).toLowerCase()&&(r.tag=!0,r.startIndex=n,r.len=t,r.previous=-1),r}function processChunk(e,n,t){var r=n.startIndex,i=n.startIndex+n.len,a=e.slice(r,i),s=Buffer.alloc(5+n.len);s[0]=BEGIN_TAG,s.writeInt32LE(a.length,1),a.copy(s,5);var l=_crypto.createHash("SHA256");l.update(s),n.sign=l.digest()}function hashFile(e){var n=_fs.readFileSync(e),t=_crypto.createHash("SHA256");return t.update(n),t.digest()}function signChunk(e,n,t,r){function i(e){e.copy(l,o),o+=e.length}var a=e.sections,s=a.header.sign.length+a.central.sign.length+a.footer.sign.length+5,l=Buffer.alloc(s),o=0;l.writeInt8(JOINT_TAG,0),l.writeInt32LE(3,1),o+=5,i(a.header.sign),i(a.central.sign),i(a.footer.sign);var g=_crypto.createHash("SHA256");g.update(l);var u=g.digest(),c=makeSignChunk(e.options,u,n,t,r);e.signchunk=saveSignChunk(c)}function makeSignChunk(e,n,t,r,i){var a=Buffer.alloc(n.length+12);a.writeInt32LE(n.length+8,0),a.writeInt32LE(CRYPT_TYPE_RSA_SHA256,4),a.writeInt32LE(n.length,8),n.copy(a,12);var s={len:a.length,buffer:a},l=Buffer.alloc(i.length+4);l.writeInt32LE(i.length,0),i.copy(l,4);var o={len:l.length,buffer:l},g={len:12,digests:{size:0,data:[]},certs:{size:0,data:[]},additional:0};g.digests.data.push(s),g.digests.size+=s.len,g.len+=s.len,g.certs.data.push(o),g.certs.size+=o.len,g.len+=o.len;var u=Buffer.from(_signature.Base64.unarmor(r)),c={len:16+u.length,size:12+u.length,signdata:{size:0,buffer:null},signatures:{size:0,data:[]},pubkey:{size:u.length,buffer:u}};c.signdata.buffer=makeSignDataBuffer(g),c.signdata.size=g.len,c.size+=g.len,c.len+=g.len;var f=_crypto.createSign("RSA-SHA256");f.update(c.signdata.buffer);var h=f.sign(t),d={len:h.length+12,size:h.length+8,id:CRYPT_TYPE_RSA_SHA256,buffer:h};c.signatures.data.push(d),c.signatures.size+=d.len,c.size+=d.len,c.len+=d.len;var p={len:4,size:0,data:[]};p.data.push(c),p.size+=c.len,p.len+=c.len;var I={len:p.len+12,size:p.len+4,id:SIGN_TYPE_FULL_PACKAGE,value:p},E={len:32,size:24,data:[]};if(E.data.push(I),E.size+=I.len,E.len+=I.len,e.files){var _=signFiles(e.files,t);if(_){var L={len:4,size:0,data:[]};L.data.push(_),L.size+=_.length,L.len+=_.length;var v={len:L.len+12,size:L.len+4,id:SIGN_TYPE_FILE_LIST,value:L};E.data.push(v),E.size+=v.len,E.len+=v.len}}return E}function makeSignDataBuffer(e){var n=Buffer.alloc(e.len),t=0;return n.writeInt32LE(e.digests.size,t),t+=4,e.digests.data.forEach(function(e){e.buffer.copy(n,t),t+=e.len}),n.writeInt32LE(e.certs.size,t),t+=4,e.certs.data.forEach(function(e){e.buffer.copy(n,t),t+=e.len}),n.writeInt32LE(e.additional,t),n}function saveSignChunk(e){var n=Buffer.alloc(e.len),t=0;return n.writeInt32LE(e.size,t),t+=4,n.writeInt32LE(0,t),t+=4,e.data.forEach(function(e){n.writeInt32LE(e.size,t),t+=4,n.writeInt32LE(0,t),t+=4,n.writeInt32LE(e.id,t),t+=4,n.writeInt32LE(e.value.size,t),t+=4,SIGN_TYPE_FULL_PACKAGE===e.id?e.value.data.forEach(function(e){n.writeInt32LE(e.size,t),t+=4,n.writeInt32LE(e.signdata.size,t),t+=4,e.signdata.buffer.copy(n,t),t+=e.signdata.buffer.length,n.writeInt32LE(e.signatures.size,t),t+=4,e.signatures.data.forEach(function(e){n.writeInt32LE(e.size,t),t+=4,n.writeInt32LE(e.id,t),t+=4,n.writeInt32LE(e.buffer.length,t),t+=4,e.buffer.copy(n,t),t+=e.buffer.length}),n.writeInt32LE(e.pubkey.size,t),t+=4,e.pubkey.buffer.copy(n,t),t+=e.pubkey.buffer.length}):SIGN_TYPE_FILE_LIST===e.id&&e.value.data.forEach(function(e){e.copy(n,t),t+=e.length})}),n.writeInt32LE(e.size,t),t+=4,n.writeInt32LE(0,t),t+=4,Buffer.from(SIGN_MAGIC).copy(n,t),n}function makeSignFile(e){var n=_path.extname(e),t=_path.dirname(e),r=_path.basename(e,n);return _path.join(t,r+".signed"+n)}function saveChunk(e,n,t){var r=Buffer.alloc(e.length+n.signchunk.length),i=0,a=n.sections;e.copy(r,i,a.header.startIndex,a.header.startIndex+a.header.len),i+=a.header.len,n.signchunk.copy(r,i),i+=n.signchunk.length,e.copy(r,i,a.central.startIndex,a.central.startIndex+a.central.len),i+=a.central.len,e.writeInt32LE(a.central.startIndex+n.signchunk.length,a.footer.startIndex+16),e.copy(r,i,a.footer.startIndex,a.footer.startIndex+a.footer.len),i+=a.footer.len,_fs.writeFileSync(t,r)}function signFiles(e,n,t){var a={len:8,size:4,digests:[],sign:null};return e.forEach(function(e){var n=_signature.CRC32.digest(e.name.toString()),t=6+e.hash.length,r=Buffer.alloc(t),i=0;r.writeInt32LE(n,i),i+=4,r.writeInt16LE(e.hash.length,i),i+=2,e.hash.copy(r,i),i+=e.hash.length,a.digests.push(r),a.size+=t,a.len+=t}),signDigestChunk(a,n),saveDigestChunk(a,t)}function signDigestChunk(e,n){var t=Buffer.alloc(e.size),r=0;t.writeInt32LE(CRYPT_TYPE_RSA_SHA256,r),r+=4,e.digests.forEach(function(e){e.copy(t,r),r+=e.length}),e.digests=t.slice();var i=_crypto.createSign("RSA-SHA256");i.update(t);var a=i.sign(n);e.sign={len:12+a.length,size:8+a.length,id:CRYPT_TYPE_RSA_SHA256,data:a},e.len+=e.sign.len}function saveDigestChunk(e,n){var t=Buffer.alloc(e.len),r=0;return t.writeInt32LE(e.size,r),r+=4,e.digests.copy(t,r),r+=e.digests.length,t.writeInt32LE(e.sign.size,r),r+=4,t.writeInt32LE(e.sign.id,r),r+=4,t.writeInt32LE(e.sign.data.length,r),r+=4,e.sign.data.copy(t,r),r+=e.sign.data.length,n&&_fs.writeFileSync(n,t),t}module.exports={signZip:signZip,hashFile:hashFile};