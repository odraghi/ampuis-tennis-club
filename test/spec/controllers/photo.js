'use strict';

describe('Controller: PhotoCtrl', function () {

  // load the controller's module
  beforeEach(module('atcApp'));

  var PhotoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotoCtrl = $controller('PhotoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhotoCtrl.awesomeThings.length).toBe(3);
  });
});
