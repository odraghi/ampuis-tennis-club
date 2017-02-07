'use strict';

describe('Controller: ChampionnatsCtrl', function () {

  // load the controller's module
  beforeEach(module('atcApp'));

  var ChampionnatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChampionnatsCtrl = $controller('ChampionnatsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChampionnatsCtrl.awesomeThings.length).toBe(3);
  });
});
