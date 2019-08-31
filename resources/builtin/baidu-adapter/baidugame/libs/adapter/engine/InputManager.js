const sys = cc.sys;
const mgr = _cc && _cc.inputManager;

if (mgr) {
    Object.assign(mgr, {
        getHTMLElementPosition (element) {
            return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },

        getPointByEvent (event, pos) {
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

            let prohibition = sys.isMobile;
            let supportMouse = ('mouse' in sys.capabilities);
            let supportTouches = ('touches' in sys.capabilities);

            // adapt in BAIDU_GAME
            prohibition = false;
            supportTouches = true;
            supportMouse = false;

            if (supportMouse) {
                //HACK
                //  - At the same time to trigger the ontouch event and onmouse event
                //  - The function will execute 2 times
                //The known browser:
                //  liebiao
                //  miui
                //  WECHAT
                if (!prohibition) {
                    window.addEventListener('mousedown', function () {
                        selfPointer._mousePressed = true;
                    }, false);

                    window.addEventListener('mouseup', function (event) {
                        if (!selfPointer._mousePressed)
                            return;
                        
                        selfPointer._mousePressed = false;

                        let pos = selfPointer.getHTMLElementPosition(element);
                        let location = selfPointer.getPointByEvent(event, pos);
                        if (!cc.rect(pos.left, pos.top, pos.width, pos.height).contains(location)){
                            selfPointer.handleTouchesEnd([selfPointer.getTouchByXY(location.x, location.y, pos)]);

                            let mouseEvent = selfPointer.getMouseEvent(location,pos,cc.Event.EventMouse.UP);
                            mouseEvent.setButton(event.button);
                            eventManager.dispatchEvent(mouseEvent);
                        }
                    }, false);
                }

                // register canvas mouse event
                let EventMouse = cc.Event.EventMouse;
                let _mouseEventsOnElement = [
                    !prohibition && ["mousedown", EventMouse.DOWN, function (event, mouseEvent, location, pos) {
                        selfPointer._mousePressed = true;
                        selfPointer.handleTouchesBegin([selfPointer.getTouchByXY(location.x, location.y, pos)]);
                        element.focus();
                    }],
                    !prohibition && ["mouseup", EventMouse.UP, function (event, mouseEvent, location, pos) {
                        selfPointer._mousePressed = false;
                        selfPointer.handleTouchesEnd([selfPointer.getTouchByXY(location.x, location.y, pos)]);
                    }],
                    !prohibition && ["mousemove", EventMouse.MOVE, function (event, mouseEvent, location, pos) {
                        selfPointer.handleTouchesMove([selfPointer.getTouchByXY(location.x, location.y, pos)]);
                        if (!selfPointer._mousePressed) {
                            mouseEvent.setButton(null);
                        }
                    }],
                    ["mousewheel", EventMouse.SCROLL, function (event, mouseEvent) {
                        mouseEvent.setScrollData(0, event.wheelDelta);
                    }],
                    /* firefox fix */
                    ["DOMMouseScroll", EventMouse.SCROLL, function (event, mouseEvent) {
                        mouseEvent.setScrollData(0, event.detail * -120);
                    }]
                ];
                for (let i = 0; i < _mouseEventsOnElement.length; ++i) {
                    let entry = _mouseEventsOnElement[i];
                    if (entry) {
                        let name = entry[0];
                        let type = entry[1];
                        let handler = entry[2];
                        element.addEventListener(name, function (event) {
                            let pos = selfPointer.getHTMLElementPosition(element);
                            let location = selfPointer.getPointByEvent(event, pos);
                            let mouseEvent = selfPointer.getMouseEvent(location, pos, type);
                            mouseEvent.setButton(event.button);

                            handler(event, mouseEvent, location, pos);

                            eventManager.dispatchEvent(mouseEvent);
                            event.stopPropagation();
                            event.preventDefault();
                        }, false);
                    }
                }
            }

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
            if (supportTouches) {
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

                let registerTouchEvent;
                if (sys.browserType === sys.BROWSER_TYPE_BAIDU_GAME_SUB) {
                    _touchEventsMap = {
                        onTouchStart: _touchEventsMap.touchstart,
                        onTouchMove: _touchEventsMap.touchmove,
                        onTouchEnd: _touchEventsMap.touchend,
                        onTouchCancel: _touchEventsMap.touchcancel,
                    };
                    registerTouchEvent = function(eventName) {
                        let handler = _touchEventsMap[eventName];
                        swan[eventName](function(event) {
                            if (!event.changedTouches) return;
                            let pos = selfPointer.getHTMLElementPosition(element);
                            let body = document.body;
                            pos.left -= body.scrollLeft || 0;
                            pos.top -= body.scrollTop || 0;
                            handler(selfPointer.getTouchesByEvent(event, pos));
                        });
                    };
                }
                else {
                    registerTouchEvent = function(eventName) {
                        let handler = _touchEventsMap[eventName];
                        element.addEventListener(eventName, (function(event) {
                            if (!event.changedTouches) return;
                            let pos = selfPointer.getHTMLElementPosition(element);
                            let body = document.body;
                            pos.left -= body.scrollLeft || 0;
                            pos.top -= body.scrollTop || 0;
                            handler(selfPointer.getTouchesByEvent(event, pos));
                            event.stopPropagation();
                            event.preventDefault();
                        }), false);
                    };
                }
                for (let eventName in _touchEventsMap) {
                    registerTouchEvent(eventName);
                }
            }

            if (sys.browserType !== sys.BROWSER_TYPE_WECHAT_GAME_SUB) {
                //register keyboard event
                this._registerKeyboardEvent();
            }

            this._isRegisterEvent = true;
        },

        _registerKeyboardEvent () {
            // baidu_game not support
        },
    });
}