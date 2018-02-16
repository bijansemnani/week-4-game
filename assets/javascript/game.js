
$(document).ready(function() {
  var characters =
  [Luke = {
    health: 100,
    attack: 4,
    counter: 50,
    image: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768"
  },
   Palpatine = {
     health: 200,
     attack: 6,
     counter: 70,
     image:"https://vignette.wikia.nocookie.net/starwars/images/9/9a/Palp_trustme.jpg/revision/latest/scale-to-width-down/250?cb=20070114040526"
  },
   ObiWan = {
     health: 250,
     attack: 5,
     counter: 80,
     image:"https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2018%2F02%2FEwan-McGregor-as-Obi-Wan-Kenobi.jpg&c=sc&w=850&h=560"
  }];

  for (var i = 0; i < characters.length; i++) {
    var newDiv = $("<button class='pictures buttonId'><img src="
    + characters[i].image + " height='100'></img></button>");
    newDiv.data("data-object", characters[i]);
    $("#images").append(newDiv);
  }

  $(".buttonId").on("click", function () {
    console.log("here");
    var chosen = $(this).data("data-object");
    console.log(chosen);
  });


});
