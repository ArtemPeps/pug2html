angular.module('pug2html')
    .directive('pug2htmlError', function() {
        return {
            link: function(scope, elm, attrs) {
                scope.$watch("error", function(newValue, oldValue) {
                    if (newValue) {
                        $(elm).prev().before("<div class='error' id='mainError'>" + newValue + "</div>");
                    } else $("#mainError").remove();
                });
            }
        };
    });