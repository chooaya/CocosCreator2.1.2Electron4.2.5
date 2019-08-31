const Audio = cc.Audio;

if (Audio) {
    Object.assign(Audio.prototype, {
        play () {
            // marked as playing so it will playOnLoad
            this._state = Audio.State.PLAYING;

            if (!this._element) {
                return;
            }

            this._bindEnded();
            this._element.play();
        },

        destroy () {
            this._element && this._element.destroy();

            this._element = null;
        },

        setCurrentTime (num) {
            if (this._element) {
                this._nextTime = 0;
            }
            else {
                this._nextTime = num;
                return;
            }

            this._unbindEnded();
            
            this._bindEnded(function () {
                this._bindEnded();
            }.bind(this));

            try {
                this._element.currentTime = num;
            }
            catch (err) {
                let _element = this._element;
                if (_element.addEventListener) {
                    let func = function () {
                        _element.removeEventListener('loadedmetadata', func);
                        _element.currentTime = num;
                    };
                    _element.addEventListener('loadedmetadata', func);
                }
            }
        },

        getState () {
            return this._state;
        },
    });
}