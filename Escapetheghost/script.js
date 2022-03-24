document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "title-screen.png", actionRadius: 800, timeBetweenNPCs: 5800, npcCollisionRadius: 100, actionDuration:600, jumpHeight: 300, makeResponsive: true, npcMoveToX: 990, npcSpeed: 200, playUntilScore: 10, preGameScreenImageURLs:["./img/story-1.png", "./img/story-2.png"], postGameScreenImageURLs: ["end.png"],  });
}) ;