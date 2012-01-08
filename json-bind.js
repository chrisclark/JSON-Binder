(function($) {
    $.fn.BindJson = function(fielddata, cssClassPrefix) {
        var selectorPrefix = " ." + cssClassPrefix;
        for (key in fielddata) {
            var ctl = $(selectorPrefix + key, this);
            if (ctl.length != 0) {
                var isTextField = (ctl[0].tagName == "DIV" || ctl[0].tagName == "SPAN" || ctl[0].tagName == "LABEL");
                if (isTextField) ctl.text(fielddata[key]);
                if (ctl[0].type == 'checkbox') ctl.attr('checked', (fielddata[key] == true));
                else ctl.val(fielddata[key]);
            }
        }
    };

})(jQuery);

(function($) {
    $.fn.ClearDataFields = function(clearClass) {
        $(":input", this).each(function() {
            var type = this.type;
            var tag = this.tagName.toLowerCase();
            if (type == 'text' || type == 'password' || tag == 'textarea' || type == 'hidden') this.value = "";
            else if (type == 'checkbox' || type == 'radio') this.checked = false;
            else if (tag == 'select') this.selectedIndex = 0;
        });
        //clearClass needed to clear non-input elements
        $("." + clearClass, this).text("");
    };
})(jQuery);
});