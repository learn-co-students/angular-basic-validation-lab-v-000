function FormController($scope) {
	$scope.limitKeypress = function ($event, value, maxLength) {
      if (value != undefined && value.toString().length >= maxLength) {
          $event.preventDefault();
      }
  }

}

angular
    .module('app')
    .controller('FormController', FormController);
