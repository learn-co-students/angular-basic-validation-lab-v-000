function FormController($scope) {
  $scope.username = ''
  $scope.password = ''
  $scope.email = ''
}

angular
    .module('app')
    .controller('FormController', FormController);
