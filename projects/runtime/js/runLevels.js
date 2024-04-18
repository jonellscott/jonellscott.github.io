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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createSawBlade (x, y) {
      var hitZoneSize = 25; // where it hits
      var damageFromObstacle = 10; //how much damage it takes
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates an obstacle and creates the hitzone
      sawBladeHitZone.x = x; // where the obstacle is 
      sawBladeHitZone.y = y; //how high the obstacle is from thee ground
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/spiketrap.png");
      sawBladeHitZone.addChild(obstacleImage); //assigns enemy to child
      obstacleImage.x = -60; // where the obstacle is left to right
      obstacleImage.y = -50; // where the obstacle is up and down 
      obstacleImage.scaleX = 0.30 //how big the object is from its x value
      obstacleImage.scaleY = 0.30; //how big the object is from its y value
 
    } 
    
    function createSawBlade2 (x, y) {
      var hitZoneSize = 25; // where it hits
      var damageFromObstacle = 10; //how much damage it takes
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates an obstacle and creates the hitzone
      sawBladeHitZone.x = x; // where the obstacle is 
      sawBladeHitZone.y = y; //how high the obstacle is from thee ground
      game.addGameItem(sawBladeHitZone);
      var obstacleImage2 = draw.bitmap("img/poisontrap.png");
      sawBladeHitZone.addChild(obstacleImage2); //assigns enemy to child
      obstacleImage2.x = -60; // where the obstacle is left to right
      obstacleImage2.y = -50; // where the obstacle is up and down 
      obstacleImage2.scaleX = 0.30 //how big the object is from its x value
      obstacleImage2.scaleY = 0.30; //how big the object is from its y value
 
    }

    
    

   
  function createEnemy(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.bitmap("img/midas.png");
    redSquare.x = -180; // where the enemy is left to right
    redSquare.y = -600; // where the enemy is up and down 
    enemy.addChild(redSquare); //assigns enemy to child
    enemy.x = x; // where the ememy is
    enemy.y = y; //how high the enemy is from thee ground
    game.addGameItem(enemy);
    enemy.velocityX = -3; //how fast it moves
    enemy.rotationalVelocity = 0;
    redSquare.scaleX = 0.27; //how big the enemy is from its x value
    redSquare.scaleY = 0.27; //how big the enemy is from its y value

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

  

  function createEnemy2(x, y) {
    var enemy2 = game.createGameItem("enemy2", 25);
    var purpleSquare = draw.bitmap("img/reaper.png");
    purpleSquare.x = -140; // where the enemy is left to right
    purpleSquare.y = -180 // where the enemy is up and down 
    enemy2.addChild(purpleSquare); //assigns enemy to child
    enemy2.x = x; // where the ememy is
    enemy2.y = y; //how high the enemy is from thee ground
    game.addGameItem(enemy2);
    enemy2.velocityX = -3; //how fast it moves
    enemy2.rotationalVelocity = 0;
    purpleSquare.scaleX = 0.25; //how big the enemy2 is from its x value
    purpleSquare.scaleY = 0.25; //how big the enemy2 is from its y value

    enemy2.onPlayerCollision = function () {
      game.changeIntegrity(-10);
    };

    enemy2.onProjectileCollision = function () {
      game.increaseScore(100);
      enemy2.fadeOut();
      //enemy.shrink();
      //enemy.fadeOut(0,0);
    };
  }


  

  function createReward(x, y) {
    var reward = game.createGameItem("enemy", 25);
    var blueSquare = draw.bitmap("img/vbucks.png");
    blueSquare.x = -40; // where the reward is left to right
    blueSquare.y = -55; // where the reward is up and down 
    reward.addChild(blueSquare); //assigns reward to child
    reward.x = x; // where the reward is
    reward.y = y; //how high the enemy is from thee ground
    game.addGameItem(reward);
    reward.velocityX = -3 //how fast it moves
    blueSquare.scaleX = 0.30; //how big the reward is from its x value
    blueSquare.scaleY = 0.30; //how big the reward is from its y value
    
    
    

    reward.onPlayerCollision = function () {
      game.changeIntegrity(10);
      game.increaseScore(100);
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
      var greenSquare = draw.bitmap("img/fortnitevictory.png");
      greenSquare.x = -150; // where the marker is left to right
      greenSquare.y = -75; // where the marker is up and down 
      marker.addChild(greenSquare); //assigns marker to child
      marker.x = x; // where the marker is
      marker.y = y; //how high the marker is from thee ground
      game.addGameItem(marker);
      marker.velocityX = -3 //how fast it moves
      greenSquare.scaleX = 0.25; //how big the marker is from its x value
      greenSquare.scaleY = 0.25; //how big the marker is from its y value
  
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
        if (element.type === "enemy2") {
          createEnemy2(element.x, element.y)
        }
        if (element.type === "sawblade2") {
          createSawBlade2(element.x, element.y)
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
