describe('Angular Password Validator', function () {
  var $compile, $rootScope,
    html = '<form name="epicForm" data-password-manager>' +
      '<input data-password-field-one ng-model="auth.one"/>' +
      '<input data-password-field-two ng-model="auth.two"/>' +
      '</form>';

  function compileToHtml(html, scope) {
    var element = $compile(html)(scope);
    scope.$apply();
    return element;
  }

  beforeEach(module('passwordValidatorModule'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should compile to HTML', function () {
    var elem = compileToHtml(html, $rootScope);
    expect(elem.children().length).toBeGreaterThan(0);
  });

  it('should set form to invalid if passwords do not match', function () {
    $rootScope.auth = {
      one: 1,
      two: 2
    };
    var scope = compileToHtml(html, $rootScope).scope();
    expect(scope.epicForm.$invalid).toBeTruthy();
  });

  it('should set form to valid if passwords match', function () {
    $rootScope.auth = {
      one: 1,
      two: 1
    };
    var scope = compileToHtml(html, $rootScope).scope();
    expect(scope.epicForm.$valid).toBeTruthy();
  });

  it('should set form to invalid if first password field is changed', function () {
    $rootScope.auth = {
      one: 1,
      two: 1
    };
    var scope = compileToHtml(html, $rootScope).scope();
    expect(scope.epicForm.$valid).toBeTruthy();

    $rootScope.auth.one = 2;
    scope.$apply();
    expect(scope.epicForm.$valid).toBeFalsy();
  });

});