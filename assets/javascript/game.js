
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
    Luke = {
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
    }
  ];

  }

  //initial characters array
  resetArray();
  chooseChars("#images");

  //helper function to print opp and user char options list
  function chooseChars(string) {
    $(string).html("<h2>Pick your Character:</h2>")
    for (var i = 0; i < characters.length; i++) {
      if(chosen === characters[i]){
        characters.splice(i,1);
        if(i > characters.length - 1)
          continue;
      }
      var newDiv = $("<button class='pictures buttonId'><img src="
      + characters[i].image + " height='100'><div>" +
      characters[i].health + "</div></img></button>");
      newDiv.data("data-object", characters[i]);
      $(string).append(newDiv);
    }
  }

  // helper func generic print function to print the user and opp chars
  function Chars(tag,char) {
    $(tag).html("<h2>Your Character: </h2>")
    $(tag).append("<button class='pictures'><img src="
    + char.image + " height='100'><div>" +
    char.health + "</div></img></button>");
    if(tag === "#images")
      $("#images").append("<button id='attack' class='attackClass'>Attack</button>");
    isChosen === false;
  }

  //save the chosen character to be used by user then print chosen char
  $("#images").on("click","button.buttonId", function () {
    chosen = $(this).data("data-object");
    isChosen = true;
    $("#images").empty();
    chooseChars("#opponent");
    if(isChosen === true)
      Chars("#images",chosen);
  });

  //save the opponent character then print opp char
  $("#opponent").on("click","button.buttonId", function () {
    opponentChar = $(this).data("data-object");
    for (var i = 0; i < characters.length; i++) {
      if(opponentChar === characters[i])
        characters.splice(i,1);
    }
    Chars("#opponent",opponentChar);
  });

  //When user attacks the healths and user attacks are modified
  $("#images").on("click","button.attackClass", function () {
    opponentChar.health -= chosen.attack;
    chosen.health -= opponentChar.counter;
    chosen.attack += chosen.attack;
    Chars("#images",chosen);
    Chars("#opponent",opponentChar);
    $("#stat").html("  chosen health: " + chosen.health);
    $("#stat").append("<br>  chosen attack: " + chosen.attack);
    $("#stat").append(" <br> opponent health: " + opponentChar.health);
    if(chosen.health <= 0){
      $("#images").html("You Lose");
    }
    else if(opponentChar.health <= 0){
      $("#stat").append("<br> You defeated " + opponentChar.name + " choose a new opponent");
      if(characters.length === 0)
        $("#opponent").html("<h1> YOU WIN!!!</h1>");
      chooseChars("#opponent")
    }
  });

  //reset the game
  $("#reset").on("click", function () {
    $("#images").empty();
    $("#opponent").empty();
    $("#stat").empty();
    resetArray();
    isChosen = false;
    console.clear();
    chosen = "";
    chooseChars("#images");

  });


});
