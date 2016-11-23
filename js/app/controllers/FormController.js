function FormController($scope) {
  console.log($scope);
  $scope.form = {
    username: {
        $untouched: true,
        $touched: false,
        $pristine: true,
        $dirty: false,
        $valid: false,
        $invalid: true,
        $error: {
            required: true
        }
    },
    password: {
        $untouched: true,
        $touched: false,
        $pristine: true,
        $dirty: false,
        $valid: false,
        $invalid: true,
        $error: {
            required: true,
            minlength : true
        }
    },
    email: {
        $untouched: true,
        $touched: false,
        $pristine: true,
        $dirty: false,
        $valid: false,
        $invalid: true,
        $error: {
            required: true
        }
    }

  };
}

angular
    .module('app')
    .controller('FormController', FormController);
