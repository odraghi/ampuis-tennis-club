'use strict';

describe('Controller: PresseCtrl', function () {

  // load the controller's module
  beforeEach(module('atcApp'));

  var PresseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PresseCtrl = $controller('PresseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PresseCtrl.awesomeThings.length).toBe(3);
  });
});
