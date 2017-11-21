angular.module('pug2html')
    .directive('pug2htmlRender', function() {
        return {
            link: function(scope, elm, attrs) {
                scope.$watch("html", function(newValue, oldValue) {
                    if (newValue)
                        $(elm).html(attrs.pug2htmlRender);
                });
            }
        };
    });