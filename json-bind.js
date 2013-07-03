(function ($) {
    $.fn.BindJson = function (fieldData, cssClassPrefix) {
        var selectorPrefix = " ." + cssClassPrefix,
            key = [],
            ctl = null,
            isTextField = false,
            fill = "";
        for (key in fieldData) {
            if (fieldData.hasOwnProperty(key)) {
                ctl = $(selectorPrefix + key, this);
                fill = fieldData[key];
                if (ctl.length != 0) {
                    isTextField = (ctl[0].tagName == "DIV" || ctl[0].tagName == "SPAN" || ctl[0].tagName == "LABEL");
                    if (isTextField) {
                        ctl.text(fill);
                    } else if (ctl[0].type == 'checkbox') {
                        ctl.attr('checked', (fill == true));
                    } else {
                        ctl.val(fill);
                    }
                }
            }
        }
    };
})(jQuery);

(function ($) {
    $.fn.ClearDataFields = function (clearClass) {
        $(":input", this).each(function () {
            var type = this.type,
                tag = this.tagName.toLowerCase();
            if (type == 'text' || type == 'password' || tag == 'textarea' || type == 'hidden') {
                this.value = "";
            } else if (type == 'checkbox' || type == 'radio') {
                this.checked = false;
            } else if (tag == 'select') {
                this.selectedIndex = 0;
            }
        });
        if (clearClass) {
            $("." + clearClass, this).text("");
        }
    };
})(jQuery);
