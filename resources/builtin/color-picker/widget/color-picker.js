(()=> {
    'use strict';

    const Chroma = require('chroma-js');

    Editor.polymerElement({
        listeners: {
            'select-color': '_onSelectItemColor',
            'change-color': '_onChangeItemColor'
        },

        properties: {
            noAlpha: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },

            value: {
                type: Object,
                value: function () {
                    return {
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255,
                    };
                },
                notify: true,
                observer: '_onValueColorChanged',
            },

            css: {
                type: String,
                value: '#FFFFFF'
            },

            storage: {
                type: String,
                value: 'storage'
            }
        },

        created: function () {
            this._dragging = false;
        },

        ready: function () {
            this.setColor(this.value);
        },

        setColor: function ( value ) {
            this.value = value;
            this.hsv = this.rgb2hsv(this.value.r, this.value.g, this.value.b);
            this._repaint();
        },

        _repaint: function () {
            var cssRGB = this.hsv2rgb( this.hsv.h, 1, 1 );
            cssRGB = Chroma(cssRGB.r, cssRGB.g, cssRGB.b).css('rgb');
            this.$.colorCtrl.style.backgroundColor = cssRGB;
            this.$.opacityCtrl.style.backgroundColor = cssRGB;
            this.$.opacityHandle.style.top = (255 - this.value.a) / 255 * 100 + '%';
            this.$.hueHandle.style.top = (1 - this.hsv.h) * 100 + '%';
            this.$.colorHandle.style.left = this.hsv.s * 100 + '%';
            this.$.colorHandle.style.top = (1 - this.hsv.v) * 100 + '%';
        },

        _hueCtrlMouseDownAction: function ( event ) {
            event.stopPropagation();

            Editor.UI.addDragGhost('pointer');

            var rect = this.$.hueCtrl.getBoundingClientRect();
            var mouseDownY = rect.top;
            this._dragging = true;

            var updateMouseMove = function (event) {
                event.stopPropagation();

                var offsetY = (event.clientY - mouseDownY) / this.$.hueCtrl.clientHeight;
                offsetY = Math.max( Math.min( offsetY, 1.0 ), 0.001 );

                this.hsv.h = 1.0 - offsetY;
                this._repaint();
                var h = Math.round( this.hsv.h * 100.0 ) / 100.0;
                this.set( 'value', this.hsv2rgb( h, this.hsv.s, this.hsv.v ) );
            };
            updateMouseMove.call(this,event);
            this._repaint();

            var mouseMoveHandle = updateMouseMove.bind(this);
            var mouseUpHandle = (function(event) {
                event.stopPropagation();

                document.removeEventListener('mousemove', mouseMoveHandle);
                document.removeEventListener('mouseup', mouseUpHandle);

                Editor.UI.removeDragGhost();
                this._dragging = false;
            }).bind(this);
            document.addEventListener ( 'mousemove', mouseMoveHandle );
            document.addEventListener ( 'mouseup', mouseUpHandle );
        },

        _colorCtrlMouseDownAction: function ( event ) {
            event.stopPropagation();

            Editor.UI.addDragGhost('pointer');

            var rect = this.$.colorCtrl.getBoundingClientRect();
            var mouseDownX = rect.left;
            var mouseDownY = rect.top;
            this._dragging = true;

            var updateMouseMove = function (event) {
                event.stopPropagation();

                var offsetX = (event.clientX - mouseDownX) / this.$.colorCtrl.clientWidth;
                var offsetY = (event.clientY - mouseDownY) / this.$.colorCtrl.clientHeight;

                offsetX = Math.max( Math.min( offsetX, 1.0 ), 0.0 );
                offsetY = Math.max( Math.min( offsetY, 1.0 ), 0.0 );

                this.hsv.s = offsetX;
                this.hsv.v = 1.0-offsetY;
                var h = Math.round( this.hsv.h * 100.0 ) / 100.0;
                this.set( 'value', this.hsv2rgb( h, this.hsv.s, this.hsv.v ) );

                this._repaint();
            };
            updateMouseMove.call(this,event);

            var mouseMoveHandle = updateMouseMove.bind(this);
            var mouseUpHandle = (function(event) {
                event.stopPropagation();

                document.removeEventListener('mousemove', mouseMoveHandle);
                document.removeEventListener('mouseup', mouseUpHandle);

                Editor.UI.removeDragGhost();
                this._dragging = false;
            }).bind(this);
            document.addEventListener ( 'mousemove', mouseMoveHandle );
            document.addEventListener ( 'mouseup', mouseUpHandle );
        },

        _opacityCtrlMouseDownAction: function (event) {
            event.stopPropagation();

            Editor.UI.addDragGhost('pointer');

            var rect = this.$.opacityCtrl.getBoundingClientRect();
            var mouseDownY = rect.top;
            this._dragging = true;

            var updateMouseMove = function (event) {
                event.stopPropagation();

                var offsetY = (event.clientY - mouseDownY)/this.$.opacityCtrl.clientHeight*255;
                offsetY = Math.max( Math.min( offsetY, 255 ), 0 );
                this.set( 'value.a', parseInt((255 - offsetY))  );
                this._repaint();
            };
            updateMouseMove.call(this,event);

            var mouseMoveHandle = updateMouseMove.bind(this);
            var mouseUpHandle = (function(event) {
                event.stopPropagation();

                document.removeEventListener('mousemove', mouseMoveHandle);
                document.removeEventListener('mouseup', mouseUpHandle);

                Editor.UI.removeDragGhost();
                this._dragging = false;
            }).bind(this);
            document.addEventListener ( 'mousemove', mouseMoveHandle );
            document.addEventListener ( 'mouseup', mouseUpHandle );
        },

        rgb2hsv: function ( r, g, b ) {
            var hsv = { h: 0, s: 0, v: 0 };
            var hsv_ = Chroma(r,g,b).hsv();
            hsv_[0] = isNaN(hsv_[0]) ?  0 : hsv_[0] / 360;
            hsv.h = hsv_[0];
            hsv.s = hsv_[1];
            hsv.v = hsv_[2];
            return hsv;
        },

        hsv2rgb: function ( h, s, v ) {
            var rgb = { r: 0, g: 0, b: 0, a: this.value.a};
            var rgb_ = Chroma.hsv(h * 360,s,v).rgb();
            rgb.r = rgb_[0];
            rgb.g = rgb_[1];
            rgb.b = rgb_[2];
            return rgb;
        },

        rgb2str: function (r, g, b) {
            r = r - 0;
            var rStr = isNaN(r) ? '00' : r.toString(16);
            rStr = rStr.length  === 1 ? '0' + rStr : rStr;

            g = g - 0;
            var gStr = isNaN(g) ? '00' : g.toString(16);
            gStr = gStr.length  === 1 ? '0' + gStr : gStr;

            b = b - 0;
            var bStr = isNaN(b) ? '00' : b.toString(16);
            bStr = bStr.length  === 1 ? '0' + bStr : bStr;

            var str = '#' + rStr + gStr + bStr;
            str = str.toUpperCase();
            return str;
        },

        str2rgb: function (str) {
            if (str[0] !== '#') {
                str = '#' + str;
            }

            var strObject = String(str);
            while (strObject.length < 7) {
                strObject += '0';
            }
            var R = strObject.substr(1, 2);
            var G = strObject.substr(3, 2);
            var B = strObject.substr(5, 2);
            var rNum = parseInt(R, 16);
            var gNum = parseInt(G, 16);
            var bNum = parseInt(B, 16);
            if (isNaN(rNum)) {
                R = '00';
                rNum = 0;
            }
            if (isNaN(gNum)) {
                G = '00';
                gNum = 0;
            }
            if (isNaN(bNum)) {
                B = '00';
                bNum = 0;
            }
            return { r: rNum, g: gNum, b: bNum, css: '#' + R + G + B};
        },

        _onInputChanged: function (event) {
            event.stopPropagation();

            if ( this.value === undefined || this._dragging === true ) {
                return;
            }

            switch (event.target.hint) {
                case 'R': this.set( 'value.r', event.target.inputValue ); break;
                case 'G': this.set( 'value.g', event.target.inputValue ); break;
                case 'B': this.set( 'value.b', event.target.inputValue ); break;
                case 'ALPHA': this.set( 'value.a', event.target.inputValue ); break;
            }
            this.hsv = this.rgb2hsv(this.value.r, this.value.g, this.value.b);
            this._repaint();
            this.set('css', this.rgb2str(this.value.r, this.value.g, this.value.b));
        },

        _onValueColorChanged () {
            this.set('css', this.rgb2str(this.value.r, this.value.g, this.value.b));
        },

        _onCssInputChanged: function (event) {
            event.stopPropagation();

            var value = event.target.value;
            var color = this.str2rgb(value);
            if (color) {
                this.set( 'value.r', color.r );
                this.set( 'value.g', color.g );
                this.set( 'value.b', color.b );

                event.target.value = color.css;
                this.set('css', color.css);
            }
        },

        _onSelectItemColor (event, color) {
            event.stopPropagation();
            event.preventDefault();
            this.set('css', color);
        },

        _onChangeItemColor (event, index) {
            event.stopPropagation();
            event.preventDefault();
            this.$.storage.changeItemColor(index, this.css);
        },

        _onCssMouseOver (event) {
            event.stopPropagation();
            event.preventDefault();
            clearTimeout(this._hiddenStorageTimer);
            this.$.storage.set('hidden', false);
            this.$.storage.update();
        },

        _onCssMouseOut (event) {
            event.stopPropagation();
            event.preventDefault();
            clearTimeout(this._hiddenStorageTimer);
            this._hiddenStorageTimer = setTimeout(() => {
                this.$.storage.set('hidden', true);
            }, 400);
        }
    });
})();
