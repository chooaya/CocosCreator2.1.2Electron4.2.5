const inputManager = _cc.inputManager;

Object.assign(inputManager, {
    getHTMLElementPosition () {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },

    getPointByEvent () {
        if (event.pageX != null)  //not avalable in <= IE8
            return {x: event.pageX, y: event.pageY};

        pos.left = 0;
        pos.top = 0;
        return {x: event.clientX, y: event.clientY};
    },

    registerSystemEvent (element) {
        if(this._isRegisterEvent) return;

        this._glView = cc.view;
        let selfPointer = this;

        if (window.navigator.msPointerEnabled) {
            let _pointerEventsMap = {
                "MSPointerDown"     : selfPointer.handleTouchesBegin,
                "MSPointerMove"     : selfPointer.handleTouchesMove,
                "MSPointerUp"       : selfPointer.handleTouchesEnd,
                "MSPointerCancel"   : selfPointer.handleTouchesCancel
            };
            for (let eventName in _pointerEventsMap) {
                let touchEvent = _pointerEventsMap[eventName];
                element.addEventListener(eventName, function (event){
                    let pos = selfPointer.getHTMLElementPosition(element);
                    pos.left -= document.documentElement.scrollLeft;
                    pos.top -= document.documentElement.scrollTop;

                    touchEvent.call(selfPointer, [selfPointer.getTouchByXY(event.clientX, event.clientY, pos)]);
                    event.stopPropagation();
                }, false);
            }
        }

        //register touch event
        let _touchEventsMap = {
            "touchstart": function (touchesToHandle) {
                selfPointer.handleTouchesBegin(touchesToHandle);
            },
            "touchmove": function (touchesToHandle) {
                selfPointer.handleTouchesMove(touchesToHandle);
            },
            "touchend": function (touchesToHandle) {
                selfPointer.handleTouchesEnd(touchesToHandle);
            },
            "touchcancel": function (touchesToHandle) {
                selfPointer.handleTouchesCancel(touchesToHandle);
            }
        };

        let registerTouchEvent = function(eventName) {
            let handler = _touchEventsMap[eventName];
            element.addEventListener(eventName, (function(event) {
                if (!event.changedTouches) return;
                let pos = selfPointer.getHTMLElementPosition(element);
                let body = document.body;
                pos.left -= body.scrollLeft || 0;
                pos.top -= body.scrollTop || 0;
                handler(selfPointer.getTouchesByEvent(event, pos));
                event.stopPropagation();
                // event.preventDefault();  // Canvas is treated as passive on XiaoMi
            }), false);
        };

        for (let eventName in _touchEventsMap) {
            registerTouchEvent(eventName);
        }

        this._isRegisterEvent = true;
    },
});