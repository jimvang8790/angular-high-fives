var myApp = angular.module('myApp', []);

// setting up a controller
myApp.controller('HighFiveController', function($http, GetHighFives){
  console.log('controller running');

  var vm = this;
  vm.items = [];
  // // current counter
  // vm.count = GetHighFives.counterGetter();
  //
  // // count up by 1
  // vm.count = function(){
  //   GetHighFives.counterSetter();
  //   vm.count = GetHighFives.counterGetter();
  // };

  vm.heroNum = GetHighFives.heroRandom();
  console.log('hero number:',vm.heroNum);

  vm.userNum = GetHighFives.userRandom();
  console.log('user number:', vm.userNum);

  vm.ramNum = function(){
    vm.item = GetHighFives.userRandom();
    console.log('User Number:', vm.item);
  };

  vm.result = function(){
    if (vm.heroNum >= vm.item) {
      vm.object = ('Saitama just PUNCH your head off!!!');
      console.log('Saitama Wins!', vm.object);
      // return ('Saitama Wins!');
    }
    else if (vm.item >= vm.heroNum) {
      vm.object = ('You survived his PUNCH!!!');
    }
  };

  vm.newFun = function() {
    vm.ramNum();
    vm.result();
  };

});// end myApp
