var app = angular.module("pug2html", [])
    .controller("mainController", function($scope, $http) {

        $scope.requestHandler = function() {
            var pugTemp = JSON.stringify($scope.input);
            var request = '{\n "template" : ' + pugTemp + ' ,\n ' + '"templateParams" : ' + $scope.json + ' \n}';
            var config = { method: 'POST', url: '/oxseedint/pdfgenerator/customTemplate/html', data: request, headers: { 'Content-Type': 'application/json' } };
            if ($scope.error) { $scope.error = ""; } //Clear error scope before request
            $http(config)
                .then(function(success) {
                    $scope.html = success.data;
                }, function(error) {
                    if (error.data.error.msg)
                        $scope.error = "Error: " + error.data.error.msg;
                    else $scope.error = "Error: " + error.data.error.message;
                });
        };

    });