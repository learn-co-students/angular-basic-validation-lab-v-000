function FormController($scope) {
  $scope.name = '';
  $scope.password = '';
  $scope.email = '';
}

angular
    .module('app')
    .controller('FormController', FormController);
