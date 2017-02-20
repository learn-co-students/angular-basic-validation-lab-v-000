function FormController($scope) {
  $scope.username = ""
}

angular
    .module('app')
    .controller('FormController', FormController);
