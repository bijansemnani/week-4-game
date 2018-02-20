
$(document).ready(function() {
  var chosen;
  var isChosen = false;
  var opponentChar;
  var characters =[];
  var index = 0;

  function resetArray() {

    characters =
    [Luke = {
      name: "Luke",
      health: 500,
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
    },
  ];

  }

  //initial characters array
  resetArray();
  chooseChars("#images");

  function chooseChars(string) {
    $("#images").html("<h2>Pick your Character:</h2>")
    for (var i = 0; i < characters.length; i++) {
      console.log(i);
      if(chosen === characters[i]){
        console.log("here" + i);
        characters.splice(i,1);
        console.log(characters);
        if(i > characters.length - 1)
          continue;
      }
      var newDiv = $("<button class='pictures buttonId'><img src="
      + characters[i].image + " height='100'></img></button>");
      newDiv.data("data-object", characters[i]);
      $(string).append(newDiv);
    }
    if(isChosen === true){
      $("#images").html("<h2>Your Character: </h2>")
      $("#images").append("<img src="+ chosen.image + " height='100'>");
      $("#images").append("<button id='attack' class='attackClass'>Attack</button>");
      isChosen === false;
    }
  }

  $("#images").on("click","button.attackClass", function () {
    opponentChar.health -= chosen.attack;
    chosen.health -= opponentChar.counter;
    chosen.attack += chosen.attack;
    console.log("chosen health: " + chosen.health);
    console.log("chosen attack: " + chosen.attack);
    console.log("opponent health: " + opponentChar.health);
    if(chosen.health <= 0){
      $("#images").html("You Lose");
    }
    if(opponentChar.health <= 0){
      $("#opponent").html("You defeated " + opponentChar.name + " choose a new opponent");
      if(characters.length === 0){
        $("#opponent").html("<h1> YOU WIN!!!</h1>");
      }
      chooseChars("#opponent")
    }
  });

  //save the chosen character to be used by user
  $("#images").on("click","button.buttonId", function () {
    chosen = $(this).data("data-object");
    isChosen = true;
    $("#images").empty();
    chooseChars("#opponent");
  });

  $("#opponent").on("click","button.buttonId", function () {
    opponentChar = $(this).data("data-object");
    for (var i = 0; i < characters.length; i++) {
      if(opponentChar === characters[i]){
        characters.splice(i,1);
      }
    }
    $("#opponent").html("<h2>Your opponent:</h2>");
    $("#opponent").append("<img src="+ opponentChar.image + " height='100'>");
  });

  //reset the game
  $("#reset").on("click", function () {
    $("#images").empty();
    $("#opponent").empty();
    resetArray();
    isChosen = false;
    console.clear();
    chosen = "";
    chooseChars("#images");

  });


});
