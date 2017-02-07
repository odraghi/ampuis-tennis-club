'use strict';

describe('Controller: PresidentCtrl', function () {

  // load the controller's module
  beforeEach(module('atcApp'));

  var PresidentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PresidentCtrl = $controller('PresidentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PresidentCtrl.awesomeThings.length).toBe(3);
  });
});
