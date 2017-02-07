'use strict';

describe('Controller: LoisirsCtrl', function () {

  // load the controller's module
  beforeEach(module('atcApp'));

  var LoisirsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoisirsCtrl = $controller('LoisirsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoisirsCtrl.awesomeThings.length).toBe(3);
  });
});
