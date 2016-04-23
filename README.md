### Angular Character Limit

This is my directive to limit the number of characters you can enter in a text field. It assumes you are using Bootstrap, and appends the warning class to your ```control-group``` at 10 characters left, and ```error``` at 0.

#### Use

You need to include the ```igCharLimit.js``` file before your app, but after angular.

This directive creates a new html attribute called char-limit. On your ```<input />``` or ```<textarea></textarea>``` you put ```char-limit="x"```, where x is the number of characters you wish to limit the field to.

For example…

  // Load the directive
  <script src="jquery.js"></script>
  <script src="angular.js"></script>
  <script src="igCharLimit.js"></script>
  <script src="ngApp.js"></script>

  // In your controller
  // Include the module in your app
  var ngMyApp = angular.module('myApp', ['igCharLimit']);

  // In your markup
  <textarea ng-model="message" char-limit="10"></textarea>

#### Requirements

* Angularjs (Tested against 1.0.1 and later*)
* jQuery
* Bootstrap (This directive assumes you are using it, and assigns the warning, and error classes to your elemenets control-group div, but does not need Bootstrap to function.)

#### Todo

* Remove dependency on jQuery
* Remove assumption on Bootstrap
