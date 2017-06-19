/**
 * @param {jQuery} $el
 */
function Popup($el) {

    /** @var {jQuery} $html */
    this.$html = $el;

    var popup = this;

    init();

    /**
     * Close popup.
     */
    this.close = function() {
        this.$html.trigger('hide-popup', this);
    };

    /**
     * Open popup.
     */
    this.open = function() {
        this.$html.trigger('show-popup', this);
    };

    /**
     * Destroy object.
     */
    this.destroy = function() {
        delete this.$html;
    };

    /**
     * Initialize object.
     */
    function init() {
        popup.$html.hide();

        popup.$html.on('hide-popup', function(e, target) {
            target.$html.hide();
        });

        popup.$html.on('show-popup', function(e, target) {
            target.$html.show();
        });
    }
}

