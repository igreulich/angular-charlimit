angular.module('igCharLimit', []).directive('charLimit', function(){
  return {
    restrict: 'A',
    link: function($scope, $element, $attributes){
      var limit    = $attributes.charLimit;
      var keycodes = [8, 37, 38, 39, 40, 46];

      $element.bind('keyup', function(event){
        var element = $element.parent().parent();

        element.toggleClass('warning', limit - $element.val().length <= 10);
        element.toggleClass('error', $element.val().length > limit);
      });

      $element.bind('keypress', function(event){
        // Once the limit has been met or exceeded, prevent all keypresses from working
        if ($element.val().length >= limit){
          // Except backspace, delete, and arrow keys.
          if (keycodes.indexOf(event.keyCode) === -1) {
            event.preventDefault();
          }
        }
      });
    }
  };
});
