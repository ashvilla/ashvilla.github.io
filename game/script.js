document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 800, timeBetweenNPCs: 10000, npcCollisionRadius: 100, actionDuration:600, jumpHeight: 300, makeResponsive: true, npcMoveToX: 990, npcSpeed: 200,   });
}) ;