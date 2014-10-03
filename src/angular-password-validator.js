(function(angular){
  'use strict';

  var module = angular.module('passwordValidatorModule', []);

  module.directive('passwordManager', function(){
      return {
        restrict : 'A',
        controller : function(){
          var one;
          this.passwordOneValue = function(value){
            one = value;
          };

          this.getPasswordOneValue = function(){
            return one;
          };

          this.validatePasswords = function(two){
            return one === two;
          };
        }
      };
    });

  module.directive('passwordFieldOne', function(){
    return {
      restrict : 'A',
      require : ['^passwordManager', 'ngModel'],
      link    : function(scope, elem, attr, ctrl){
        scope.$watch(function(){
          return ctrl[1].$viewValue;
        }, function(value){
          ctrl[0].passwordOneValue(value);
        });
      }
    };
  });

  module.directive('passwordFieldTwo', function(){
    return {
      restrict : 'A',
      require : ['^passwordManager', 'ngModel'],
      link    : function(scope, elem, attr, ctrl){
        var manager = ctrl[0], model = ctrl[1];

        function setValidity(viewValue){
          model.$setValidity('passwordNoMatch', manager.validatePasswords(viewValue));
        }

        scope.$watch(function(){
          return manager.getPasswordOneValue();
        }, function(){
          setValidity(model.$viewValue);
        });

        // For DOM -> model validation
        model.$parsers.unshift(function(value) {
          setValidity(value);
          return value;
        });

        // For model -> DOM validation
        model.$formatters.unshift(function(value) {
          setValidity(value);
          return value;
        });
      }
    };
  });
})(angular);