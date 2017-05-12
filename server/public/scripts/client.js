var myApp = angular.module('myApp', []);

// setting up a controller
myApp.controller('HighFiveController', function($http, GetHighFives){
  console.log('controller running');

  var vm = this;

  vm.items = [];

  // current counter
  vm.count = GetHighFives.counterGetter();

  // count up by 1
  vm.counting = function(){
    GetHighFives.counterSetter();
    vm.count = GetHighFives.counterGetter();
  };

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
      vm.object = ('Saitama just PUNCH your head off!!!');
      console.log('Saitama Wins!', vm.object);
      // return ('Saitama Wins!');
    }
    // other wise
    else if (vm.item >= vm.heroNum) {
      // then print out this string
      vm.object = ('You survived his PUNCH!!!');
    }
  };

  // a function that calls both ramNum and result functions 
  vm.newFun = function() {
    vm.ramNum();
    vm.result();
  };

});// end myApp
