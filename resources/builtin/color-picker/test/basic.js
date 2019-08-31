describe('<color-picker>', function() {
    var cpEl;
    beforeEach(function ( done ) {
        fixture('widget', function ( el ) {
            cpEl = el;
            done();
        });
    });

    it('check default value', function( done ) {
        expect(cpEl.value).to.be.eql(new Object({r:255,g:255,b:255,a:1}));
        done();
    });

    it('can be set value', function( done ) {
        cpEl.setColor(new Object({r:255,g:0,b:255,a:1}));
        expect(cpEl.value).to.be.eql(new Object({r:255,g:0,b:255,a:1}));
        var unitInputs = cpEl.getElementsByTagName('editor-unit-input');
        expect(unitInputs[0].inputValue).to.be.eql(255);
        expect(unitInputs[1].inputValue).to.be.eql(0);
        expect(unitInputs[2].inputValue).to.be.eql(255);
        expect(unitInputs[3].inputValue).to.be.eql(1);
        done();
    });

});
