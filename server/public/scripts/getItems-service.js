myApp.service('GetHighFives', function($http){
  var counter = 0;

  // return current value of getCounter
  this.counterGetter = function(){
    return counter;
  };

  this.counterSetter = function(){
    console.log('counter setter running');
    counter++;
  };

  // grenerate Saitama's power level
  this.heroRandom = function(){
    return (Math.floor((Math.random() * 10) + 1));
  };

  // generate user's defence
  this.userRandom = function(){
    return (Math.floor((Math.random() * 10) + 1));
  };

});// end myApp.service
