myApp.service('GetHighFives', function($http){
  var counter = 0;

  // // return current value of getCounter
  // this.counterGetter = function(){
  //   return counter;
  // };
  //
  // this.counterSetter = function(){
  //   console.log('counter setter running');
  //   counter++;
  // };

  this.heroRandom = function(){
    return (Math.floor((Math.random() * 10) + 1));
  };

  this.userRandom = function(){
    return (Math.floor((Math.random() * 10) + 1));
  };

});// end myApp.service
