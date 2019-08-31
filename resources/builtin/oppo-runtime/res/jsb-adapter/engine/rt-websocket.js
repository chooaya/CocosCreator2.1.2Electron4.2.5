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

            // tiny package
            let url = `${qg.env.USER_DATA_PATH}/${certificatePath}`;
            try {
                qg.getFileSystemManager().accessSync(url);
            } catch (error) {
                break;
            }
            certificatePath = url;

        } while (0);
        super(wss, protocols, certificatePath);
    }
}

delete window.WebSocket;
window.WebSocket = RTWebSocket;
delete window.RTWebSocket;
