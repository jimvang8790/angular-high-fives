myApp.service('GetHighFives', function(){// no need to inject just yet b/c

  // randomly grenerate Saitama's power level between 1 and 10
  this.heroRandom = function(){
    // this.randomNumber = (Math.floor((Math.random() * 10) + 1));
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


  // this.result = function() {
  //   if (this.randomNumber >= item) {
  //     // then print out this string
  //     vm.object = ('Saitama just PUNCH your head off!!! He slowly walks off...');
  //     console.log('Saitama Wins!', vm.object);
  //     vm.picture = 'https://68.media.tumblr.com/c2a5537068de3ad5930c97488a2a2849/tumblr_nzpnw9bvkT1tzzjejo1_500.gif';
  //     // return ('Saitama Wins!');
  //   }
  //   else if (vm.item >= vm.heroNum) {
  //     // then print out this string
  //     vm.object = ('You survived and Saitama is Impress!!!');
  //     vm.count= counter++;
  //     vm.picture = 'https://secure.static.tumblr.com/3c1ba90efbe2c61b52d2d44bf39f67f4/gsht01o/6lZnzdk0m/tumblr_static__640_v2.gif';
  //   }
  // };// end result function
});// end myApp.service
