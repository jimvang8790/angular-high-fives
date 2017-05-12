myApp.service('GetHighFives', function(){// no need to inject just yet b/c

  var counter = 0;

  // return current value of getCounter
  this.counterGetter = function(){
    return counter;
  };

  this.counterSetter = function(){
    console.log('counter setter running');
    counter++;
  };

  // randomly grenerate Saitama's power level between 1 and 10
  this.heroRandom = function(){
    return (Math.floor((Math.random() * 10) + 1));
  };

  // randomly generate user's defence number between 1 and 10
  this.userRandom = function(){
    return (Math.floor((Math.random() * 10) + 1));
  };

});// end myApp.service
