var should = chai.should();

describe('Popup', function() {

    var plugin;
    var $html;
    var template = `<div class="popup"><p>The Body.</p></div>`;

    afterEach(function() {
        plugin.destroy();
        plugin = null;
        $html.remove();
        $html = null;
    });

    describe('Constructor', function() {

        it('should create a popup object', function () {
            $html = $(template).appendTo('body');
            plugin = new Popup($html);

            plugin.$html.should.be.an('object');
        });

    });

    describe('Visibility', function() {

        it('should not be visible by default', function () {
            $html = $(template).appendTo('body');
            plugin = new Popup($html);

            plugin.$html.should.not.be.visible;
        });

        it('should show, given a signal', function (done) {
            $html = $(template).appendTo('body');
            plugin = new Popup($html);

            plugin.$html.on('show-popup', function () {
                plugin.$html.should.be.visible;
                done();
            });

            plugin.open();
        });

        it('should hide, given a signal', function (done) {
            $html = $(template).appendTo('body');
            plugin = new Popup($html);

            plugin.$html.on('hide-popup', function () {
                plugin.$html.should.not.be.visible;
                done();
            });

            plugin.open();

            plugin.close();
        });

    });

});

