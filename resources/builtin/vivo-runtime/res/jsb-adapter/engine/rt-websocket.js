
class RTWebSocket extends window.WebSocket {
    constructor(wss, protocols, certificatePath) {
        do {
            if (typeof certificatePath !== 'string') {
                break;
            }

            //md5
            var md5Pipe = cc.loader.md5Pipe;
            if (md5Pipe) {
                certificatePath = md5Pipe.transformURL(certificatePath);
            }

            // small package
            let url = 'internal://files/' + certificatePath;
            let isExist = qg.accessFile({ uri: url });
            if (isExist === "true") {
                certificatePath = url;
                break;
            }
        } while (0);
        super(wss, protocols, certificatePath);
    }
}
delete window.WebSocket;
window.WebSocket = RTWebSocket;
delete window.RTWebSocket;
