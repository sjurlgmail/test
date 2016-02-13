Meteor.startup(function(){
  if(Beers.find().count() === 0){

    var sampleBeers = [
      {
        beername: "Good IPA",
        brewer: "Lid Beer",
        description: "A very good IPA that we know you will like",
        image: "images/lidbeer.png",
        votes: 0
      },
      {
        beername: "Not so good IPA",
        brewer: "who knows",
        description: "not so good, but you will probarbly not care when you get to this beer anyway",
        image: "images/otherbeer.png",
        votes: 0
      }
    ];

    _.each(sampleBeers, function(beer){
      Beers.insert(beer);
    });
  }

});
