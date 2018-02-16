
$(document).ready(function() {
  var chosen;
  var characters =
  [Luke = {
    name: "Luke",
    health: 100,
    attack: 4,
    counter: 50,
    image: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768"
  },
   Palpatine = {
     name: "Palpatine",
     health: 200,
     attack: 6,
     counter: 70,
     image:"https://vignette.wikia.nocookie.net/starwars/images/9/9a/Palp_trustme.jpg/revision/latest/scale-to-width-down/250?cb=20070114040526"
  },
   ObiWan = {
     name: "ObiWan",
     health: 250,
     attack: 5,
     counter: 80,
     image:"https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2018%2F02%2FEwan-McGregor-as-Obi-Wan-Kenobi.jpg&c=sc&w=850&h=560"
  }];

  //initial characters array
  chooseChars("#images");

  function chooseChars(string) {
    for (var i = 0; i < characters.length; i++) {
      if(chosen === characters[i])
        continue;
      var newDiv = $("<button class='pictures buttonId'><img src="
      + characters[i].image + " height='100'></img></button>");
      newDiv.data("data-object", characters[i]);
      $(string).append(newDiv);
    }
  }

  //save the chosen character to be used by user
  $("#images").on("click","button.buttonId", function () {
    chosen = $(this).data("data-object");
    $("#images").empty();
    chooseChars("#opponent");
    console.log(chosen);
  });

  //reset the game
  $("#reset").on("click", function () {
    $("#images").empty();
    $("#opponent").empty();
    console.clear()
    chosen = "";
    chooseChars("#images");

  });


});
