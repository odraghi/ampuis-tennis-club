'use strict';

describe('Controller: InstallationsCtrl', function () {

  // load the controller's module
  beforeEach(module('atcApp'));

  var InstallationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstallationsCtrl = $controller('InstallationsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InstallationsCtrl.awesomeThings.length).toBe(3);
  });
});
