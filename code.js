var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c14fa031-1539-485f-bf6e-514e19769bb6","a4e76f92-89cc-4efe-b163-35bf997bcef0"],"propsByKey":{"c14fa031-1539-485f-bf6e-514e19769bb6":{"name":"sticker_14_1","sourceUrl":null,"frameSize":{"x":246,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"fbGTv84ZJ4RdmzGPsb0pnSWslKwLTi8i","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":192},"rootRelativePath":"assets/c14fa031-1539-485f-bf6e-514e19769bb6.png"},"a4e76f92-89cc-4efe-b163-35bf997bcef0":{"name":"red_shirt_one_arm_crossed_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Hn7JZ4_.Ly3kufP35B3NBsImV6i2xD2c/category_people/red_shirt_one_arm_crossed.png","frameSize":{"x":107,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"Hn7JZ4_.Ly3kufP35B3NBsImV6i2xD2c","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":107,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Hn7JZ4_.Ly3kufP35B3NBsImV6i2xD2c/category_people/red_shirt_one_arm_crossed.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var theif = createSprite(10, 385, 20, 20);
theif.shapeColor = ("black");


var laser1 = createSprite(10,260,200,5 );
laser1.shapeColor =("red")
laser1.velocityY=2

var laser2 = createSprite(390, 95,200, 5);
laser2.shapeColor=("red")
laser2.velocityY=2

var diamond = createSprite(375, 20);
diamond.setAnimation("sticker_14_1");
diamond.scale = 0.2;

function draw() {
background("pink");
createEdgeSprites();
theif.bounceOff(edges);
laser1.bounceOff(edges);
laser2.bounceOff(edges);
theif.velocityX=0
theif.velocityY=0


if (keyDown("UP_ARROW")) {
theif.velocityY=-5;
    
}
if (keyDown("DOWN_ARROW")) {
 theif.velocityY=5; 
}
if (keyDown("LEFT_ARROW")) {
theif.velocityX=-5;  
}
if (keyDown("RIGHT_ARROW")) {
theif.velocityX=5;  
}

if (theif.isTouching(diamond)) {
textSize(20) ; 

fill("black");
text("DIAMOND IS STOLEN", 200, 200);

theif.setVelocity(0,0)
laser1.setVelocity(0,0)
laser2.setVelocity(0,0)

}
if (laser1.isTouching(theif)||laser2.isTouching(theif)) {
 textSize(20) 
text("THEIF IS CAUGHT", 200, 200);
  
}















drawSprites();
        
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
