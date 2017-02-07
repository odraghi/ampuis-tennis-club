'use strict';

describe('Controller: TournoisCtrl', function () {

  // load the controller's module
  beforeEach(module('atcApp'));

  var TournoisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TournoisCtrl = $controller('TournoisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TournoisCtrl.awesomeThings.length).toBe(3);
  });
});
