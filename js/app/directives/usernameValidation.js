function usernameValidation() {
  return {
    controller: function ($scope) {

    },
    controllerAs: 'ctrl',
    link: function (scope, elem, attrs, ctrl) {
      console.log(scope)
    }
  }
}

angular
  .module('app')
  .directive('usernameValidation', usernameValidation)
