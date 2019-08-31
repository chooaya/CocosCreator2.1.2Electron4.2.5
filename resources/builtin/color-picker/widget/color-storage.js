'use strict';

Editor.polymerElement({
    properties: {
        colors: {
            type: Array,
            value: []
        },

        storage: {
            type: String,
            value: 'storage'
        }
    },

    ready () {
        this.update();
    },

    update () {
        var colorString = localStorage[`color_picker_${this.storage}`] || '';
        var colors = colorString.split(',');
        for (let i=0; i<10; i++) {
            let color = colors[i];
            if (color) continue;
            colors[i] = '';
        }
        this.set('colors', colors);
    },

    changeItemColor (index, color) {
        var colors = this.colors.map((c, i) => {
            return index === i ? color : c;
        });
        this.set('colors', colors);
        localStorage[`color_picker_${this.storage}`] = colors.join(',');
    }

});
