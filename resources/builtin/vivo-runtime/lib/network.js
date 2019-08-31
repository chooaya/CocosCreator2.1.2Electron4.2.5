var os = require('os');
var getHostIp = function () {
    // update ip address
    let ifaces = os.networkInterfaces();
    let _ips = [];
    for (let ifname in ifaces) {
        ifaces[ifname].forEach((iface) => {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            if ('IPv4' === iface.family && iface.internal === false) {
                _ips.push(iface.address);
            }
        });
    }
    if (process.platform === 'win32') {
        _ips = _ips.filter((_ip) => {
            return /^(?!169\.254)/.test(_ip);
        });
    }
    return _ips;
}

let network = {
    getHostIp
}
module.exports = network;