var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      
        var tree; //creadted a tree variable.
        var buildings = []; //created an empty building array
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.bitmap("img/fortniterift.png");
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield

            for (var stars = 0; stars < 100; stars++) { //adds stars to the canvas
            var circle = draw.circle(3, "white", "LightGray", 2);
            circle.x = canvasWidth * Math.random();
            circle.y = groundY * Math.random();
            background.addChild(circle);
            }

            var moon = draw.bitmap("img/moon.png"); //adds moon to the canvas
            moon.x = canvasWidth - 250;
            moon.y = groundY - 450;
            moon.scaleX = 0.5;
            moon.scaleY = 0.5;
            background.addChild(moon);
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            for (var i = 0; i < 5; i++) { //built for loop with 5 builds
                var buildingHeight = 300 * Math.random(); // how tall the buildings is
                var building = draw.rect(75, buildingHeight, "LightGray", "Black", 1); // draws a single building 
                building.x = 200 * i; //creates x facotor for the building mulpity by i nakes it incrase by that certian nmumber of pixels
                building.y = groundY - buildingHeight; //starts att ground y so it goes from the bottom
                background.addChild(building); //adds it to the background
                buildings.push(building); //pushing it to building array
              }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); //draws the tree
            tree.x = canvasWidth - 300;
            tree.y = groundY - 240;
            background.addChild(tree);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 6;

            if  (tree.x < -400) { // makes the tree loop
                tree.x = canvasWidth
            }
            // TODO 4: Part 2 - Parallax
            
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i]; 
                building.x = building.x - 1;  
                
                if (building.x < -100) {
                building.x = canvasWidth;        //loops the builds when it goes off the screen
                }

              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
