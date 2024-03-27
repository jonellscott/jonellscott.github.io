var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createSawBlade (x, y) {
      var hitZoneSize = 25; // where it hits
      var damageFromObstacle = 10; //how much damage it takes
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //crtaes an obstacle and creates the hitzone
      sawBladeHitZone.x = x; // where the obstacle is 
      sawBladeHitZone.y = y; //how high the obstacle is from thee ground
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage); //assigns enemy to child
      obstacleImage.x = -25; // where the obstacle is left to right
      obstacleImage.y = -25; // where the obstacle is up and down 
    
    

    }

    
    

   
  function createEnemy(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.bitmap("img/poisiontrap.img");
    redSquare.x = -25; // where the enemy is left to right
    redSquare.y = -25; // where the enemy is up and down 
    enemy.addChild(redSquare); //assigns enemy to child
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -3;
    enemy.rotationalVelocity = 0;
    redSquare.scaleX = 0.25;
    redSquare.scaleY = 0.25;

    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-10);
    };

    enemy.onProjectileCollision = function () {
      game.increaseScore(100);
      enemy.fadeOut();
      //enemy.shrink();
      //enemy.fadeOut(0,0);
    };
  }

  createEnemy(600, groundY - 50, ); //calls createEnemy function
  createEnemy(900, groundY - 50, ); //calls createEnemy function

  function createEnemy2(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.bitmap("img/spiketrap.img");
    redSquare.x = -25; // where the enemy is left to right
    redSquare.y = -25; // where the enemy is up and down 
    enemy.addChild(redSquare); //assigns enemy to child
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -3;
    enemy.rotationalVelocity = 0;
    redSquare.scaleX = 0.25;
    redSquare.scaleY = 0.25;

    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-10);
    };

    enemy.onProjectileCollision = function () {
      game.increaseScore(100);
      enemy.fadeOut();
      //enemy.shrink();
      //enemy.fadeOut(0,0);
    };
  }

  

  

  function createReward(x, y) {
    var reward = game.createGameItem("enemy", 25);
    var blueSquare = draw.rect(50, 50, "red");
    blueSquare.x = -25; // where the reward is left to right
    blueSquare.y = -25; // where the reward is up and down 
    reward.addChild(blueSquare); //assigns reward to child
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.velocityX = -3
    

    reward.onPlayerCollision = function () {
      game.changeIntegrity(10);
      game.increaseScore(50);
    }; 

    reward.onProjectileCollision = function () {
      //game.increaseScore(100);
      //enemy.fadeOut();
      //enemy.shrink();
      //enemy.fadeOut(0,0);
    };
  }

  
    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 25);
      var greenSquare = draw.rect(50,50,"green");
      greenSquare.x = -75; // where the marker is left to right
      greenSquare.y = -150; // where the marker is up and down 
      marker.addChild(greenSquare); //assigns marker to child
      marker.x = x;
      marker.y = y;
      game.addGameItem(marker);
      marker.velocityX = -1;
      greenSquare.scaleX = 1;
      greenSquare.scaleY = 1;
  
      marker.onPlayerCollision = function () {
        game.changeIntegrity(25);
        startLevel();
      };
    
      marker.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
        //enemy.shrink();
        //enemy.fadeOut(0,0);
      };
    }

    

  createReward(1000, groundY - 100, ); //calls createReward function



    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      for (var i = 0; i < levelObjects.length; i++) {
        var element = levelObjects[i];
        if (element.type === "sawblade") {
          createSawBlade(element.x, element.y)
        }
        if (element.type === "enemy") {
          createEnemy(element.x, element.y)
        }
        if (element.type === "reward") {
          createReward(element.x, element.y)
        }
        if (element.type === "marker") {
          createMarker(element.x, element.y)
        }
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
