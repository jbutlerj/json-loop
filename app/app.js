var GAMES = [
    {
        gameTitle: "1080º Snowboarding",
        gameImg: "1080_300x300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consecterur adipisicing elit.",        
        gameRating: "E",
    },
    {
        gameTitle: "Banjo-Kazooie",
        gameImg: "banjo_300x300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consecterur adipisicing elit.",        
        gameRating: "E",
    },
    {
        gameTitle: "Blast Corps",
        gameImg: "blast_300x300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consecterur adipisicing elit.",        
        gameRating: "E",
    },
    {
        gameTitle: "Goldeneye 007",
        gameImg: "goldeneye_300x300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consecterur adipisicing elit.",        
        gameRating: "E",
    },
    {
        gameTitle: "Mario Kart 64",
        gameImg: "mariokart_300x300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consecterur adipisicing elit.",        
        gameRating: "E",
    },
    {
        gameTitle: "Super Smash Bros.",
        gameImg: "smashbros_300x300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consecterur adipisicing elit.",       
        gameRating: "E",
    },
    {
        gameTitle: "Starfox 64",
        gameImg: "starfox_300x300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consecterur adipisicing elit.",        
        gameRating: "E",
    },
    {
        gameTitle: "Super Mario 64",
        gameImg: "supermario_300x300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consecterur adipisicing elit.",
        gameRating: "E",
    },
    {
        gameTitle: "Wave Race 64",
        gameImg: "waverace_300x300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consecterur adipisicing elit.",
        gameRating: "E",
    },
    {
        gameTitle: "The Legend of Zelda",
        gameImg: "zelda_300x300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consecterur adipisicing elit.",
        gameRating: "E",
    },
];

function loadData() {
    // jquery version
    $.each(GAMES, function(idx, game){
        $("#app").append(`<div id="${idx}" class="game-holder">
        <h4>${game.gameTitle}</h4>
        <div class="game-image">
          <img src="images/${game.gameImg}" alt="${game.gameTitle}" />
        </div>
        <div class="brief-rating">
          <div class="brief-des">
          ${game.gameBriefDescription}
          </div>
          <div class="rating">Rating: ${game.gameRating}</div>
        </div>
      </div>`);
    });
    // pure javascript version
    // for(let i = 0; i < GAMES.length; i++) {
    //     console.log(GAMES[i].gameTitle)
    // }
}

function initListeners() {}

$(document).ready(function(){
    // initListeners();
    loadData();
});