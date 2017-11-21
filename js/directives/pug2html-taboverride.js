angular.module("pug2html").directive('taboverride', function() {
    return {
        link: function(scope, element, attrs) {
            $("textarea").keydown(function(e) {
                if (e.keyCode === 9) {
                    var start = this.selectionStart;
                    end = this.selectionEnd;
                    var $this = $(this);
                    $this.val($this.val().substring(0, start) +
                        "\t" +
                        $this.val().substring(end));
                    this.selectionStart = this.selectionEnd = start + 1;
                    return false;
                }
            });
        }
    };
});