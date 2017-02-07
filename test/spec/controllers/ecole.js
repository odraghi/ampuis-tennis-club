'use strict';

describe('Controller: EcoleCtrl', function () {

  // load the controller's module
  beforeEach(module('atcApp'));

  var EcoleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EcoleCtrl = $controller('EcoleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EcoleCtrl.awesomeThings.length).toBe(3);
  });
});
