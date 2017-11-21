angular.module('pug2html')
    .directive('pug2htmlLoader', ['$http', function($http) {
        return {
            link: function(scope, elm, attrs) {
                scope.isLoading = function() { return $http.pendingRequests.length > 0; };
                scope.$watch(scope.isLoading, function(loading) {
                    if (loading) {
                        $(elm).hide();
                        $('<div id="loader"><img src="img/loader.gif"></div>').insertAfter(elm);
                    } else {
                        $(elm).show();
                        $('#loader').remove();
                    }
                });
                $(elm).hide();
            }
        };

    }]);