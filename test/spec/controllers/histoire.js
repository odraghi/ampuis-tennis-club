'use strict';

describe('Controller: HistoireCtrl', function () {

  // load the controller's module
  beforeEach(module('atcApp'));

  var HistoireCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HistoireCtrl = $controller('HistoireCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HistoireCtrl.awesomeThings.length).toBe(3);
  });
});
