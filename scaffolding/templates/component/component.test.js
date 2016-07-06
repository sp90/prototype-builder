describe('{{nameUpper}} component', function() {
  var $compile,
      $rootScope;

  beforeEach(module('app'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should set some component', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile("<{{nameSlugified}}></{{nameSlugified}}>")($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    //expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
  });
});
