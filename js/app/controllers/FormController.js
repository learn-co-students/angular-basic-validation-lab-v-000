function FormController() {
	this.username = ""
	this.password = ""
}

angular
    .module('app')
    .controller('FormController', FormController);
