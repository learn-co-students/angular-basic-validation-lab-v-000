function FormController($scope) {
  this.username;
  this.password;
  this.email;
}

angular
    .module('app')
    .controller('FormController', FormController);
