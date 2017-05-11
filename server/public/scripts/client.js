var myApp = angular.module('myApp', []);

// setting up a controller
myApp.controller('HighFiveController', function($http, GetHighFives){
  console.log('NG');

  var vm = this;

  // current counter
  // vm.count = GetHighFives.counterGetter();

  // count up by 1
  // vm.count = function(){
  //   GetHighFives.counterSetter();
  //   vm.count = GetHighFives.counterGetter();
  // };

  vm.heroNum = GetHighFives.heroRandom();
  console.log(vm.heroNum);

  vm.userNum = GetHighFives.userRandom();
  console.log(vm.userNum);
});// end myApp
