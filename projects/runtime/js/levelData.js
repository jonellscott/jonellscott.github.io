var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 120},
          { type: "sawblade", x: 700, y: groundY - 120},
          { type: "sawblade", x: 900, y: groundY - 120},
          { type: "enemy", x: 600, y: groundY - 50},
          { type: "enemy", x: 950, y: groundY - 50},
          { type: "reward", x: 1200, y: groundY - 75},
          { type: "marker", x: 1500, y: groundY - 90},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 120},
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "enemy2", x: 1200, y: groundY - 50},
          { type: "sawblade", x: 1300, y: groundY },
          { type: "reward", x: 1600, y: groundY - 75},
          { type: "sawblade", x: 1700, y: groundY },
          { type: "sawblade", x: 1800, y: groundY - 120},
          { type: "enemy2", x: 950, y: groundY - 50},
          { type: "marker", x: 3000, y: groundY - 90},
        ],
      },
      {
        name: "Robot Charge",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade2", x: 400, y: groundY - 150},
          { type: "sawblade2", x: 700, y: groundY - 10},
          { type: "sawblade2", x: 900, y: groundY - 150},
          { type: "enemy", x: 600, y: groundY - 50},
          { type: "enemy2", x: 950, y: groundY - 50},
          { type: "reward", x: 1200, y: groundY - 30},
          { type: "marker", x: 1500, y: groundY - 60},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
