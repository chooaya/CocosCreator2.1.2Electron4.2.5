const Audio = cc.Audio;

Object.assign(Audio.prototype, {
    _onLoaded  () {
        let elem = this._src._nativeAsset;
        // Reuse dom audio element
        if (!this._element) {
            this._element = qg.createInnerAudioContext();
        }
        this._element.src = elem.src;
    
        this.setVolume(this._volume);
        this.setLoop(this._loop);
        if (this._nextTime !== 0) {
            this.setCurrentTime(this._nextTime);
        }
        if (this._state === Audio.State.PLAYING) {
            this.play();
        }
        else {
            this._state = Audio.State.INITIALZING;
        }
    },

    play () {
        // marked as playing so it will playOnLoad
        this._state = Audio.State.PLAYING;

        if (!this._element) {
            return;
        }

        this._bindEnded();
        this._element.play();
    },

    stop () {
        if (!this._element) return;
        this._element.stop();
        this._unbindEnded();
        this.emit('stop');
        this._state = Audio.State.STOPPED;
    },

    setCurrentTime (num) {
        // TODO: To ensure innerAudioContext loaded
        if (this._element) {
            this._element.seek(num);
        }
    },

    getState () {
        return this._state;
    },

    destroy () {
        if (this._element) {
            this._element.destroy();
            this._element = null;
        }
    },
});