var myApp = angular.module('myApp', ['ngRoute']);
var counter = 1;
var complete = 0;

// Angular configuration (routes)
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<div> This is the default </div>',
    controller: 'DefaultController as defCtrl'
  })
  .when('/saitama', {
    templateUrl: 'views/saitama.html',
    controller: 'HighFiveController as hf'
  })
  .when('/brady', {
    templateUrl: 'views/brady.html',
    controller: 'SadFiveController as sf'
  })
  .otherwise('/');

  $locationProvider.html5Mode(true);
});// end config

// setting up a controller
myApp.controller('HighFiveController', function($http, GetHighFives){
  console.log('Saitama controller running');

  var vm = this;

  vm.items = [];
  vm.picture = 'https://media.giphy.com/media/yo3TC0yeHd53G/giphy.gif';

  // calling GetHighFives service function and then the heroRandom function
  // to generate a random number on the DOM when page is loaded
  vm.heroNum = GetHighFives.heroRandom();
  console.log('hero number:',vm.heroNum);

  // calling GetHighFives service function and then the heroRandom function
  vm.userNum = GetHighFives.userRandom();
  console.log('user number:', vm.userNum);

  // a function calling userRandom from service side
  // and storing that random number generate by the userRandom function in vm.item
  vm.ramNum = function(){
    vm.item = GetHighFives.userRandom(); // item is storing the random number and not the function ramNum
    console.log('User Number:', vm.item);
  };

  // a function to store the if/else statement
  vm.result = function(){

    // if heroNum is greater than the users number
    if (vm.heroNum >= vm.item) {
      // then print out this string
      vm.object = ('Saitama just PUNCH your head off!!! He slowly walks off...');
      console.log('Saitama Wins!', vm.object);
      vm.picture = 'https://68.media.tumblr.com/c2a5537068de3ad5930c97488a2a2849/tumblr_nzpnw9bvkT1tzzjejo1_500.gif';
      // return ('Saitama Wins!');
    }
    // other wise
    else if (vm.item >= vm.heroNum) {
      // then print out this string
      vm.object = ('You survived and Saitama is Impress!!!');
      vm.count= counter++;
      vm.picture = 'https://secure.static.tumblr.com/3c1ba90efbe2c61b52d2d44bf39f67f4/gsht01o/6lZnzdk0m/tumblr_static__640_v2.gif';
    }
  };

  // a function that calls both ramNum and result functions
  vm.newFun = function() {
    vm.ramNum();
    vm.result();
  };

});// end Saitama's controller

myApp.controller('SadFiveController', function($http, GetHighFives){
  console.log('brady controller running');

  var vm = this;
  // vm.sad = [];

  vm.bradyNum = GetHighFives.bradyRandom();
  console.log('brady number:', vm.bradyNum);

  vm.teamNum = GetHighFives.teamRandom();
  console.log('team number', vm.teamNum);

  vm.genNum = function(){
    vm.sad = GetHighFives.teamRandom();
    console.log('team number', vm.sad);
  };

  // a function to store the if/else statement
  vm.aftermath = function(){
    // if heroNum is greater than the users number
    if (vm.bradyNum >= vm.sad) {
      // then print out this string
      vm.thing = ('No High Five for Tommy Boy!!!');
      console.log('Sad Tom!', vm.object);
      vm.completed= complete++;
      // return ('Saitama Wins!');
    }
    // other wise
    else if (vm.sad >= vm.bradyNum) {
      // then print out this string
      vm.thing = ('A HIHG FIVE!!!');
    }
  };

  vm.noFun = function() {
    vm.genNum();
    vm.aftermath();
  };

});// end brady's controller
