function FormController($scope) {
	$scope.minUser = 3;
	$scope.minPassword = 8;
}

angular
    .module('app')
    .controller('FormController', FormController);
