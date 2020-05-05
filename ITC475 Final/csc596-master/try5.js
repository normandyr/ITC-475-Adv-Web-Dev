// module aliases

this.alert("The rules of the game are simple:  Drive till you die\n.\
  The forward button (right arrow) is the only button which provides input to the game\n. \
   You receive points based on how long you are able to keep moving forward\n.\
   If you remove input from going forward you lose a life\n.\
   If you press any other button you lose a life\n.\
   You have a total of 3 lives which are never replenished\n.\
   So drive till you die!!!")
var Engine = Matter.Engine, //this assigns a new engine to Engine to manage simulation
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Bounds = Matter.Bounds,
    Composite = Matter.Composite,
    Common = Matter.Common,
    Mouse = Matter.Mouse,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    Vertices = Matter.Vertices,
    Vector = Matter.Vector,
    Svg = Matter.Svg;

//Variable intializations which include screen view, object constants, speed variables
var viewHeight = 400;  ///in pixels height and width change to viewHeight and viewWidth
var additional = 500;
var viewWidth = 800;
var wheelRadius = 32;

var legThick = 10;
var legLength = wheelRadius;

var legCount = 5;
var legFriction = -0.1;
var legRestituion = 0.1;  
const MAX_SPEED = 0.75;
const MAX_SPEED_BACKWARDS = MAX_SPEED * 0.75;
const ACCELERATION = MAX_SPEED / 130;
const ACCELERATION_BACKWARDS = ACCELERATION * 0.75;


var sceneCenter = viewWidth / 2,
sceneMiddle = viewHeight / 2,
wheelYOffset = viewHeight - wheelRadius * 2,
wheelXOffset = sceneCenter;


// create an engine
//here created a new engine controller to manage the simulation based on
//under properities of documentation
/*positionIterations - specifies the number of position iterations to perform each update. 
The higher the value, the higher quality the simulation will be 
at the expense of performance*/
/*velocityIterations - specifies the number of velocity iterations to perform each update. 
The higher the value, the higher quality the simulation will be 
at the expense of performance.*/

var engine = Engine.create({options: {positionIterations: 0, velocityIterations: 0}}); //here created a new engine controller to manage the simulation based on


//under properities of documentation
// create a renderer
var render = Render.create({
    element: document.body,
     //this is saying to stick the canvas in the html body will show
    //canvas creation in elements under inspect //why don't i need to have it be render.element
    //like in the documentation because render.element render is just the name of the variable to 
    //which the element will be assigned to
    engine: engine, //A reference to the Matter.Engine instance to be used.
    options:{
        showAngleIndicator: false,
        showAxes: false,
        showConvexHulls: false,
        anchors: false,
        height: window.innerHeight-150,
        width: window.innerWidth-150,
        hasBounds: true,
        wireframes: false
    }
});

//starting platform creation for player to choose which side to go to and fall off
var platform = Bodies.rectangle(400, 410, 5000, 60, { isStatic: true });
console.log(platform)










World.add(engine.world, [platform, true, 0.01, 1]);
    


//creating wheel base for both wheels
var wheelBaseLeft = Bodies.circle(wheelXOffset, wheelYOffset-100, wheelRadius,{
  collisionFilter: {group: -1},
  
 

});

var wheelBaseRight = Bodies.circle(wheelXOffset+ 100, wheelYOffset-100, wheelRadius,{
  collisionFilter: {group: -1},
 
});


//creating wheel body for both wheels to hold legs
var wheelBodyLeft = [wheelBaseLeft];
var wheelBodyRight = [wheelBaseRight];


//creating legs for both wheel bodies using math (circle is 2pi and etc)
for(i=0; i<legCount; ++i){
  var leg = Bodies.rectangle(wheelXOffset, wheelYOffset-100, legLength, legThick,{
    collisionFilter: {group: -1},
    angle: i*2* Math.PI / legCount,
    friction: legFriction,
    restitution: legRestituion
  })
  wheelBodyLeft.push(leg); 
}

for(i=0; i<legCount; ++i){
  var leg = Bodies.rectangle(wheelXOffset+100, wheelYOffset-100, legLength, legThick,{
    collisionFilter: {group: -1},
    angle: i*2* Math.PI / legCount,
    friction: legFriction,
    restitution: legRestituion
  })

  
  wheelBodyRight.push(leg);
}



//creating actual wheels with legs inside
var wheelLeft = Matter.Body.create({ parts: wheelBodyLeft }, {collisionFilter: {group: -1}
});

var wheelRight = Matter.Body.create({ parts: wheelBodyRight}, {collisionFilter: {group: -1}  
});

//creating the constraint beteween the wheels to keep them acting as a unit
var constraint = Constraint.create({
  bodyA: wheelRight,
  bodyB: wheelLeft,  
 
  collisionFilter: {group: -1}
});


//creating a composite to add wheels, constraints to
var car = Composite.create({position: {x: 100, y: 100}});
console.log


