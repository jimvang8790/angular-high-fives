myApp.service('GetHighFives', function(){// no need to inject just yet b/c

  // randomly grenerate Saitama's power level between 1 and 10
  this.heroRandom = function(){
    return (Math.floor((Math.random() * 10) + 1));
  };// end heroRandom

  // randomly generate user's defence number between 1 and 10
  this.userRandom = function(){
    return (Math.floor((Math.random() * 10) + 1));
  };// end userRandom

  // generate brady's random number
  this.bradyRandom = function() {
    return (Math.floor((Math.random() * 10) + 9));
  };// end bradyRandom

  // generate football players' random
  this.teamRandom = function() {
    return (Math.floor((Math.random() * 8) + 1));
  };// end teamRandom
  
});// end myApp.service
