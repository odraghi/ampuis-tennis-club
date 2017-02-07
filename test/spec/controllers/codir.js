'use strict';

describe('Controller: CodirCtrl', function () {

  // load the controller's module
  beforeEach(module('atcApp'));

  var CodirCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CodirCtrl = $controller('CodirCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CodirCtrl.awesomeThings.length).toBe(3);
  });
});