//adding creating wheel objects, and contraints to car composite
Composite.addBody(car, wheelLeft);
Composite.addBody(car, wheelRight);
Composite.addConstraint(car, constraint);
Composite.add(engine.world, [car]);








//add obstalces
//add other terrains
//create some puzzles to solve by switching the size of wheels and vehcile in game
//torque 

//set functions  to move screen with player 
function timeOutRight(){
  if(wheelRight.position.x <= 150){    
      Render.lookAt(render, wheelRight, {
        x: 70,
        y: 210,
        padding: {x: 10, y:10},
        center: true
      
    })
   
    
}};

function timeOutLeft(){
  if(wheelLeft.position.x >= 150){  
    Render.lookAt(render, wheelLeft, {
      x: 70,
      y: 210,
      padding: {x: 10, y:10},
      center: true
    })
    
    
    
   
}

};



//setInterval which allows us to call a function every set time for smooth animation
//60fps is recommended which is 16 or 17 in ms but if used it will cause a blurring effect
//when moving forward
//for now 8 seems to work better and if time I will come back and measure fps and see if we can
//optimize this a bit
setInterval(timeOutRight, 8);
setInterval(timeOutLeft, 8);



//order of things would like to see
//add to the environment such that you have to use the legs
//make slider for extension 
//redesign the robot with popup box before starting course and during course
//make wheelbase, wheelraidus, number of legs, leg lengths (but they dont get to configure just)
//configure wheelraidus which configures both

//COMPLETE pick reseaonable values current values and no more than double that in raidus and half 
//COMPLETE that in radius
//COMPLETE make slider for scaling

//select course option
//when you go to website it lets you drop into preconfigured robot
//then you go to play game in lets you get more in depth
//energy usage and now the game is can you get from here to here and use the least 
//amount of energy
//CSS grid learning for layering UI interface scrimba css grid
//after just personalize with colors but come back too

//issue of if you scale wheels all the way up and then extend legs...then scale wheels
//all the way down while the legs scale down as well there is still a big gap between
//the distane the legs are supposed to be from the circle as extended and what is
//actual possible due to this glitch



count_time = 0
var time = document.getElementById('time')
console.log(time)
var posX = 400
var die = document.getElementById('die')
var check_death = false
var total_death = 0



window.addEventListener('keyup', function (e) {
  
  
  if(die.innerText > -1){
      die.innerText--
      total_death += 1
    if(die.innerText < 0){
      die.innerText = 0
      return
    }
     

  
  }
  
   

    if(total_death ==3){
      check_death = true

    }
      
    if(die.innerText == 0){    
      
      
      this.alert("GAME OVER!")
      let foo = this.prompt('Enter your name for high score entry')
      var x = document.createElement("FORM");
      x.setAttribute("id", "myForm");
      x.setAttribute("action", 'http://localhost/confirm.php');
      x.setAttribute("method", 'get');
      document.body.appendChild(x);

      var z = this.document.createElement("LABEL");
      z.setAttribute("for", "username")
      z.innerText = "Username:"
      z.setAttribute("text", "Username:")
      
      this.document.getElementById("myForm").appendChild(z);

      var y = document.createElement("INPUT");
      y.setAttribute("type", "text");
      y.setAttribute("value", foo);
      y.setAttribute("id", "username");
      y.setAttribute("name", "username");
      y.setAttribute("required", true);
      document.getElementById("myForm").appendChild(y);

      var m = this.document.createElement("LABEL");
      m.setAttribute("for", "score")
      m.innerText = "Score:"
      m.setAttribute("text", "Score:")
      this.document.getElementById("myForm").appendChild(m)

      var k = document.createElement("INPUT");
      k.setAttribute("type", "text");
      k.setAttribute("value", time.innerText);
      k.setAttribute("id", "score");
      k.setAttribute("name", "score");
      k.setAttribute("required", true);
      document.getElementById("myForm").appendChild(k);

      var j = document.createElement("INPUT");
      j.setAttribute("type", "Submit");
      j.setAttribute("value", "Submit");
      document.getElementById("myForm").appendChild(j);
      console.log(x)
      
      
        }
  
})

//gas for button is down right arrow key to go forward
window.addEventListener('keydown', function (e) {
        if (e.keyCode === 39 & check_death === false){
          
          this.console.log(time)
          Body.rotate(wheelLeft, Math.PI/10);
          Body.rotate(wheelRight, -Math.PI/10);
          Body.rotate(wheelLeft, -Math.PI/6);
          Body.rotate(wheelRight, Math.PI/6);
         
          time.innerText++
          
          
          
   
          
      }
      
     
      
      posX+=50
      
      

      if(time.innerText == 60){
        
      }
    
    });
    
    

  



// run the engine
Engine.run(engine); 
Engine.update(engine, delta=12.666, correction=3)
Engine.run(engine); 
//Matter.Engine.run(engine)
//An alias for Runner.run (Matter.Runner.run(engine)), see Matter.Runner for more information.
//Continuously ticks a Matter.Engine by calling Runner.tick on the requestAnimationFrame event.
    //Parameters
    //engine Engine

// run the renderer
Render.run(render);
