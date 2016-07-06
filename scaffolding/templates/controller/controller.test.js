// Some test here
describe('{{nameUpper}} function', function() {

  describe('{{nameUpper}}', function() {
    var $scope;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('{{nameUpper}}', {
      	$scope: $scope
      });
    }));

    it('should create something', function() {
      // Expect something
    });
  });
});
