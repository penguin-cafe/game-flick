(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.spacer = function() {
	this.initialize(img.spacer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#666666").beginStroke().moveTo(-1.6,5.7).lineTo(-1.6,-5.7).lineTo(1.6,-5.7).lineTo(1.6,5.7).closePath();
	this.shape.setTransform(46.35,15.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#666666").beginStroke().moveTo(-2.6,3.9).curveTo(-3.6,3.4,-4.1,2.4).curveTo(-4.8,1.4,-4.8,0).curveTo(-4.8,-2,-3.6,-3.1).curveTo(-2.3,-4.3,-0.1,-4.3).curveTo(1.7,-4.4,2.7,-3.8).curveTo(3.7,-3.3,4.3,-2.2).curveTo(4.8,-1.2,4.8,0.5).lineTo(4.8,0.8).lineTo(-1.6,0.8).curveTo(-1.4,1.5,-1.1,2).curveTo(-0.7,2.4,0,2.4).curveTo(0.6,2.4,0.9,2.3).lineTo(1.5,1.7).lineTo(4.6,2).curveTo(3.9,3.3,2.9,3.8).curveTo(1.9,4.4,0,4.3).curveTo(-1.7,4.4,-2.6,3.9).closePath().moveTo(-1.2,-1.9).curveTo(-1.4,-1.4,-1.6,-0.7).lineTo(1.6,-0.7).curveTo(1.5,-1.7,1.1,-2.1).curveTo(0.7,-2.4,0,-2.4).curveTo(-0.7,-2.4,-1.2,-1.9).closePath();
	this.shape_1.setTransform(38.4,17.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#666666").beginStroke().moveTo(-1.4,4.2).lineTo(-4.9,-4.1).lineTo(-1.6,-4.1).lineTo(0.1,1.1).lineTo(1.7,-4.1).lineTo(4.9,-4.1).lineTo(1.4,4.2).closePath();
	this.shape_2.setTransform(28.2,17.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#666666").beginStroke().moveTo(-2.6,3.9).curveTo(-3.6,3.4,-4.1,2.4).curveTo(-4.8,1.4,-4.8,0).curveTo(-4.8,-2,-3.5,-3.1).curveTo(-2.3,-4.3,-0.1,-4.3).curveTo(1.7,-4.4,2.7,-3.8).curveTo(3.7,-3.3,4.3,-2.2).curveTo(4.8,-1.2,4.8,0.5).lineTo(4.8,0.8).lineTo(-1.5,0.8).curveTo(-1.4,1.5,-1.2,2).curveTo(-0.7,2.4,0.1,2.4).curveTo(0.5,2.4,1,2.3).lineTo(1.5,1.7).lineTo(4.7,2).curveTo(3.9,3.3,2.9,3.8).curveTo(1.9,4.4,0,4.3).curveTo(-1.6,4.4,-2.6,3.9).closePath().moveTo(-1.2,-1.9).curveTo(-1.5,-1.4,-1.5,-0.7).lineTo(1.6,-0.7).curveTo(1.5,-1.7,1.1,-2.1).curveTo(0.7,-2.4,0.1,-2.4).curveTo(-0.7,-2.4,-1.2,-1.9).closePath();
	this.shape_3.setTransform(18,17.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#666666").beginStroke().moveTo(-4.6,5.7).lineTo(-4.6,-5.7).lineTo(-1,-5.7).lineTo(-1,2.9).lineTo(4.5,2.9).lineTo(4.5,5.7).closePath();
	this.shape_4.setTransform(7.7,15.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#666666").beginStroke().moveTo(-2.6,3.9).curveTo(-3.5,3.4,-4.2,2.4).curveTo(-4.8,1.4,-4.8,0).curveTo(-4.8,-2,-3.5,-3.1).curveTo(-2.3,-4.3,-0.1,-4.3).curveTo(1.7,-4.4,2.7,-3.8).curveTo(3.8,-3.3,4.3,-2.2).curveTo(4.8,-1.2,4.8,0.5).lineTo(4.8,0.8).lineTo(-1.6,0.8).curveTo(-1.5,1.5,-1.2,2).curveTo(-0.7,2.4,0.1,2.4).curveTo(0.5,2.4,1,2.3).lineTo(1.5,1.7).lineTo(4.7,2).curveTo(3.9,3.3,2.9,3.8).curveTo(1.9,4.4,-0,4.3).curveTo(-1.6,4.4,-2.6,3.9).closePath().moveTo(-1.2,-1.9).curveTo(-1.4,-1.4,-1.6,-0.7).lineTo(1.6,-0.7).curveTo(1.5,-1.7,1.1,-2.1).curveTo(0.7,-2.4,0.1,-2.4).curveTo(-0.7,-2.4,-1.2,-1.9).closePath();
	this.shape_5.setTransform(130.25,17.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#666666").beginStroke().moveTo(3.9,4.3).lineTo(3.9,-0.5).curveTo(3.9,-1,3.6,-1.3).curveTo(3.3,-1.8,2.8,-1.8).curveTo(2.3,-1.8,1.9,-1.3).curveTo(1.6,-0.9,1.6,-0.1).lineTo(1.6,4.3).lineTo(-1.6,4.3).lineTo(-1.6,-0.3).lineTo(-1.7,-1.1).curveTo(-1.8,-1.3,-2,-1.5).curveTo(-2.3,-1.8,-2.6,-1.8).curveTo(-3.1,-1.8,-3.5,-1.3).curveTo(-3.9,-1,-3.9,0).lineTo(-3.9,4.3).lineTo(-7,4.3).lineTo(-7,-4).lineTo(-4.1,-4).lineTo(-4.1,-2.9).curveTo(-3.4,-3.6,-2.8,-3.9).curveTo(-2.1,-4.2,-1.2,-4.2).curveTo(-0.2,-4.2,0.4,-3.9).curveTo(1,-3.5,1.3,-2.9).curveTo(2.1,-3.6,2.7,-3.9).curveTo(3.3,-4.2,4.2,-4.2).curveTo(5.5,-4.2,6.3,-3.5).curveTo(7,-2.6,7,-1).lineTo(7,4.3).closePath();
	this.shape_6.setTransform(116.925,17.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#666666").beginStroke().moveTo(-1.6,5.7).lineTo(-1.6,-2.6).lineTo(1.6,-2.6).lineTo(1.6,5.7).closePath().moveTo(-1.6,-3.6).lineTo(-1.6,-5.7).lineTo(1.6,-5.7).lineTo(1.6,-3.6).closePath();
	this.shape_7.setTransform(106.225,15.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#666666").beginStroke().moveTo(-1.7,5.7).lineTo(-1.7,-2.9).lineTo(-5.4,-2.9).lineTo(-5.4,-5.7).lineTo(5.4,-5.7).lineTo(5.4,-2.9).lineTo(1.8,-2.9).lineTo(1.8,5.7).closePath();
	this.shape_8.setTransform(97.75,15.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#666666").beginStroke().moveTo(-2.6,3.9).curveTo(-3.6,3.4,-4.1,2.4).curveTo(-4.8,1.4,-4.8,0).curveTo(-4.8,-2,-3.6,-3.1).curveTo(-2.3,-4.3,-0.1,-4.3).curveTo(1.7,-4.4,2.7,-3.8).curveTo(3.8,-3.3,4.3,-2.2).curveTo(4.8,-1.2,4.8,0.5).lineTo(4.8,0.8).lineTo(-1.5,0.8).curveTo(-1.4,1.5,-1.2,2).curveTo(-0.7,2.4,0,2.4).curveTo(0.6,2.4,0.9,2.3).lineTo(1.5,1.7).lineTo(4.6,2).curveTo(3.9,3.3,2.9,3.8).curveTo(1.9,4.4,0,4.3).curveTo(-1.6,4.4,-2.6,3.9).closePath().moveTo(-1.2,-1.9).curveTo(-1.4,-1.4,-1.5,-0.7).lineTo(1.6,-0.7).curveTo(1.5,-1.7,1.1,-2.1).curveTo(0.7,-2.4,0,-2.4).curveTo(-0.7,-2.4,-1.2,-1.9).closePath();
	this.shape_9.setTransform(247.3,17.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#666666").beginStroke().moveTo(-3.2,4.3).lineTo(-3.2,-4).lineTo(-0.3,-4).lineTo(-0.3,-2.7).curveTo(0.2,-3.5,0.6,-3.9).curveTo(1.1,-4.2,1.7,-4.2).curveTo(2.5,-4.3,3.3,-3.8).lineTo(2.3,-1.5).curveTo(1.7,-1.8,1.4,-1.8).curveTo(0.8,-1.7,0.5,-1.2).curveTo(-0.1,-0.5,-0.1,1.5).lineTo(-0.1,4.3).closePath();
	this.shape_10.setTransform(239.1,17.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#666666").beginStroke().moveTo(-3.2,3.3).curveTo(-4.8,2.1,-4.8,0).curveTo(-4.8,-1.9,-3.5,-3.1).curveTo(-2.2,-4.3,-0,-4.3).curveTo(2.5,-4.3,3.8,-2.9).curveTo(4.8,-1.7,4.8,0).curveTo(4.8,1.9,3.5,3.1).curveTo(2.2,4.3,-0,4.3).curveTo(-2,4.3,-3.2,3.3).closePath().moveTo(-1.1,-1.6).curveTo(-1.6,-1.1,-1.6,0).curveTo(-1.6,1.2,-1.1,1.6).curveTo(-0.7,2.2,0,2.2).curveTo(0.7,2.2,1.1,1.6).curveTo(1.6,1.2,1.6,0).curveTo(1.6,-1.1,1.1,-1.6).curveTo(0.7,-2.1,0,-2.1).curveTo(-0.7,-2.1,-1.1,-1.6).closePath();
	this.shape_11.setTransform(229.525,17.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#666666").beginStroke().moveTo(-1.9,4.1).curveTo(-2.8,3.8,-3.4,3.3).curveTo(-4.1,2.8,-4.4,2).curveTo(-4.8,1.3,-4.8,0).curveTo(-4.8,-1.3,-4.4,-2.1).curveTo(-4,-2.7,-3.5,-3.2).curveTo(-2.9,-3.7,-2.3,-3.9).curveTo(-1.4,-4.3,0,-4.3).curveTo(2.1,-4.4,3.1,-3.6).curveTo(4.2,-2.9,4.6,-1.5).lineTo(1.6,-1.1).curveTo(1.5,-1.6,1.1,-1.9).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.7,-2.1,-1.1,-1.6).curveTo(-1.6,-1,-1.6,0.1).curveTo(-1.6,1.2,-1.1,1.6).curveTo(-0.7,2.2,0.1,2.2).curveTo(0.7,2.2,1.1,1.9).curveTo(1.6,1.5,1.8,0.9).lineTo(4.8,1.3).curveTo(4.5,2.2,4,2.9).curveTo(3.4,3.5,2.5,4).curveTo(1.6,4.3,0.3,4.3).curveTo(-1.1,4.4,-1.9,4.1).closePath();
	this.shape_12.setTransform(218.925,17.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#666666").beginStroke().moveTo(-3.9,4.8).curveTo(-5,3.7,-5.2,1.9).lineTo(-1.8,1.7).curveTo(-1.7,2.5,-1.4,3).curveTo(-0.9,3.7,0.2,3.7).curveTo(0.9,3.7,1.3,3.3).curveTo(1.8,3,1.8,2.5).curveTo(1.8,2,1.3,1.7).curveTo(1,1.3,-0.5,1).curveTo(-2.8,0.5,-3.7,-0.4).curveTo(-4.7,-1.2,-4.7,-2.6).curveTo(-4.7,-3.5,-4.3,-4.2).curveTo(-3.7,-5,-2.7,-5.5).curveTo(-1.7,-5.9,0.1,-5.9).curveTo(2.3,-5.9,3.5,-5.1).curveTo(4.6,-4.3,4.8,-2.5).lineTo(1.5,-2.3).curveTo(1.3,-3.1,1,-3.4).curveTo(0.5,-3.8,-0.2,-3.8).curveTo(-0.9,-3.8,-1.2,-3.5).curveTo(-1.5,-3.3,-1.5,-2.9).curveTo(-1.5,-2.6,-1.3,-2.4).curveTo(-1,-2.2,-0,-2).curveTo(2.2,-1.5,3.3,-1).curveTo(4.3,-0.5,4.7,0.3).curveTo(5.2,1.1,5.2,2).curveTo(5.2,3.1,4.6,4).curveTo(4,5,2.9,5.4).curveTo(1.8,5.9,0.1,5.9).curveTo(-2.8,5.9,-3.9,4.8).closePath();
	this.shape_13.setTransform(207.75,15.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// _txt
	this.time_txt = new cjs.Text("0", "16px 'MS PGothic'", "#FF9900");
	this.time_txt.name = "time_txt";
	this.time_txt.textAlign = "right";
	this.time_txt.lineHeight = 18;
	this.time_txt.lineWidth = 46;
	this.time_txt.parent = this;
	this.time_txt.setTransform(188,7);

	this.level_txt = new cjs.Text("0", "16px 'MS PGothic'", "#FF9900");
	this.level_txt.name = "level_txt";
	this.level_txt.textAlign = "right";
	this.level_txt.lineHeight = 18;
	this.level_txt.lineWidth = 26;
	this.level_txt.parent = this;
	this.level_txt.setTransform(83,7);

	this.score_txt = new cjs.Text("0", "16px 'MS PGothic'", "#FF9900");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "right";
	this.score_txt.lineHeight = 18;
	this.score_txt.lineWidth = 51;
	this.score_txt.parent = this;
	this.score_txt.setTransform(313,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.score_txt},{t:this.level_txt},{t:this.time_txt}]}).wait(1));

	// back
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill().beginStroke("#000000").setStrokeStyle(2,1,1).moveTo(-27.5,-10).lineTo(27.5,-10).lineTo(27.5,10).lineTo(-27.5,10).closePath();
	this.shape_14.setTransform(287.5,15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-27.5,10).lineTo(-27.5,-10).lineTo(27.5,-10).lineTo(27.5,10).closePath();
	this.shape_15.setTransform(287.5,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill().beginStroke("#000000").setStrokeStyle(2,1,1).moveTo(-25,-10).lineTo(25,-10).lineTo(25,10).lineTo(-25,10).closePath();
	this.shape_16.setTransform(165,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-25,10).lineTo(-25,-10).lineTo(25,-10).lineTo(25,10).closePath();
	this.shape_17.setTransform(165,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill().beginStroke("#000000").setStrokeStyle(2,1,1).moveTo(-15,-10).lineTo(15,-10).lineTo(15,10).lineTo(-15,10).closePath();
	this.shape_18.setTransform(70,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,10).lineTo(-15,-10).lineTo(15,-10).lineTo(15,10).closePath();
	this.shape_19.setTransform(70,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// g
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill().beginStroke("#000000").setStrokeStyle(2,1,1).moveTo(-160,-15).lineTo(160,-15).lineTo(160,15).lineTo(-160,15).closePath();
	this.shape_20.setTransform(160.0133,15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-160,15).lineTo(-160,-15).lineTo(160,-15).lineTo(160,15).closePath();
	this.shape_21.setTransform(160.0133,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_mc, new cjs.Rectangle(-1,-1,322,32), null);


(lib.play_btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("gamestart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF9900").beginStroke().moveTo(-1.4,7.1).lineTo(-1.4,1.1).lineTo(-6.7,-7.2).lineTo(-3.3,-7.2).lineTo(0.1,-1.5).lineTo(3.4,-7.2).lineTo(6.7,-7.2).lineTo(1.5,1.2).lineTo(1.5,7.1).closePath();
	this.shape.setTransform(80.7,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF9900").beginStroke().moveTo(4,7.1).lineTo(2.8,3.9).lineTo(-2.9,3.9).lineTo(-4.1,7.1).lineTo(-7.2,7.1).lineTo(-1.6,-7.2).lineTo(1.5,-7.2).lineTo(7.2,7.1).closePath().moveTo(-2,1.5).lineTo(1.9,1.5).lineTo(-0.1,-3.8).closePath();
	this.shape_1.setTransform(66.775,20.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FF9900").beginStroke().moveTo(-5,7.1).lineTo(-5,-7.1).lineTo(-2.2,-7.1).lineTo(-2.2,4.7).lineTo(5,4.7).lineTo(5,7.1).closePath();
	this.shape_2.setTransform(53.975,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FF9900").beginStroke().moveTo(-5.5,7.1).lineTo(-5.5,-7.2).lineTo(-0.8,-7.2).curveTo(1.8,-7.2,2.6,-6.9).curveTo(3.8,-6.7,4.7,-5.6).curveTo(5.5,-4.4,5.5,-2.8).curveTo(5.5,-1.5,5,-0.5).curveTo(4.5,0.3,3.8,0.8).curveTo(3.1,1.4,2.3,1.5).curveTo(1.3,1.7,-0.7,1.7).lineTo(-2.6,1.7).lineTo(-2.6,7.1).closePath().moveTo(-2.6,-0.7).lineTo(-1,-0.7).curveTo(0.7,-0.7,1.3,-0.9).curveTo(1.9,-1.2,2.2,-1.6).curveTo(2.5,-2.1,2.5,-2.7).curveTo(2.5,-3.5,2.1,-4).curveTo(1.6,-4.5,0.9,-4.7).curveTo(0.4,-4.8,-1.2,-4.8).lineTo(-2.6,-4.8).closePath();
	this.shape_3.setTransform(40.975,20.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// g
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(2,1,1).moveTo(-40.1,-20).lineTo(40.1,-20).curveTo(48.3,-20,54.2,-14.1).curveTo(60.1,-8.3,60.1,0).curveTo(60.1,8.3,54.2,14.1).curveTo(48.3,20,40.1,20).lineTo(-40.1,20).curveTo(-48.4,20,-54.2,14.1).curveTo(-60.1,8.3,-60.1,0).curveTo(-60.1,-8.3,-54.2,-14.1).curveTo(-48.4,-20,-40.1,-20).closePath();
	this.shape_4.setTransform(60.0195,20,0.9993,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-40,20).curveTo(-48.3,20,-54.2,14.2).curveTo(-60.1,8.3,-60.1,-0).curveTo(-60.1,-8.3,-54.2,-14.2).curveTo(-48.3,-20,-40,-20).lineTo(40.1,-20).curveTo(48.4,-20,54.2,-14.2).curveTo(60,-8.3,60.1,-0).curveTo(60,8.3,54.2,14.2).curveTo(48.4,20,40.1,20).closePath();
	this.shape_5.setTransform(60.0195,20,0.9993,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#333333").beginStroke().moveTo(-40,20).curveTo(-48.3,20,-54.2,14.2).curveTo(-60.1,8.3,-60.1,-0).curveTo(-60.1,-8.3,-54.2,-14.2).curveTo(-48.3,-20,-40,-20).lineTo(40.1,-20).curveTo(48.4,-20,54.2,-14.2).curveTo(60,-8.3,60.1,-0).curveTo(60,8.3,54.2,14.2).curveTo(48.4,20,40.1,20).closePath();
	this.shape_6.setTransform(60.0195,20,0.9993,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(2,1,1).moveTo(-40,-20).lineTo(40,-20).curveTo(48.3,-20,54.2,-14.1).curveTo(60,-8.3,60,0).curveTo(60,8.3,54.2,14.1).curveTo(48.3,20,40,20).lineTo(-40,20).curveTo(-48.3,20,-54.2,14.1).curveTo(-60,8.3,-60,0).curveTo(-60,-8.3,-54.2,-14.1).curveTo(-48.3,-20,-40,-20).closePath();
	this.shape_7.setTransform(59.9929,20,0.9996,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#666666").beginStroke().moveTo(-40,20).curveTo(-48.3,20,-54.2,14.2).curveTo(-60,8.3,-60,-0).curveTo(-60,-8.3,-54.2,-14.2).curveTo(-48.3,-20,-40,-20).lineTo(40,-20).curveTo(48.3,-20,54.2,-14.2).curveTo(60,-8.3,60,-0).curveTo(60,8.3,54.2,14.2).curveTo(48.3,20,40,20).closePath();
	this.shape_8.setTransform(59.9929,20,0.9996,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#00FFFF").beginStroke().moveTo(-40,20).curveTo(-48.3,20,-54.2,14.2).curveTo(-60,8.3,-60,-0).curveTo(-60,-8.3,-54.2,-14.2).curveTo(-48.3,-20,-40,-20).lineTo(40,-20).curveTo(48.3,-20,54.2,-14.2).curveTo(60,-8.3,60,-0).curveTo(60,8.3,54.2,14.2).curveTo(48.3,20,40,20).closePath();
	this.shape_9.setTransform(59.9929,20,0.9996,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,122,42);


(lib.mask_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#990000").setStrokeStyle(2,1,1).moveTo(30,-53).lineTo(-30,-24.4).lineTo(-30,53).lineTo(30,24.4).closePath();
	this.shape.setTransform(30,-7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFCC00").beginStroke().moveTo(-30,-24.4).lineTo(30,-53).lineTo(30,24.4).lineTo(-30,53).closePath();
	this.shape_1.setTransform(30,-7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#990000").setStrokeStyle(2,1,1).moveTo(-30,-53).lineTo(30,-24.4).lineTo(30,53).lineTo(-30,24.4).closePath();
	this.shape_2.setTransform(-30,-7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFEE00").beginStroke().moveTo(-30,24.4).lineTo(-30,-53).lineTo(30,-24.4).lineTo(30,53).closePath();
	this.shape_3.setTransform(-30,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mask_mc, new cjs.Rectangle(-61,-61,122,108), null);


(lib.level_num_btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("level");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke("#FFFFFF").setStrokeStyle(2,1,1).drawRoundRect(-20,-20,40,40,10);
	this.shape.setTransform(19.9948,20,0.9999,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#333333").beginStroke("#FFFFFF").setStrokeStyle(2,1,1).drawRoundRect(-20,-20,40,40,10);
	this.shape_1.setTransform(19.9948,20,0.9999,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#666666").beginStroke("#FFFFFF").setStrokeStyle(2,1,1).drawRoundRect(-20,-20,40,40,10);
	this.shape_2.setTransform(19.9948,20,0.9999,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#00FFFF").beginStroke().drawRoundRect(-20,-20,40,40,10);
	this.shape_3.setTransform(19.9948,20,0.9999,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,42,42);


(lib.level_3_text_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,9.3).curveTo(-6.8,7.6,-7.1,4.9).lineTo(-3.2,4.4).curveTo(-3,5.9,-2.1,6.8).curveTo(-1.3,7.5,-0.1,7.6).curveTo(1.2,7.6,2,6.6).curveTo(2.9,5.6,2.9,4).curveTo(2.9,2.4,2.1,1.5).curveTo(1.2,0.6,0,0.6).curveTo(-0.8,0.6,-1.9,0.9).lineTo(-1.4,-2.4).curveTo(0.3,-2.4,1.1,-3.1).curveTo(2,-4,2,-5.2).curveTo(2,-6.3,1.4,-6.9).curveTo(0.7,-7.6,-0.3,-7.6).curveTo(-1.4,-7.6,-2.1,-6.8).curveTo(-2.9,-6.1,-3,-4.7).lineTo(-6.8,-5.4).curveTo(-6.4,-7.3,-5.6,-8.4).curveTo(-4.8,-9.6,-3.4,-10.3).curveTo(-2,-10.9,-0.2,-11).curveTo(2.8,-10.9,4.6,-9.1).curveTo(6.2,-7.5,6.2,-5.5).curveTo(6.2,-2.7,3.1,-1).curveTo(4.9,-0.5,6,0.8).curveTo(7.1,2.2,7.1,4.2).curveTo(7.1,7,5.1,8.9).curveTo(3,11,-0.1,10.9).curveTo(-3,10.9,-4.9,9.3).closePath();
	this.shape.setTransform(-0.075,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.level_3_text_mc, new cjs.Rectangle(-10.4,-18.7,20.9,37.5), null);


(lib.level_2_text_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.2,10.8).curveTo(-7,8.6,-5.8,6.7).curveTo(-4.6,4.7,-1.2,1.5).curveTo(1.6,-1.1,2.2,-2).curveTo(3.1,-3.3,3.1,-4.5).curveTo(3.1,-5.9,2.3,-6.6).curveTo(1.6,-7.4,0.3,-7.4).curveTo(-1,-7.4,-1.8,-6.6).curveTo(-2.5,-5.8,-2.6,-4).lineTo(-6.7,-4.4).curveTo(-6.4,-7.8,-4.4,-9.3).curveTo(-2.5,-10.8,0.4,-10.8).curveTo(3.6,-10.8,5.4,-9.1).curveTo(7.2,-7.4,7.2,-4.8).curveTo(7.2,-3.4,6.7,-2).curveTo(6.2,-0.7,5,0.7).curveTo(4.3,1.6,2.3,3.4).curveTo(0.4,5.2,-0.1,5.8).curveTo(-0.7,6.4,-1,7).lineTo(7.2,7).lineTo(7.2,10.8).closePath();
	this.shape.setTransform(-0.375,-0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.level_2_text_mc, new cjs.Rectangle(-10.4,-18.7,20.9,37.5), null);


(lib.level_1_text_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.6,10.8).lineTo(0.6,-4.7).curveTo(-1.6,-2.6,-4.7,-1.6).lineTo(-4.7,-5.4).curveTo(-3.1,-5.9,-1.2,-7.3).curveTo(0.7,-8.8,1.4,-10.8).lineTo(4.7,-10.8).lineTo(4.7,10.8).closePath();
	this.shape.setTransform(-1.275,-0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.level_1_text_mc, new cjs.Rectangle(-10.4,-18.7,20.9,37.5), null);


(lib.game_over_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF0000").beginStroke().moveTo(13.5,10).curveTo(11.1,8.8,9.6,6.3).curveTo(8.1,3.8,8.1,0).curveTo(8.1,-5.3,11.1,-8.1).curveTo(14,-11.1,19.2,-11.1).curveTo(24.5,-11.1,27.4,-8.2).curveTo(30.3,-5.4,30.3,-0.1).curveTo(30.3,3.6,29.1,6.1).curveTo(27.9,8.4,25.5,9.8).curveTo(23.1,11.1,19.4,11.1).curveTo(15.9,11.1,13.5,10).closePath().moveTo(15.9,-4.6).curveTo(14.7,-3.2,14.7,0).curveTo(14.7,3.3,15.9,4.7).curveTo(17.1,6.1,19.2,6.2).curveTo(21.4,6.1,22.6,4.7).curveTo(23.8,3.3,23.7,-0.2).curveTo(23.7,-3.3,22.5,-4.6).curveTo(21.3,-6,19.2,-6.1).curveTo(17.2,-6,15.9,-4.6).closePath().moveTo(-95,9.8).curveTo(-97.5,8.5,-98.8,6).curveTo(-100.1,3.4,-100.1,-0).curveTo(-100.1,-3.5,-98.7,-6.1).curveTo(-97.2,-8.7,-94.4,-10).curveTo(-92.3,-11.1,-88.6,-11.1).curveTo(-85,-11.1,-83.2,-10.5).curveTo(-81.5,-9.8,-80.3,-8.4).curveTo(-79.1,-7.1,-78.6,-5).lineTo(-85,-3.8).curveTo(-85.3,-5.1,-86.3,-5.7).curveTo(-87.2,-6.4,-88.7,-6.3).curveTo(-90.9,-6.4,-92.2,-4.8).curveTo(-93.5,-3.4,-93.4,-0).curveTo(-93.5,3.4,-92.2,4.9).curveTo(-90.9,6.4,-88.5,6.4).curveTo(-87.4,6.4,-86.4,6.1).curveTo(-85.4,5.8,-84.1,5).lineTo(-84.1,2.9).lineTo(-88.5,2.9).lineTo(-88.5,-1.5).lineTo(-78.2,-1.5).lineTo(-78.2,7.6).curveTo(-81.2,9.6,-83.4,10.4).curveTo(-85.7,11.1,-88.8,11.1).curveTo(-92.6,11.1,-95,9.8).closePath().moveTo(92.6,10.8).lineTo(89.1,4.2).curveTo(88.4,2.9,87.8,2.6).curveTo(87.2,2,86.2,2).lineTo(85.7,2).lineTo(85.7,10.8).lineTo(79,10.8).lineTo(79,-10.7).lineTo(90.1,-10.7).curveTo(93.1,-10.7,94.8,-10.2).curveTo(96.3,-9.6,97.4,-8.2).curveTo(98.4,-6.8,98.4,-4.7).curveTo(98.3,-3,97.6,-1.7).curveTo(96.8,-0.4,95.5,0.4).curveTo(94.7,0.9,93.2,1.2).curveTo(94.4,1.7,94.9,2).lineTo(95.9,3.2).lineTo(96.9,4.5).lineTo(100.1,10.8).closePath().moveTo(85.7,-2).lineTo(88.5,-2).curveTo(88.9,-2,90.2,-2.3).curveTo(90.8,-2.4,91.3,-3).curveTo(91.7,-3.5,91.7,-4.3).curveTo(91.7,-5.3,91.1,-5.9).curveTo(90.4,-6.4,88.5,-6.4).lineTo(85.7,-6.4).closePath().moveTo(57.2,10.8).lineTo(57.2,-10.7).lineTo(75,-10.7).lineTo(75,-6.2).lineTo(63.9,-6.2).lineTo(63.9,-2.7).lineTo(74.2,-2.7).lineTo(74.2,1.7).lineTo(63.9,1.7).lineTo(63.9,5.9).lineTo(75.3,5.9).lineTo(75.3,10.8).closePath().moveTo(40,10.8).lineTo(31.8,-10.7).lineTo(38.8,-10.7).lineTo(43.6,4.7).lineTo(48.4,-10.7).lineTo(55.1,-10.7).lineTo(47.2,10.8).closePath().moveTo(-22.7,10.8).lineTo(-22.7,-10.7).lineTo(-5,-10.7).lineTo(-5,-6.2).lineTo(-16,-6.2).lineTo(-16,-2.7).lineTo(-5.8,-2.7).lineTo(-5.8,1.7).lineTo(-16,1.7).lineTo(-16,5.9).lineTo(-4.6,5.9).lineTo(-4.6,10.8).closePath().moveTo(-32.3,10.8).lineTo(-32.3,-5.6).lineTo(-36.6,10.8).lineTo(-41.4,10.8).lineTo(-45.6,-5.6).lineTo(-45.6,10.8).lineTo(-51.1,10.8).lineTo(-51.1,-10.7).lineTo(-42.3,-10.7).lineTo(-39,2.4).lineTo(-35.7,-10.7).lineTo(-26.9,-10.7).lineTo(-26.9,10.8).closePath().moveTo(-60,10.8).lineTo(-61.1,7.2).lineTo(-68.7,7.2).lineTo(-69.7,10.8).lineTo(-76.4,10.8).lineTo(-68.4,-10.7).lineTo(-61.1,-10.7).lineTo(-53.1,10.8).closePath().moveTo(-67.2,2.6).lineTo(-62.5,2.6).lineTo(-64.8,-5.2).closePath();
	this.shape.setTransform(100.1,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(4,1,1).moveTo(79,10.8).lineTo(79,-10.7).lineTo(90.1,-10.7).curveTo(93.1,-10.7,94.8,-10.2).curveTo(96.3,-9.7,97.3,-8.3).curveTo(98.3,-6.8,98.3,-4.8).curveTo(98.3,-3,97.6,-1.7).curveTo(96.8,-0.4,95.5,0.4).curveTo(94.7,1,93.2,1.3).curveTo(94.3,1.7,94.9,2.1).curveTo(95.3,2.3,96,3.2).curveTo(96.7,4.1,96.9,4.5).lineTo(100.1,10.8).lineTo(92.6,10.8).lineTo(89.1,4.2).curveTo(88.4,2.9,87.8,2.6).curveTo(87.2,2.1,86.3,2.1).lineTo(85.7,2.1).lineTo(85.7,10.8).closePath().moveTo(85.7,-2).lineTo(88.5,-2).curveTo(88.9,-2,90.2,-2.3).curveTo(90.8,-2.4,91.3,-3).curveTo(91.7,-3.5,91.7,-4.3).curveTo(91.7,-5.3,91.1,-5.8).curveTo(90.4,-6.4,88.6,-6.4).lineTo(85.7,-6.4).closePath().moveTo(57.3,-10.7).lineTo(75,-10.7).lineTo(75,-6.1).lineTo(63.9,-6.1).lineTo(63.9,-2.8).lineTo(74.2,-2.8).lineTo(74.2,1.7).lineTo(63.9,1.7).lineTo(63.9,5.9).lineTo(75.3,5.9).lineTo(75.3,10.8).lineTo(57.3,10.8).closePath().moveTo(31.8,-10.7).lineTo(38.8,-10.7).lineTo(43.6,4.8).lineTo(48.4,-10.7).lineTo(55.1,-10.7).lineTo(47.2,10.8).lineTo(40,10.8).closePath().moveTo(14.8,0.1).curveTo(14.8,3.3,16,4.8).curveTo(17.2,6.2,19.3,6.2).curveTo(21.4,6.2,22.6,4.8).curveTo(23.8,3.3,23.8,-0.3).curveTo(23.8,-3.3,22.5,-4.6).curveTo(21.3,-6,19.2,-6).curveTo(17.2,-6,16,-4.6).curveTo(14.8,-3.2,14.8,0.1).closePath().moveTo(8.1,0.1).curveTo(8.1,-5.3,11.1,-8.1).curveTo(14,-11.1,19.2,-11.1).curveTo(24.6,-11.1,27.5,-8.2).curveTo(30.3,-5.3,30.3,-0.2).curveTo(30.3,3.6,29.1,6).curveTo(27.9,8.5,25.5,9.8).curveTo(23.1,11.1,19.5,11.1).curveTo(15.9,11.1,13.5,10).curveTo(11.1,8.8,9.6,6.3).curveTo(8.1,3.8,8.1,0.1).closePath().moveTo(-22.7,-10.7).lineTo(-4.9,-10.7).lineTo(-4.9,-6.1).lineTo(-16,-6.1).lineTo(-16,-2.8).lineTo(-5.8,-2.8).lineTo(-5.8,1.7).lineTo(-16,1.7).lineTo(-16,5.9).lineTo(-4.6,5.9).lineTo(-4.6,10.8).lineTo(-22.7,10.8).closePath().moveTo(-51.1,-10.7).lineTo(-42.3,-10.7).lineTo(-39,2.3).lineTo(-35.6,-10.7).lineTo(-26.9,-10.7).lineTo(-26.9,10.8).lineTo(-32.3,10.8).lineTo(-32.3,-5.6).lineTo(-36.5,10.8).lineTo(-41.4,10.8).lineTo(-45.6,-5.6).lineTo(-45.6,10.8).lineTo(-51.1,10.8).closePath().moveTo(-61.1,7.2).lineTo(-68.6,7.2).lineTo(-69.6,10.8).lineTo(-76.4,10.8).lineTo(-68.4,-10.7).lineTo(-61.1,-10.7).lineTo(-53.1,10.8).lineTo(-60,10.8).closePath().moveTo(-62.5,2.6).lineTo(-64.8,-5.1).lineTo(-67.2,2.6).closePath().moveTo(-88.5,3).lineTo(-88.5,-1.5).lineTo(-78.3,-1.5).lineTo(-78.3,7.7).curveTo(-81.2,9.7,-83.4,10.4).curveTo(-85.7,11.1,-88.8,11.1).curveTo(-92.6,11.1,-95,9.8).curveTo(-97.4,8.5,-98.8,6).curveTo(-100.1,3.3,-100.1,0).curveTo(-100.1,-3.5,-98.6,-6.1).curveTo(-97.2,-8.7,-94.4,-10).curveTo(-92.3,-11.1,-88.5,-11.1).curveTo(-85,-11.1,-83.2,-10.4).curveTo(-81.4,-9.8,-80.3,-8.4).curveTo(-79.1,-7.1,-78.5,-5).lineTo(-84.9,-3.8).curveTo(-85.3,-5.1,-86.3,-5.8).curveTo(-87.3,-6.3,-88.7,-6.3).curveTo(-90.9,-6.3,-92.1,-4.8).curveTo(-93.4,-3.3,-93.4,-0).curveTo(-93.4,3.5,-92.1,4.9).curveTo(-90.8,6.4,-88.5,6.4).curveTo(-87.4,6.4,-86.4,6.1).curveTo(-85.3,5.8,-84,5).lineTo(-84,3).closePath();
	this.shape_1.setTransform(100.1,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(13.5,10).curveTo(11,8.8,9.6,6.3).curveTo(8.1,3.8,8.1,0.1).curveTo(8.1,-5.2,11.1,-8.1).curveTo(14,-11.1,19.2,-11.1).curveTo(24.6,-11.1,27.4,-8.2).curveTo(30.3,-5.4,30.3,-0.1).curveTo(30.3,3.6,29.1,6.1).curveTo(27.9,8.4,25.5,9.8).curveTo(23,11.1,19.4,11.1).curveTo(15.8,11.1,13.5,10).closePath().moveTo(15.9,-4.6).curveTo(14.8,-3.2,14.7,0.1).curveTo(14.8,3.3,15.9,4.7).curveTo(17.2,6.2,19.2,6.2).curveTo(21.4,6.2,22.6,4.7).curveTo(23.8,3.3,23.7,-0.2).curveTo(23.7,-3.3,22.5,-4.6).curveTo(21.3,-6,19.2,-6.1).curveTo(17.2,-6,15.9,-4.6).closePath().moveTo(-95.1,9.8).curveTo(-97.5,8.5,-98.8,5.9).curveTo(-100.1,3.4,-100.1,-0).curveTo(-100.1,-3.5,-98.7,-6.1).curveTo(-97.2,-8.7,-94.4,-10).curveTo(-92.2,-11.1,-88.6,-11.1).curveTo(-85,-11.1,-83.2,-10.5).curveTo(-81.5,-9.8,-80.3,-8.5).curveTo(-79.1,-7.1,-78.6,-5).lineTo(-85,-3.8).curveTo(-85.3,-5.1,-86.3,-5.8).curveTo(-87.2,-6.3,-88.7,-6.3).curveTo(-90.9,-6.4,-92.2,-4.9).curveTo(-93.5,-3.3,-93.4,-0).curveTo(-93.5,3.4,-92.2,4.9).curveTo(-90.9,6.4,-88.5,6.4).curveTo(-87.4,6.4,-86.4,6.1).curveTo(-85.4,5.7,-84.1,5).lineTo(-84.1,2.9).lineTo(-88.5,2.9).lineTo(-88.5,-1.5).lineTo(-78.2,-1.5).lineTo(-78.2,7.6).curveTo(-81.2,9.6,-83.5,10.4).curveTo(-85.7,11.1,-88.8,11.1).curveTo(-92.7,11.1,-95.1,9.8).closePath().moveTo(92.6,10.8).lineTo(89.1,4.2).curveTo(88.4,2.9,87.8,2.6).curveTo(87.1,2,86.3,2).lineTo(85.7,2).lineTo(85.7,10.8).lineTo(79,10.8).lineTo(79,-10.7).lineTo(90.1,-10.7).curveTo(93.1,-10.7,94.7,-10.2).curveTo(96.3,-9.7,97.4,-8.2).curveTo(98.4,-6.8,98.3,-4.7).curveTo(98.3,-3,97.6,-1.7).curveTo(96.8,-0.4,95.5,0.4).curveTo(94.7,0.9,93.2,1.2).curveTo(94.3,1.7,94.9,2).lineTo(95.9,3.2).lineTo(96.9,4.5).lineTo(100.1,10.8).closePath().moveTo(85.7,-2).lineTo(88.5,-2).curveTo(88.9,-2,90.2,-2.3).curveTo(90.8,-2.5,91.3,-3).curveTo(91.7,-3.5,91.7,-4.3).curveTo(91.7,-5.3,91.1,-5.9).curveTo(90.4,-6.4,88.5,-6.4).lineTo(85.7,-6.4).closePath().moveTo(57.2,10.8).lineTo(57.2,-10.7).lineTo(75,-10.7).lineTo(75,-6.2).lineTo(63.9,-6.2).lineTo(63.9,-2.7).lineTo(74.2,-2.7).lineTo(74.2,1.7).lineTo(63.9,1.7).lineTo(63.9,5.9).lineTo(75.3,5.9).lineTo(75.3,10.8).closePath().moveTo(39.9,10.8).lineTo(31.8,-10.7).lineTo(38.8,-10.7).lineTo(43.6,4.7).lineTo(48.4,-10.7).lineTo(55.1,-10.7).lineTo(47.1,10.8).closePath().moveTo(-22.7,10.8).lineTo(-22.7,-10.7).lineTo(-5,-10.7).lineTo(-5,-6.2).lineTo(-16,-6.2).lineTo(-16,-2.7).lineTo(-5.8,-2.7).lineTo(-5.8,1.7).lineTo(-16,1.7).lineTo(-16,5.9).lineTo(-4.6,5.9).lineTo(-4.6,10.8).closePath().moveTo(-32.3,10.8).lineTo(-32.3,-5.6).lineTo(-36.6,10.8).lineTo(-41.4,10.8).lineTo(-45.6,-5.6).lineTo(-45.6,10.8).lineTo(-51.1,10.8).lineTo(-51.1,-10.7).lineTo(-42.3,-10.7).lineTo(-39,2.3).lineTo(-35.7,-10.7).lineTo(-26.9,-10.7).lineTo(-26.9,10.8).closePath().moveTo(-60,10.8).lineTo(-61.1,7.2).lineTo(-68.7,7.2).lineTo(-69.7,10.8).lineTo(-76.4,10.8).lineTo(-68.4,-10.7).lineTo(-61.1,-10.7).lineTo(-53.1,10.8).closePath().moveTo(-67.2,2.6).lineTo(-62.5,2.6).lineTo(-64.8,-5.2).closePath();
	this.shape_2.setTransform(100.1,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_over_mc, new cjs.Rectangle(-2,-2,204.2,26.2), null);


(lib.error_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF0000").beginStroke().drawRect(-160,-194.95,320,389.9);
	this.shape.setTransform(160,194.9957,1,1.0002);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.error_mc, new cjs.Rectangle(0,0,320,390), null);


(lib.close_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(2,1,1).moveTo(15,-15).lineTo(-15,15);
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(2,1,1).moveTo(-15,-15).lineTo(15,15);
	this.shape_1.setTransform(15,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(2,1,1).moveTo(-15,-15).lineTo(15,-15).lineTo(15,15).lineTo(-15,15).closePath();
	this.shape_2.setTransform(15,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-15,15).lineTo(-15,-15).lineTo(15,-15).lineTo(15,15).closePath();
	this.shape_3.setTransform(15,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#333333").beginStroke().moveTo(-15,15).lineTo(-15,-15).lineTo(15,-15).lineTo(15,15).closePath();
	this.shape_4.setTransform(15,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#666666").beginStroke().moveTo(-15,15).lineTo(-15,-15).lineTo(15,-15).lineTo(15,15).closePath();
	this.shape_5.setTransform(15,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#00FFFF").beginStroke().moveTo(-15,15).lineTo(-15,-15).lineTo(15,-15).lineTo(15,15).closePath();
	this.shape_6.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,32);


(lib.art_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.2,-2.4).curveTo(5.8,-4.4,11.4,-1.8).curveTo(5.5,-2.1,-0.9,-0.6).curveTo(-7.3,0.9,-11.4,3.2).curveTo(-8.1,-0.3,-1.2,-2.4).closePath();
	this.shape.setTransform(-27.2,12.5652);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF6600").beginStroke().moveTo(-9.1,-1.4).curveTo(-5.3,-4.7,-1.7,-6.3).curveTo(5.2,-10.6,13.5,-6.5).curveTo(19.3,-2,14.7,1.5).curveTo(9.9,4.1,5.7,3.9).curveTo(1.6,3.8,-3.7,4.1).curveTo(-8.9,4.4,-16.7,8.5).curveTo(-13,1.8,-9.1,-1.4).closePath();
	this.shape_1.setTransform(-28.2704,11.6994);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.7,-0).curveTo(-1.5,-1.6,-0,-1.7).curveTo(1.6,-1.6,1.7,-0).curveTo(1.6,1.6,-0,1.7).curveTo(-1.5,1.6,-1.7,-0).closePath();
	this.shape_2.setTransform(-6.8,-2.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#333333").beginStroke().moveTo(-5.7,-0).curveTo(-5.2,-5.2,-0,-5.7).curveTo(5.2,-5.2,5.7,-0).curveTo(5.2,5.2,-0,5.7).curveTo(-5.2,5.2,-5.7,-0).closePath();
	this.shape_3.setTransform(-4.525,-3.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#333333").beginStroke().moveTo(3.8,13.8).curveTo(7.9,7.9,12.6,3.1).curveTo(17.2,-1.7,15.4,-7.2).curveTo(10.1,-17.8,-3.5,-15).curveTo(-11,-13.3,-16.4,-4.8).curveTo(-21.8,3.8,-21.9,17.8).curveTo(-30.6,4.8,-28.1,-5.6).curveTo(-25.5,-15.9,-17.1,-22.1).curveTo(-8.7,-28.2,0.3,-28.2).curveTo(12.3,-27.7,20.4,-19.9).curveTo(28.3,-11.9,28.7,0.2).curveTo(28.2,12.9,20.5,20.5).curveTo(12.7,28,3.1,28.2).curveTo(-0.3,19.7,3.8,13.8).closePath();
	this.shape_4.setTransform(-0.8627,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(20.1,-20).curveTo(28.1,-12,28.4,0).curveTo(28.1,12.1,20.1,20).curveTo(12,28,-0,28.4).curveTo(-12.1,28,-20.1,20).curveTo(-28.1,12.1,-28.4,0).curveTo(-28.1,-12,-20.1,-20).curveTo(-12.1,-28,-0,-28.4).curveTo(12,-28,20.1,-20).closePath();
	this.shape_5.setTransform(-0.625,-1.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-20.1,20).curveTo(-28.1,12.1,-28.4,0).curveTo(-28.1,-12,-20.1,-20).curveTo(-12.1,-28.1,-0,-28.3).curveTo(12,-28.1,20.1,-20).curveTo(28.1,-12,28.4,0).curveTo(28.1,12.1,20.1,20).curveTo(12,28,-0,28.4).curveTo(-12.1,28,-20.1,20).closePath();
	this.shape_6.setTransform(-0.625,-1.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.art_mc, new cjs.Rectangle(-45,-31,73.8,58.7), null);


(lib.art_hit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FF0000").setStrokeStyle(10,1,1).moveTo(25,-25).lineTo(-25,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#FF0000").setStrokeStyle(10,1,1).moveTo(-25,-25).lineTo(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.art_hit_mc, new cjs.Rectangle(-30,-30,60,60), null);


(lib.popup_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// game_over_mc
	this.game_over_mc = new lib.game_over_mc();
	this.game_over_mc.name = "game_over_mc";
	this.game_over_mc.parent = this;
	this.game_over_mc.setTransform(60,80);

	this.timeline.addTween(cjs.Tween.get(this.game_over_mc).wait(1));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.name = "play_btn";
	this.play_btn.parent = this;
	this.play_btn.setTransform(100,150);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(1));

	// level_num_btn
	this.level_3_text_mc = new lib.level_3_text_mc();
	this.level_3_text_mc.name = "level_3_text_mc";
	this.level_3_text_mc.parent = this;
	this.level_3_text_mc.setTransform(220,350);

	this.level_2_text_mc = new lib.level_2_text_mc();
	this.level_2_text_mc.name = "level_2_text_mc";
	this.level_2_text_mc.parent = this;
	this.level_2_text_mc.setTransform(160,350);

	this.level_1_text_mc = new lib.level_1_text_mc();
	this.level_1_text_mc.name = "level_1_text_mc";
	this.level_1_text_mc.parent = this;
	this.level_1_text_mc.setTransform(100,350);

	this.level_txt = new cjs.Text("0", "bold 30px 'Arial'", "#FFFF00");
	this.level_txt.name = "level_txt";
	this.level_txt.textAlign = "center";
	this.level_txt.lineHeight = 36;
	this.level_txt.lineWidth = 96;
	this.level_txt.parent = this;
	this.level_txt.setTransform(160,272);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,4.4).curveTo(-5.8,2.7,-5.8,0.1).curveTo(-5.8,-3,-4.2,-4.7).curveTo(-2.6,-6.5,-0.1,-6.5).curveTo(2.7,-6.5,4.3,-4.7).curveTo(5.9,-2.8,5.8,1).lineTo(-2.4,1).curveTo(-2.4,2.4,-1.6,3.2).curveTo(-0.9,4,0.3,4).curveTo(1,4,1.6,3.6).curveTo(2.1,3.2,2.4,2.3).lineTo(5.6,2.8).curveTo(5,4.6,3.6,5.6).curveTo(2.3,6.5,0.2,6.5).curveTo(-3,6.5,-4.6,4.4).closePath().moveTo(-1.7,-3.2).curveTo(-2.4,-2.4,-2.4,-1.1).lineTo(2.5,-1.1).curveTo(2.5,-2.5,1.8,-3.2).curveTo(1.1,-4,0.1,-4).curveTo(-1,-4,-1.7,-3.2).closePath();
	this.shape.setTransform(231.3258,247.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,7.8).curveTo(-5.7,6.8,-5.7,5.1).lineTo(-5.7,4.6).lineTo(-1.9,5.2).curveTo(-1.8,5.8,-1.5,6.1).curveTo(-1,6.4,0,6.4).curveTo(1.3,6.4,1.9,6).curveTo(2.4,5.7,2.6,5.2).curveTo(2.8,4.8,2.8,3.6).lineTo(2.8,1.8).curveTo(1.3,3.9,-1,3.8).curveTo(-3.5,3.9,-4.9,1.7).curveTo(-6.1,0.1,-6.1,-2.5).curveTo(-6.1,-5.6,-4.6,-7.2).curveTo(-3.1,-8.9,-0.8,-8.9).curveTo(1.5,-8.9,3,-6.8).lineTo(3,-8.6).lineTo(6.1,-8.6).lineTo(6.1,2.5).curveTo(6.1,4.8,5.7,5.9).curveTo(5.3,6.9,4.7,7.6).curveTo(4,8.2,2.9,8.6).curveTo(1.8,8.9,0.1,8.9).curveTo(-3,8.9,-4.3,7.8).closePath().moveTo(-1.9,-5.5).curveTo(-2.7,-4.5,-2.7,-2.7).curveTo(-2.7,-0.6,-1.9,0.3).curveTo(-1.2,1.2,-0.1,1.2).curveTo(1.2,1.2,2,0.2).curveTo(2.8,-0.7,2.8,-2.6).curveTo(2.8,-4.5,2,-5.4).curveTo(1.2,-6.4,0,-6.4).curveTo(-1.2,-6.4,-1.9,-5.5).closePath();
	this.shape_1.setTransform(217.175,249.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,6.4).lineTo(2.4,0).curveTo(2.4,-2,2.2,-2.6).curveTo(2,-3.2,1.5,-3.5).curveTo(1,-3.8,0.3,-3.8).curveTo(-0.5,-3.8,-1.2,-3.4).curveTo(-1.9,-2.9,-2.1,-2.1).curveTo(-2.4,-1.3,-2.4,0.7).lineTo(-2.4,6.4).lineTo(-5.7,6.4).lineTo(-5.7,-6.1).lineTo(-2.6,-6.1).lineTo(-2.6,-4.2).curveTo(-1,-6.4,1.5,-6.4).curveTo(2.6,-6.4,3.5,-6).curveTo(4.4,-5.6,4.8,-5).curveTo(5.3,-4.3,5.5,-3.6).curveTo(5.7,-2.8,5.7,-1.4).lineTo(5.7,6.4).closePath();
	this.shape_2.setTransform(202.825,247.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,5.5).curveTo(-5.9,4.4,-5.8,2.8).curveTo(-5.8,1.8,-5.4,1).curveTo(-4.8,0.1,-3.9,-0.3).curveTo(-3,-0.8,-1.3,-1.1).curveTo(1,-1.5,1.9,-1.9).lineTo(1.9,-2.2).curveTo(1.9,-3.2,1.4,-3.6).curveTo(1,-4,-0.3,-4).curveTo(-1.3,-4,-1.7,-3.6).curveTo(-2.2,-3.3,-2.5,-2.4).lineTo(-5.5,-3).curveTo(-5,-4.8,-3.8,-5.6).curveTo(-2.5,-6.5,-0.1,-6.5).curveTo(2.1,-6.5,3.2,-6).curveTo(4.3,-5.5,4.7,-4.6).curveTo(5.1,-3.9,5.1,-1.7).lineTo(5.1,2.1).curveTo(5.1,3.8,5.2,4.6).curveTo(5.4,5.3,5.9,6.2).lineTo(2.6,6.2).lineTo(2.3,5.3).lineTo(2.2,4.9).curveTo(1.3,5.7,0.4,6.1).curveTo(-0.6,6.5,-1.7,6.5).curveTo(-3.7,6.5,-4.7,5.5).closePath().moveTo(-0.1,0.8).curveTo(-1.5,1,-1.9,1.3).curveTo(-2.6,1.8,-2.6,2.5).curveTo(-2.5,3.2,-2.1,3.7).curveTo(-1.5,4.2,-0.7,4.2).curveTo(0.2,4.2,1,3.6).curveTo(1.5,3.2,1.7,2.5).curveTo(1.9,2.1,1.9,0.9).lineTo(1.9,0.2).lineTo(-0.1,0.8).closePath();
	this.shape_3.setTransform(188.8,247.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,8.6).lineTo(2.4,2.1).curveTo(2.4,0,2.2,-0.4).curveTo(2,-1,1.5,-1.3).curveTo(1.1,-1.6,0.3,-1.6).curveTo(-0.5,-1.6,-1.1,-1.2).curveTo(-1.8,-0.8,-2.1,0).curveTo(-2.4,0.8,-2.4,2.3).lineTo(-2.4,8.6).lineTo(-5.7,8.6).lineTo(-5.7,-8.6).lineTo(-2.4,-8.6).lineTo(-2.4,-2.2).curveTo(-0.8,-4.2,1.4,-4.1).curveTo(2.6,-4.2,3.5,-3.7).curveTo(4.4,-3.3,4.9,-2.7).curveTo(5.3,-1.9,5.5,-1.2).curveTo(5.7,-0.4,5.7,1.3).lineTo(5.7,8.6).closePath();
	this.shape_4.setTransform(174.825,245.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.3,6.5).curveTo(-7.5,4.2,-7.5,0.1).curveTo(-7.5,-4.2,-5.3,-6.5).curveTo(-3.1,-8.9,0.6,-8.9).curveTo(3.7,-8.9,5.7,-7).curveTo(6.8,-5.9,7.4,-3.9).lineTo(4,-3).curveTo(3.7,-4.4,2.7,-5.2).curveTo(1.8,-5.9,0.4,-5.9).curveTo(-1.5,-5.9,-2.7,-4.6).curveTo(-3.9,-3.2,-3.9,-0.1).curveTo(-3.9,3.1,-2.7,4.5).curveTo(-1.6,5.9,0.3,5.9).curveTo(1.7,5.9,2.7,5).curveTo(3.7,4.1,4.1,2.3).lineTo(7.5,3.3).curveTo(6.7,6.1,4.9,7.5).curveTo(3.1,8.9,0.3,8.9).curveTo(-3.1,8.9,-5.3,6.5).closePath();
	this.shape_5.setTransform(158.725,245.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,8.6).lineTo(-1.6,-8.6).lineTo(1.7,-8.6).lineTo(1.7,8.6).closePath();
	this.shape_6.setTransform(140.15,245.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,4.4).curveTo(-5.8,2.7,-5.8,0.1).curveTo(-5.8,-3,-4.2,-4.7).curveTo(-2.6,-6.5,-0.1,-6.5).curveTo(2.7,-6.5,4.3,-4.7).curveTo(5.9,-2.8,5.8,1).lineTo(-2.4,1).curveTo(-2.4,2.4,-1.6,3.2).curveTo(-0.9,4,0.3,4).curveTo(1,4,1.6,3.6).curveTo(2.1,3.2,2.4,2.3).lineTo(5.6,2.8).curveTo(5,4.6,3.6,5.6).curveTo(2.3,6.5,0.2,6.5).curveTo(-3,6.5,-4.6,4.4).closePath().moveTo(-1.7,-3.2).curveTo(-2.4,-2.4,-2.4,-1.1).lineTo(2.5,-1.1).curveTo(2.5,-2.5,1.8,-3.2).curveTo(1.1,-4,0.1,-4).curveTo(-1,-4,-1.7,-3.2).closePath();
	this.shape_7.setTransform(130.0258,247.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,6.2).lineTo(-6.5,-6.2).lineTo(-3,-6.2).lineTo(-0.7,0.1).lineTo(0,2.3).lineTo(0.4,1.2).lineTo(0.7,0.1).lineTo(3.1,-6.2).lineTo(6.4,-6.2).lineTo(1.5,6.2).closePath();
	this.shape_8.setTransform(116.7,247.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,4.4).curveTo(-5.8,2.7,-5.8,0.1).curveTo(-5.8,-3,-4.2,-4.7).curveTo(-2.6,-6.5,-0.1,-6.5).curveTo(2.7,-6.5,4.3,-4.7).curveTo(5.9,-2.8,5.8,1).lineTo(-2.4,1).curveTo(-2.4,2.4,-1.6,3.2).curveTo(-0.9,4,0.3,4).curveTo(1,4,1.6,3.6).curveTo(2.1,3.2,2.4,2.3).lineTo(5.6,2.8).curveTo(5,4.6,3.6,5.6).curveTo(2.3,6.5,0.2,6.5).curveTo(-3,6.5,-4.6,4.4).closePath().moveTo(-1.7,-3.2).curveTo(-2.4,-2.4,-2.4,-1.1).lineTo(2.5,-1.1).curveTo(2.5,-2.5,1.8,-3.2).curveTo(1.1,-4,0.1,-4).curveTo(-1,-4,-1.7,-3.2).closePath();
	this.shape_9.setTransform(103.3258,247.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6,8.5).lineTo(-6,-8.5).lineTo(-2.6,-8.5).lineTo(-2.6,5.6).lineTo(6,5.6).lineTo(6,8.5).closePath();
	this.shape_10.setTransform(90,245.225);

	this.level_3_btn = new lib.level_num_btn();
	this.level_3_btn.name = "level_3_btn";
	this.level_3_btn.parent = this;
	this.level_3_btn.setTransform(200,330);
	new cjs.ButtonHelper(this.level_3_btn, 0, 1, 2, false, new lib.level_num_btn(), 3);

	this.level_1_btn = new lib.level_num_btn();
	this.level_1_btn.name = "level_1_btn";
	this.level_1_btn.parent = this;
	this.level_1_btn.setTransform(80,330);
	new cjs.ButtonHelper(this.level_1_btn, 0, 1, 2, false, new lib.level_num_btn(), 3);

	this.level_2_btn = new lib.level_num_btn();
	this.level_2_btn.name = "level_2_btn";
	this.level_2_btn.parent = this;
	this.level_2_btn.setTransform(140,330);
	new cjs.ButtonHelper(this.level_2_btn, 0, 1, 2, false, new lib.level_num_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.level_2_btn},{t:this.level_1_btn},{t:this.level_3_btn},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.level_txt},{t:this.level_1_text_mc},{t:this.level_2_text_mc},{t:this.level_3_text_mc}]}).wait(1));

	// area
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("rgba(0,0,0,0.698)").beginStroke().moveTo(-160,195).lineTo(-160,-195).lineTo(160,-195).lineTo(160,195).closePath();
	this.shape_11.setTransform(160,195);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.popup_mc, new cjs.Rectangle(0,0,320,390), null);


(lib.life_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// life_num_mc
	this.life_3_mc = new lib.art_mc();
	this.life_3_mc.name = "life_3_mc";
	this.life_3_mc.parent = this;
	this.life_3_mc.setTransform(102.5,15,0.5,0.5);

	this.life_2_mc = new lib.art_mc();
	this.life_2_mc.name = "life_2_mc";
	this.life_2_mc.parent = this;
	this.life_2_mc.setTransform(62.5,15,0.5,0.5);

	this.life_1_mc = new lib.art_mc();
	this.life_1_mc.name = "life_1_mc";
	this.life_1_mc.parent = this;
	this.life_1_mc.setTransform(22.5,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.life_1_mc},{t:this.life_2_mc},{t:this.life_3_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.life_mc, new cjs.Rectangle(0,-0.2,116.6,28.8), null);


(lib.hit_btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = exportRoot;
		var parent_mc = this.parent;
		var this_mc = this;
		
		this.start_y_num = 0;
		this.point_y_num = 0;
		
		this.start_time_num = 0;
		this.goal_time_num = 0;
		
		//マウスイベント
		this.addEventListener( "mousedown", mousedown_func );
		this.addEventListener( "pressmove", pressmove_func );
		this.addEventListener( "pressup", pressup_func );
		
		//ドラッグ開始
		function mousedown_func( event ) {
			createjs.Sound.play( "touch", "none", 0, 0, 0, 1, 0 );
			//開始位置記録
			this_mc.start_y_num = this_mc.y;
			this_mc.point_y_num = event.stageY - this_mc.start_y_num;
		};
		
		//ドラッグ中
		function pressmove_func( event ) {
			//現在位置算出
			this_mc.point_y_num = event.stageY - this_mc.point_y_num;
			//移動範囲制限
			if ( this_mc.point_y_num > -75 && this_mc.point_y_num < 0 ) {
				this_mc.y = this_mc.point_y_num;
			};
		};
		
		//ドラッグ終了
		function pressup_func( event ) {
			//制限範囲
			if ( ( this_mc.start_y_num + 10 ) < this_mc.y ) {
				//効果音
				createjs.Sound.play( "hit", "hit", 0.25, 0, 0, 1, 0 );
				createjs.Sound.play( "score", "none", 0.5, 0, 0, 1, 0 );
				//残り時間タイマー
				clearInterval( parent_mc.wait_time_id );
				//待機時間
				parent_mc.wait_time_txt.text = "";
				//得点加算
				root.active_obj.score = Number( root.active_obj.score ) + 1;
				root.text_mc.score_txt.text = String( root.active_obj.score );
				//アニメ削除
				createjs.Tween.removeTweens( this_mc );
				//クリック
				this_mc.art_hit_mc.visible = true;
				setTimeout( function() {
					this_mc.art_hit_mc.visible = false;
				}, root.in_time_num );
				//アウト
				parent_mc.out_func();
			};
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// art_hit_mc
	this.art_hit_mc = new lib.art_hit_mc();
	this.art_hit_mc.name = "art_hit_mc";
	this.art_hit_mc.parent = this;
	this.art_hit_mc.setTransform(25,25,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.art_hit_mc).wait(1));

	// hit_error_mc
	this.hit_error_mc = new lib.art_mc();
	this.hit_error_mc.name = "hit_error_mc";
	this.hit_error_mc.parent = this;
	this.hit_error_mc.setTransform(0.2,0,1,1,0,0,0,0.2,0);
	this.hit_error_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.hit_error_mc.cache(-47,-33,78,63);

	this.timeline.addTween(cjs.Tween.get(this.hit_error_mc).wait(1));

	// art_mc
	this.art_mc = new lib.art_mc();
	this.art_mc.name = "art_mc";
	this.art_mc.parent = this;
	this.art_mc.setTransform(0.2,0,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.art_mc).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,255,0.008)").beginStroke().drawRect(-50,-50,100,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hit_btn, new cjs.Rectangle(-50,-50,100,100), null);


(lib.hit_num_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//ルート参照用
		var root = exportRoot;
		//自身参照用
		var this_mc = this;
		
		//カーソル
		this.hit_btn.cursor = "pointer";
		
		//マスク
		this.mask_mc.mouseEnabled = true;
		this.mask_mc.cursor = "default";
		
		//クリック
		this.hit_btn.art_hit_mc.visible = false;
		//エラー
		this.parent.error_mc.visible = false;
		this.hit_btn.hit_error_mc.visible = false;
		
		//初期位置記録
		this.ini_y_num = this.hit_btn.y;
		//移動距離
		this.distance_num = 75;
		//最小時間
		this.min_time_array = [ 0, 4, 3, 2 ];
		//最大時間
		this.max_time_array = [ 0, 6, 5, 4 ];
		//カウント数
		this.count_num = 1;
		//残り時間タイマー
		this.wait_time_id = 0;
		
		//開始
		this.start_func = function() {
			this.hit_btn.mouseEnabled = true;
			//カウント数
			this.count_num = 1;
			//残り時間タイマー
			this.wait_time_id = 0;
			//待機時間
			this.wait_time_txt.text = "";
			//乱数生成
			var start_random_time_num = Math.floor( Math.random() * 9 + 1 );
			setTimeout( function() {
				//イン
				this_mc.in_func();
			}, start_random_time_num * 1000 );
		};
		
		//終了
		this.stop_func = function() {
			//リセット
			clearInterval( this.wait_time_id );
			createjs.Tween.removeTweens( this.hit_btn );
			this.hit_btn.y = this.ini_y_num;
		};
		
		//イン
		this.in_func = function() {
			//ゲーム再生中判定
			if ( root.game_play_bool == true ) {
				this_mc.hit_btn.mouseEnabled = true;
				//効果音
				createjs.Sound.play( "jump1", "none", root.in_time_num * 0.5, 0, 0, 1, 0 );
				//イン
				createjs.Tween.get( this.hit_btn, { override : true } ).to( { y : this.ini_y_num - this.distance_num }, root.in_time_num, createjs.Ease.backInOut ).call( function() {
					//待機時間
					this_mc.wait_time_txt.text = String( Math.floor( root.wait_time_num / 100 ) );
					clearInterval( this_mc.wait_time_id );
					this_mc.wait_time_id = setInterval( function() {
						//console.log( this_mc.wait_time_id );
						var _num = Math.floor( Number( this_mc.wait_time_txt.text ) - 1 );
						this_mc.wait_time_txt.text = String( _num );
						if ( _num == 0 ) {
							clearInterval( this_mc.wait_time_id );
							this_mc.wait_time_txt.text = "0";
						};
					}, 100 );
					//エラー処理
					createjs.Tween.get( this ).wait( root.wait_time_num ).call( function() {
						//効果音
						createjs.Sound.play( "error", "none", 0, 0, 0, 1, 0 );
						//待機時間
						clearInterval( this_mc.wait_time_id );
						this_mc.wait_time_txt.text = "0";
						//ゲーム中なら
						if ( root.active_obj.life > 0 ) {
							//ライフ減点
							root.active_obj.life -= 1;
							//ライフ表示
							root.life_mc.life_1_mc.visible = false;
							root.life_mc.life_2_mc.visible = false;
							root.life_mc.life_3_mc.visible = false;
							for ( var i = 1; i <= root.active_obj.life; i++ ) {
								root.life_mc[ "life_" + i + "_mc" ].visible = true;
							};
							//エラー表示
							this_mc.parent.error_mc.visible = true;
							this_mc.hit_btn.hit_error_mc.visible = true;
							setTimeout( function() {
								this_mc.parent.error_mc.visible = false;
								this_mc.hit_btn.hit_error_mc.visible = false;
								this_mc.wait_time_txt.text = "";
								//アウト
								if ( root.active_obj.life > 0 ) {
									this_mc.out_func();
								};
							}, 300 );
						};
						//ゲーム終了
						if ( root.active_obj.life == 0 ) {
							root.game_stop_func();
							return;
						};
					} );
				} );
			};
		};
		
		//アウト
		this.out_func = function() {
			//カウントアップ
			this_mc.count_num++;
			//プレイ時間に応じて
			if ( root.in_time_num > 500 ) {
				root.in_time_num -= 50;
			};
			if ( root.out_time_num > 500 ) {
				root.out_time_num -= 50;
			};
			if ( root.wait_time_num > 1000 ) {
				root.wait_time_num -= 20;
			};
			//アウト
			createjs.Tween.get( this.hit_btn, { override : true } ).to( { y : this.distance_num * -1.5 }, root.out_time_num * 0.5, createjs.Ease.quartInOut ).call( function() {
				createjs.Tween.get( this, { override : true } ).to( { y : this_mc.ini_y_num }, root.out_time_num * 0.5, createjs.Ease.quartInOut ).call( function() {
					var random_time_num = Math.floor( Math.random() * ( this_mc.max_time_array[ root.active_obj.level ] + 1 - this_mc.min_time_array[ root.active_obj.level ] ) ) + this_mc.min_time_array[ root.active_obj.level ];
					createjs.Tween.get( this ).wait( random_time_num * 1000 ).call( function() {
						//ゲーム中なら
						if ( root.active_obj.life > 0 ) {
							//フェイントのギミック
							var feint_time_num = Math.floor( Math.random() * 3 + 1 );
							if ( feint_time_num == 1 ) {
								this_mc.hit_btn.mouseEnabled = false;
								//効果音
								createjs.Sound.play( "jump1", "none", root.in_time_num * 0.5, 0, 0, 1, 0 );
								//ハーフイン
								createjs.Tween.get( this_mc.hit_btn, { override : true } ).to( { y : this_mc.ini_y_num - ( this_mc.distance_num * 0.5 ) }, ( root.in_time_num * 0.5 ), createjs.Ease.backInOut ).call( function() {
									createjs.Tween.get( this, { override : true } ).to( { y : this_mc.ini_y_num }, ( root.in_time_num * 0.5 ), createjs.Ease.backInOut ).wait( random_time_num * 1000 ).call( function() {
										//イン
										this_mc.in_func();
									} );
								} );
							} else {
								this_mc.hit_btn.mouseEnabled = true;
								//イン
								this_mc.in_func();
							};
						};
					} );
				} );
			} );
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// wait_time_txt
	this.wait_time_txt = new cjs.Text("", "30px 'MS PGothic'", "#990000");
	this.wait_time_txt.name = "wait_time_txt";
	this.wait_time_txt.textAlign = "center";
	this.wait_time_txt.lineHeight = 32;
	this.wait_time_txt.lineWidth = 56;
	this.wait_time_txt.parent = this;
	this.wait_time_txt.setTransform(-30,-23);

	this.timeline.addTween(cjs.Tween.get(this.wait_time_txt).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc();
	this.mask_mc.name = "mask_mc";
	this.mask_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-60,250.9).lineTo(-60,-280.5).lineTo(60,-280.5).lineTo(60,250.9).lineTo(0,280.5).closePath();
	mask.setTransform(0,-311.5);

	// hit_btn
	this.hit_btn = new lib.hit_btn();
	this.hit_btn.name = "hit_btn";
	this.hit_btn.parent = this;

	var maskedShapeInstanceList = [this.hit_btn];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.hit_btn).wait(1));

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#990000").setStrokeStyle(2,1,1).moveTo(-30,-28.5).lineTo(-30,28.5).lineTo(30,-1).closePath();
	this.shape.setTransform(30,-59.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF6600").beginStroke().moveTo(-30,-28.5).lineTo(30,-1.1).lineTo(-30,28.5).closePath();
	this.shape_1.setTransform(30,-59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#990000").setStrokeStyle(2,1,1).moveTo(30,-28.5).lineTo(30,28.5).lineTo(-30,-1).closePath();
	this.shape_2.setTransform(-30,-59.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FF9900").beginStroke().moveTo(-30,-1.1).lineTo(30,-28.5).lineTo(30,28.5).closePath();
	this.shape_3.setTransform(-30,-59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hit_num_mc, new cjs.Rectangle(-61,-89,122,136), null);


(lib.game_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//名前設定
		for ( var i in this ) {
			if  ( this[ i ] == "[MovieClip (name=null)]" ) {
				if ( i != "parent" ) {
					this[ i ].name = i;
				};
			};
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-160,-195).lineTo(160,-195).lineTo(160,195).lineTo(-160,195).closePath();
	mask.setTransform(160,194.9937);

	// hit_num_mc
	this.hit_9_mc = new lib.hit_num_mc();
	this.hit_9_mc.name = "hit_9_mc";
	this.hit_9_mc.parent = this;
	this.hit_9_mc.setTransform(260,350,0.7,0.7);

	this.hit_8_mc = new lib.hit_num_mc();
	this.hit_8_mc.name = "hit_8_mc";
	this.hit_8_mc.parent = this;
	this.hit_8_mc.setTransform(160,350,0.7,0.7);

	this.hit_7_mc = new lib.hit_num_mc();
	this.hit_7_mc.name = "hit_7_mc";
	this.hit_7_mc.parent = this;
	this.hit_7_mc.setTransform(60,350,0.7,0.7);

	this.hit_6_mc = new lib.hit_num_mc();
	this.hit_6_mc.name = "hit_6_mc";
	this.hit_6_mc.parent = this;
	this.hit_6_mc.setTransform(260,250,0.7,0.7);

	this.hit_5_mc = new lib.hit_num_mc();
	this.hit_5_mc.name = "hit_5_mc";
	this.hit_5_mc.parent = this;
	this.hit_5_mc.setTransform(160,250,0.7,0.7);

	this.hit_4_mc = new lib.hit_num_mc();
	this.hit_4_mc.name = "hit_4_mc";
	this.hit_4_mc.parent = this;
	this.hit_4_mc.setTransform(60,250,0.7,0.7);

	this.hit_3_mc = new lib.hit_num_mc();
	this.hit_3_mc.name = "hit_3_mc";
	this.hit_3_mc.parent = this;
	this.hit_3_mc.setTransform(260,140,0.7,0.7);

	this.hit_2_mc = new lib.hit_num_mc();
	this.hit_2_mc.name = "hit_2_mc";
	this.hit_2_mc.parent = this;
	this.hit_2_mc.setTransform(160,140,0.7,0.7);

	this.hit_1_mc = new lib.hit_num_mc();
	this.hit_1_mc.name = "hit_1_mc";
	this.hit_1_mc.parent = this;
	this.hit_1_mc.setTransform(60,140,0.7,0.7);

	var maskedShapeInstanceList = [this.hit_9_mc,this.hit_8_mc,this.hit_7_mc,this.hit_6_mc,this.hit_5_mc,this.hit_4_mc,this.hit_3_mc,this.hit_2_mc,this.hit_1_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit_1_mc},{t:this.hit_2_mc},{t:this.hit_3_mc},{t:this.hit_4_mc},{t:this.hit_5_mc},{t:this.hit_6_mc},{t:this.hit_7_mc},{t:this.hit_8_mc},{t:this.hit_9_mc}]}).wait(1));

	// error_mc
	this.error_mc = new lib.error_mc();
	this.error_mc.name = "error_mc";
	this.error_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.error_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().drawRect(-160,-194.95,320,389.9);
	this.shape.setTransform(160,194.9957,1,1.0002);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_mc, new cjs.Rectangle(0,0,320,390), null);


// stage content:
(lib.gameflick = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//停止
		this.stop();
		
		//マウスオン
		stage.enableMouseOver( lib.properties.fps );
		
		//タッチイベントオン
		if ( createjs.Touch.isSupported() ) {
			createjs.Touch.enable( stage );
		};
		
		//名前設定
		for ( var i in this ) {
			if  ( this[ i ] == "[MovieClip (name=null)]" ) {
				this[ i ].name = i;
			};
		};
		this.name = "root";
		
		//ルート参照用
		var root = exportRoot;
		//現在参照用
		this.active_obj = { level : 0, time : 0, life : 0, score : 0 };
		
		//ゲーム再生中判定
		this.game_play_bool = false;
		//開始時間
		this.start_time_num = 0;
		//経過時間
		this.play_time_num = 0;
		//待機時間
		this.wait_time_num = 0;
		this.wait_time_array = [ 0, 3000, 3000, 3000 ];
		//イン秒数
		this.in_time_num = 0;
		this.in_time_array = [ 0, 2000, 1500, 1000 ];
		//アウト秒数
		this.out_time_num = 1000;
		
		//メインループリスナー
		this.roop_lis = null;
		
		//ポップアップ画面
		this.popup_mc.mouseEnabled = true;
		this.popup_mc.cursor = "default";
		//ゲームオーバー
		this.popup_mc.game_over_mc.visible = false;
		
		//ボタン動作
		this.btn_click_func = function( btn_mc ) {
			//console.log( btn_mc.name );
			if ( btn_mc.parent.Act_Btn ) {
				btn_mc.parent.Act_Btn.mouseEnabled = true;
				btn_mc.parent.Act_Btn.gotoAndStop( 0 );
			};
			btn_mc.mouseEnabled = false;
			btn_mc.gotoAndStop( 1 );
			btn_mc.parent.Act_Btn = btn_mc;
			this.activeData_obj[ btn_mc.parent.category ] = btn_mc.name;
		};
		
		//閉じるボタン
		this.close_btn.on( "click", function() {
			window.close();
		} );
		
		//プレイボタン
		this.popup_mc.play_btn.on( "click", function() {
			//ゲーム開始
			root.game_init_func();
			root.game_start_func();
		} );
		
		//レベル切替ボタン
		this.popup_mc.level_1_btn.on( "click", function() { root.level_change_func( this ); } );
		this.popup_mc.level_2_btn.on( "click", function() { root.level_change_func( this ); } );
		this.popup_mc.level_3_btn.on( "click", function() { root.level_change_func( this ); } );
		
		this.popup_mc.level_1_text_mc.mouseEnabled = false;
		this.popup_mc.level_2_text_mc.mouseEnabled = false;
		this.popup_mc.level_3_text_mc.mouseEnabled = false;
		
		this.level_change_func = function( _mc ) {
			this.text_mc.level_txt.text = this.popup_mc.level_txt.text = String( _mc.name.split( "_" )[ 1 ] );
			this.active_obj.level = Number( _mc.name.split( "_" )[ 1 ] );
		};
		
		this.text_mc.level_txt.text = this.popup_mc.level_txt.text = this.active_obj.level = 1;
		
		//ゲーム初期化
		this.game_init_func = function() {
			//現在参照用と画面表示用テキスト
			this.text_mc.time_txt.text = this.active_obj.time = 0;
			this.text_mc.score_txt.text = this.active_obj.score = 0;
			//開始時間
			this.start_time_num = 0;
			//経過時間
			this.play_time_num = 0;
			//ライフ
			this.active_obj.life = 3;
			this.life_mc.life_1_mc.visible = true;
			this.life_mc.life_2_mc.visible = true;
			this.life_mc.life_3_mc.visible = true;
		};
		
		//ゲーム開始
		this.game_start_func = function() {
			//ポップアップ非表示
			createjs.Tween.get( this.popup_mc ).to( { alpha : 0.0 }, 500, createjs.Ease.linear ).call( function() {
				this.visible = false;
				//ゲーム再生中判定
				root.game_play_bool = true;
				//BGM再生
				root.bgm_start_func();
				//開始時間
				root.start_time_num = new Date();
				//メインループ再生
				root.roop_lis = createjs.Ticker.on( "tick", root.main_roop_func, root );
				//ペンギン開始
				root.wait_time_num = root.wait_time_array[ root.active_obj.level ];
				root.in_time_num = root.in_time_array[ root.active_obj.level ];
				for ( var i in root.game_mc ) {
					if ( i.indexOf( "hit_" ) != -1 ) {
						root.game_mc[ i ].start_func();
					};
				};
			} );
		};
		
		//ゲーム終了
		this.game_stop_func = function() {
			//ゲーム再生中判定
			this.game_play_bool = false;
			//BGM停止
			this.bgm_stop_func();
			//メインループ停止
			createjs.Ticker.off( "tick", root.roop_lis );
			//全アニメ削除
			createjs.Tween.removeAllTweens();
			//ペンギン終了
			for ( var i in root.game_mc ) {
				if ( i.indexOf( "hit_" ) != -1 ) {
					root.game_mc[ i ].stop_func();
				};
			};
			//ポップアップ表示
			this.popup_mc.visible = true;
			createjs.Tween.get( this.popup_mc ).to( { alpha : 1.0 }, 500, createjs.Ease.linear ).call( function() {
				//ゲームオーバー
				root.popup_mc.game_over_mc.visible = true;
				//ゲームオーバー効果音
				createjs.Sound.play( "error" );
				setTimeout( function() {
					createjs.Sound.play( "gameover" );
				}, 1000 );
			} );
		};
		
		//メインループ
		this.main_roop_func = function( event ) {
			//console.log( this );
			//経過時間
			this.play_time_num = Math.floor( ( new Date() - this.start_time_num ) / 1000 );
			this.text_mc.time_txt.text = String( this.play_time_num );
		};
		
		//BGM設定
		this.bgm_id = 0;
		this.sound_time_array = [ 0, 1000, 500, 250 ];
		this.bgm_start_func = function() {
			createjs.Sound.registerSound( "sounds/bgm.mp3", "bgm" );
			createjs.Sound.registerSound( "sounds/jump1.mp3", "jump1" );
			createjs.Sound.registerSound( "sounds/jump2.mp3", "jump2" );
			createjs.Sound.registerSound( "sounds/touch.mp3", "touch" );
			createjs.Sound.registerSound( "sounds/hit.mp3", "hit" );
			createjs.Sound.registerSound( "sounds/score.mp3", "score" );
			createjs.Sound.registerSound( "sounds/error.mp3", "error" );
			createjs.Sound.registerSound( "sounds/gameover.mp3", "gameover" );
			clearInterval( this.bgm_id );
			this.bgm_id = setInterval( function() {
				createjs.Sound.play( "bgm" );
			}, this.sound_time_array[ this.active_obj.level ] );
		};
		this.bgm_stop_func = function() {
			createjs.Sound.stop( "bgm" );
			clearInterval( this.bgm_id );
		};
		//エントリーポイント
		function entry_point_func( event ) {
			createjs.Ticker.removeEventListener( "tick", entry_point_func );
			//リクエストアニメーションフレームレート
			createjs.Ticker.useRAF = true;
			createjs.Ticker.timingMode = createjs.Ticker.RAF;
			//ゲーム初期化
			root.game_init_func();
		};
		
		//初回実行
		createjs.Ticker.addEventListener( "tick", entry_point_func );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// img
	this.instance = new lib.spacer();
	this.instance.parent = this;
	this.instance.setTransform(-100,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(2,1,1).moveTo(-160,-240).lineTo(160,-240).lineTo(160,240).lineTo(-160,240).closePath();
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// popup_mc
	this.popup_mc = new lib.popup_mc();
	this.popup_mc.name = "popup_mc";
	this.popup_mc.parent = this;
	this.popup_mc.setTransform(0,60);

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// life_mc
	this.life_mc = new lib.life_mc();
	this.life_mc.name = "life_mc";
	this.life_mc.parent = this;
	this.life_mc.setTransform(118.3,84.2,1,1,0,0,0,18.3,14.2);

	this.timeline.addTween(cjs.Tween.get(this.life_mc).wait(1));

	// text_mc
	this.text_mc = new lib.text_mc();
	this.text_mc.name = "text_mc";
	this.text_mc.parent = this;
	this.text_mc.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.text_mc).wait(1));

	// game_mc
	this.game_mc = new lib.game_mc();
	this.game_mc.name = "game_mc";
	this.game_mc.parent = this;
	this.game_mc.setTransform(0,60);

	this.timeline.addTween(cjs.Tween.get(this.game_mc).wait(1));

	// close_btn
	this.close_btn = new lib.close_btn();
	this.close_btn.name = "close_btn";
	this.close_btn.parent = this;
	this.close_btn.setTransform(295.05,5.05,0.6666,0.6666,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 2, false, new lib.close_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.close_btn).wait(1));

	// head
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF9900").beginStroke().moveTo(-1.2,4.9).curveTo(-1.7,4.4,-1.7,3.7).curveTo(-1.7,3,-1.2,2.5).curveTo(-0.7,2,0,2).curveTo(0.7,2,1.2,2.5).curveTo(1.7,3,1.7,3.7).curveTo(1.7,4.4,1.2,4.9).curveTo(0.7,5.4,-0,5.4).curveTo(-0.7,5.4,-1.2,4.9).closePath().moveTo(-0.9,0.1).curveTo(-1.3,-0.7,-1.6,-1.5).curveTo(-1.8,-2.4,-1.8,-3.1).curveTo(-1.8,-4,-1.4,-4.6).curveTo(-0.9,-5.4,-0,-5.4).curveTo(0.7,-5.4,1.2,-4.9).curveTo(1.8,-4.2,1.8,-3).curveTo(1.8,-2.2,1.5,-1.3).curveTo(1.3,-0.4,0.8,0.3).curveTo(0.3,1.1,-0,1.1).curveTo(-0.3,1.1,-0.9,0.1).closePath();
	this.shape_1.setTransform(201.125,14.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FF9900").beginStroke().moveTo(-2.7,3.1).curveTo(-3.1,2.6,-3.5,1.9).curveTo(-4,1.1,-4,0).curveTo(-4,-1.3,-3.2,-2.3).curveTo(-2.5,-3.2,-1.5,-3.7).curveTo(-0.7,-4,0.3,-4).curveTo(1.7,-4,2.8,-3.1).curveTo(3.3,-2.7,3.6,-2.1).curveTo(4,-1.5,4,-0.9).curveTo(4,-0.4,3.8,0).curveTo(3.6,0.3,3.3,0.3).lineTo(-0.4,0.3).curveTo(-0.5,0.3,-0.5,0.3).curveTo(-0.6,0.3,-0.6,0.3).curveTo(-0.6,0.4,-0.6,0.4).curveTo(-0.7,0.4,-0.7,0.5).curveTo(-0.7,1,-0.1,1.5).curveTo(0.4,1.9,1.1,1.9).lineTo(1.9,1.8).curveTo(2.4,1.6,2.7,1.4).lineTo(3.1,1.3).curveTo(3.1,1.3,3.2,1.3).curveTo(3.2,1.3,3.3,1.3).curveTo(3.3,1.3,3.4,1.4).curveTo(3.4,1.4,3.5,1.5).curveTo(3.7,1.8,3.7,2).curveTo(3.7,2.6,3,3.1).curveTo(1.7,4,0.1,4).curveTo(-1.5,4,-2.7,3.1).closePath().moveTo(-0.5,-2.2).curveTo(-0.7,-1.9,-0.7,-1.6).lineTo(-0.6,-1.2).lineTo(-0.2,-1.1).lineTo(0.6,-1.1).curveTo(1.1,-1.2,1.1,-1.6).curveTo(1.1,-2,0.8,-2.3).curveTo(0.6,-2.6,0.2,-2.6).curveTo(-0.3,-2.6,-0.5,-2.2).closePath();
	this.shape_2.setTransform(190.4,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FF9900").beginStroke().moveTo(4.1,5.5).curveTo(2.7,5.5,2.1,5.4).curveTo(1.4,5.1,1.4,4.6).lineTo(1.5,4.3).lineTo(2,3.8).curveTo(2.2,3.7,2.2,3.3).lineTo(2.3,1.7).lineTo(2.3,0.8).curveTo(2.3,0.7,2.2,0.7).curveTo(2.2,0.7,2.2,0.6).curveTo(2.1,0.6,2.1,0.6).curveTo(2.1,0.6,2,0.6).curveTo(1.8,0.6,1.6,0.9).lineTo(1,2.1).lineTo(0,4.2).lineTo(-0.4,4.9).lineTo(-0.7,5.1).curveTo(-0.7,5.1,-0.8,5.1).curveTo(-0.8,5.1,-0.9,5.1).curveTo(-0.9,5,-0.9,5).curveTo(-0.9,5,-1,4.9).lineTo(-1.4,4.3).lineTo(-1.9,3.3).lineTo(-2.9,0.9).curveTo(-3.1,0.4,-3.4,0.4).curveTo(-3.6,0.4,-3.6,0.9).lineTo(-3.7,2.6).lineTo(-3.6,3.6).lineTo(-3.5,3.9).lineTo(-3,4.2).curveTo(-2.7,4.3,-2.7,4.6).curveTo(-2.7,5.5,-5,5.5).curveTo(-6.9,5.5,-6.9,4.6).lineTo(-6.8,4.4).lineTo(-6.3,4).curveTo(-6.2,4,-6.2,4).curveTo(-6.1,4,-6.1,3.9).curveTo(-6,3.9,-6,3.8).curveTo(-5.9,3.8,-5.9,3.7).lineTo(-5.8,2.9).lineTo(-5.6,0.9).lineTo(-5.6,-1.6).curveTo(-5.6,-2.9,-5.8,-3.3).lineTo(-5.9,-3.5).lineTo(-6.3,-3.7).curveTo(-6.8,-4,-6.8,-4.4).curveTo(-6.8,-4.7,-6.6,-4.9).curveTo(-6.4,-5.1,-6.1,-5.3).lineTo(-5.1,-5.4).lineTo(-4.2,-5.5).curveTo(-3.2,-5.5,-2.8,-5.3).lineTo(-2.4,-5.1).lineTo(-2.1,-4.5).lineTo(-0.5,-1.6).lineTo(-0.1,-0.9).lineTo(0.2,-0.9).lineTo(0.5,-0.9).lineTo(0.7,-1.4).lineTo(1.8,-3.5).lineTo(2.1,-4.1).curveTo(2.5,-4.9,2.9,-5.2).curveTo(3.3,-5.4,4.6,-5.4).curveTo(6.8,-5.5,6.8,-4.5).lineTo(6.7,-4.1).lineTo(6.4,-3.7).curveTo(6,-3.5,5.9,-3).curveTo(5.7,-1.9,5.7,-0.3).curveTo(5.7,1.6,5.9,3.1).lineTo(6.1,3.6).lineTo(6.6,4).curveTo(6.9,4.3,6.9,4.5).curveTo(6.9,5.1,6.1,5.3).lineTo(5.3,5.5).lineTo(4.1,5.5).closePath();
	this.shape_3.setTransform(179.075,14.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FF9900").beginStroke().moveTo(0.5,4.6).lineTo(0.5,4.4).lineTo(0.8,4.1).curveTo(1.1,3.6,1.1,1.9).curveTo(1.1,0.8,0.9,0.4).curveTo(0.6,-0.2,-0,-0.2).curveTo(-0.5,-0.2,-0.7,0).curveTo(-0.9,0.3,-0.9,1).lineTo(-0.9,2.5).lineTo(-0.8,3.6).curveTo(-0.8,3.8,-0.4,4.2).curveTo(-0.4,4.2,-0.4,4.2).curveTo(-0.3,4.3,-0.3,4.3).curveTo(-0.3,4.4,-0.3,4.4).curveTo(-0.3,4.5,-0.3,4.5).curveTo(-0.3,5.4,-2.6,5.4).curveTo(-5.3,5.4,-5.3,4.5).lineTo(-5.2,4.2).lineTo(-4.8,3.8).curveTo(-4.5,3.6,-4.3,2.7).lineTo(-4.2,-0.4).lineTo(-4.3,-2.7).lineTo(-4.4,-3).lineTo(-4.8,-3.3).curveTo(-5.2,-3.5,-5.2,-3.8).curveTo(-5.2,-4.3,-4.9,-4.5).curveTo(-4.5,-4.8,-3.5,-5.1).curveTo(-2.1,-5.4,-1.2,-5.4).curveTo(-0.8,-5.4,-0.8,-5.1).lineTo(-0.9,-1.8).curveTo(-0.9,-1.1,-0.5,-1.1).curveTo(-0.5,-1.1,-0.4,-1.2).curveTo(-0.4,-1.2,-0.3,-1.2).curveTo(-0.3,-1.3,-0.3,-1.3).curveTo(-0.2,-1.4,-0.2,-1.5).curveTo(0.6,-2.5,1.9,-2.6).curveTo(3.1,-2.5,3.8,-1.8).curveTo(4.2,-1.5,4.3,-1).lineTo(4.5,0.3).lineTo(4.5,3.2).lineTo(4.6,3.7).lineTo(5,4.2).curveTo(5.1,4.2,5.1,4.2).curveTo(5.2,4.3,5.2,4.3).curveTo(5.2,4.4,5.3,4.4).curveTo(5.3,4.5,5.3,4.5).curveTo(5.3,5.4,2.7,5.4).curveTo(0.5,5.4,0.5,4.6).closePath();
	this.shape_4.setTransform(162.575,14.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FF9900").beginStroke().moveTo(-2.5,3.1).curveTo(-4,1.9,-4,0).curveTo(-4,-1.7,-2.6,-2.8).curveTo(-1.3,-4,0.5,-4).curveTo(1.9,-4,3,-3.3).curveTo(4,-2.6,4,-1.7).curveTo(4,-1,3.5,-0.5).curveTo(3.1,-0.1,2.5,-0.1).curveTo(1.8,-0.2,1.5,-0.6).lineTo(1.2,-1.3).curveTo(1,-2,0.4,-2).curveTo(-0,-2,-0.3,-1.7).curveTo(-0.6,-1.3,-0.6,-0.7).curveTo(-0.6,0.2,0,0.9).curveTo(0.6,1.6,1.4,1.6).lineTo(2.1,1.5).lineTo(2.8,1.2).lineTo(3,1.1).curveTo(3.3,1.1,3.5,1.4).curveTo(3.7,1.6,3.7,1.9).curveTo(3.7,2.3,3.4,2.7).curveTo(3.1,3.1,2.6,3.4).curveTo(1.6,4,0.2,4).curveTo(-1.4,4,-2.5,3.1).closePath();
	this.shape_5.setTransform(152.975,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FF9900").beginStroke().moveTo(1.2,3.9).curveTo(1.2,3.9,1.2,3.8).curveTo(1.1,3.8,1.1,3.8).curveTo(1.1,3.7,1.1,3.7).curveTo(1,3.6,1,3.5).curveTo(1,3.1,0.7,3.1).lineTo(0.6,3.1).lineTo(0.1,3.4).curveTo(-0.7,4,-1.6,4).curveTo(-3.1,4,-3.7,3.1).curveTo(-4.2,2.4,-4.2,0.7).lineTo(-4.2,-0.4).lineTo(-4.2,-0.8).curveTo(-4.2,-1.5,-4.4,-1.8).curveTo(-4.5,-2.1,-4.8,-2.3).lineTo(-5.2,-2.6).lineTo(-5.3,-2.8).curveTo(-5.3,-3.4,-4.4,-3.6).curveTo(-2.8,-4,-1.3,-3.9).curveTo(-0.8,-3.9,-0.8,-3.6).lineTo(-0.8,0.7).curveTo(-0.8,2,0.1,2).lineTo(0.5,1.9).lineTo(0.8,1.6).curveTo(1,1.2,1,-0.1).lineTo(0.9,-1.8).lineTo(0.8,-2.1).lineTo(0.5,-2.3).curveTo(0,-2.5,0,-2.9).curveTo(0,-3.4,0.8,-3.6).curveTo(2.3,-3.9,3.7,-3.9).curveTo(4.5,-3.9,4.5,-3.1).lineTo(4.5,-2.8).lineTo(4.4,-1.8).lineTo(4.4,1.6).curveTo(4.4,1.9,4.9,2.1).curveTo(5.3,2.3,5.3,2.6).curveTo(5.3,3.4,3.6,3.7).curveTo(2.6,3.9,1.7,4).lineTo(1.2,3.9).closePath();
	this.shape_6.setTransform(143.325,15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FF9900").beginStroke().moveTo(-3.4,2.9).curveTo(-4.5,1.9,-4.5,0.2).curveTo(-4.6,-1.6,-3.2,-2.8).curveTo(-1.7,-4,0.3,-4).curveTo(1.7,-4,2.8,-3.2).curveTo(3.6,-2.7,4.1,-1.9).curveTo(4.5,-0.9,4.6,0).curveTo(4.6,1.7,3,2.9).curveTo(1.5,4,-0.4,4).curveTo(-2.3,4,-3.4,2.9).closePath().moveTo(-0.8,-2).curveTo(-1,-1.7,-1,-1.2).lineTo(-0.8,0).curveTo(-0.7,0.8,-0.5,1.5).curveTo(-0.2,2.1,0.3,2.1).curveTo(1.1,2.1,1,1.2).curveTo(1,0.6,0.9,-0.3).curveTo(0.7,-1.1,0.4,-1.7).curveTo(0.1,-2.2,-0.3,-2.2).curveTo(-0.6,-2.2,-0.8,-2).closePath();
	this.shape_7.setTransform(133.05,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FF9900").beginStroke().moveTo(-2.8,5.2).curveTo(-3.5,5,-3.6,4.4).curveTo(-3.6,4,-3.2,3.9).lineTo(-2.7,3.7).curveTo(-2.4,3.6,-2.3,3.3).lineTo(-2.1,2.4).lineTo(-2,0.4).lineTo(-2,-1.9).lineTo(-2.1,-2.9).curveTo(-2.1,-3,-2.1,-3.1).curveTo(-2.1,-3.1,-2.2,-3.2).curveTo(-2.2,-3.2,-2.3,-3.2).curveTo(-2.3,-3.2,-2.4,-3.2).curveTo(-2.7,-3.2,-3,-2.8).curveTo(-3.5,-2,-3.9,-1.7).curveTo(-4.3,-1.4,-4.7,-1.4).curveTo(-5,-1.4,-5.4,-1.7).curveTo(-5.6,-2.1,-5.6,-2.5).curveTo(-5.6,-3,-5.4,-3.6).lineTo(-4.8,-4.7).curveTo(-4.2,-5.5,-3.6,-5.5).lineTo(-3.2,-5.4).lineTo(-2.6,-5.3).lineTo(-2,-5.3).lineTo(2.2,-5.3).lineTo(3.4,-5.5).lineTo(3.8,-5.5).curveTo(4.4,-5.5,5.1,-4.6).curveTo(5.6,-3.7,5.6,-2.7).curveTo(5.6,-2,5.2,-1.7).curveTo(4.9,-1.4,4.4,-1.4).curveTo(4.1,-1.4,3.7,-1.7).curveTo(3.4,-1.9,3.2,-2.4).lineTo(2.7,-3.1).curveTo(2.7,-3.1,2.7,-3.1).curveTo(2.6,-3.2,2.6,-3.2).curveTo(2.5,-3.2,2.5,-3.2).curveTo(2.4,-3.2,2.4,-3.2).curveTo(2.3,-3.2,2.2,-3.2).curveTo(2.2,-3.2,2.1,-3.2).curveTo(2.1,-3.1,2,-3.1).curveTo(2,-3,1.9,-3).lineTo(1.8,-2.2).lineTo(1.8,2.2).lineTo(1.9,3.2).curveTo(2.1,3.5,2.5,3.6).lineTo(3.1,4).curveTo(3.1,4,3.2,4.1).curveTo(3.2,4.1,3.2,4.2).curveTo(3.2,4.2,3.2,4.3).curveTo(3.3,4.3,3.3,4.4).curveTo(3.3,5,2.4,5.3).curveTo(1.7,5.5,0.1,5.5).curveTo(-1.8,5.5,-2.8,5.2).closePath();
	this.shape_8.setTransform(122.65,14.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(-160,15).lineTo(-160,-15).lineTo(160,-15).lineTo(160,15).closePath();
	this.shape_9.setTransform(159.994,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// foot
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FF9900").beginStroke().moveTo(-2.7,2.6).curveTo(-3.4,1.6,-3.4,0).curveTo(-3.4,-1.8,-2.5,-2.8).curveTo(-1.5,-3.8,-0.1,-3.8).curveTo(1.6,-3.8,2.5,-2.7).curveTo(3.4,-1.7,3.4,0.5).lineTo(-1.5,0.5).curveTo(-1.4,1.4,-0.9,1.9).curveTo(-0.5,2.4,0.1,2.4).curveTo(0.6,2.4,0.9,2.1).curveTo(1.2,1.9,1.3,1.3).lineTo(3.3,1.6).curveTo(2.9,2.7,2.1,3.2).curveTo(1.3,3.8,0.1,3.8).curveTo(-1.8,3.8,-2.7,2.6).closePath().moveTo(-1,-1.9).curveTo(-1.4,-1.4,-1.4,-0.6).lineTo(1.5,-0.6).curveTo(1.4,-1.5,1,-1.9).curveTo(0.6,-2.3,0,-2.3).curveTo(-0.6,-2.3,-1,-1.9).closePath();
	this.shape_10.setTransform(207.85,466.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FF9900").beginStroke().moveTo(-1.3,5.1).lineTo(-1.3,-0.7).lineTo(-2.4,-0.7).lineTo(-2.4,-2.1).lineTo(-1.3,-2.1).lineTo(-1.3,-2.7).curveTo(-1.3,-3.6,-1.2,-4).curveTo(-1,-4.5,-0.4,-4.8).curveTo(0.1,-5.1,0.8,-5.1).curveTo(1.7,-5.1,2.4,-4.8).lineTo(2.2,-3.5).lineTo(1.4,-3.6).curveTo(0.9,-3.6,0.7,-3.4).curveTo(0.6,-3.2,0.6,-2.7).lineTo(0.6,-2.1).lineTo(2,-2.1).lineTo(2,-0.7).lineTo(0.6,-0.7).lineTo(0.6,5.1).closePath();
	this.shape_11.setTransform(201.95,464.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FF9900").beginStroke().moveTo(-2.8,3.2).curveTo(-3.4,2.6,-3.4,1.6).curveTo(-3.4,1,-3.1,0.5).curveTo(-2.8,0.1,-2.3,-0.2).curveTo(-1.7,-0.4,-0.8,-0.6).curveTo(0.6,-0.9,1.1,-1.1).lineTo(1.1,-1.3).curveTo(1.1,-1.9,0.8,-2.1).curveTo(0.6,-2.3,-0.2,-2.3).curveTo(-0.7,-2.3,-1,-2.1).curveTo(-1.3,-1.9,-1.4,-1.4).lineTo(-3.2,-1.7).curveTo(-2.9,-2.8,-2.2,-3.3).curveTo(-1.4,-3.8,-0.1,-3.8).curveTo(1.3,-3.8,1.8,-3.5).curveTo(2.5,-3.2,2.7,-2.7).curveTo(3,-2.3,3,-1).lineTo(3,1.2).lineTo(3.1,2.7).lineTo(3.4,3.6).lineTo(1.5,3.6).lineTo(1.4,3.1).lineTo(1.3,2.8).curveTo(0.7,3.3,0.2,3.5).curveTo(-0.4,3.8,-1,3.8).curveTo(-2.1,3.8,-2.8,3.2).closePath().moveTo(-0.1,0.4).lineTo(-1.1,0.8).curveTo(-1.5,1,-1.5,1.4).curveTo(-1.5,1.8,-1.2,2.1).curveTo(-0.9,2.4,-0.4,2.4).curveTo(0.1,2.4,0.6,2.1).curveTo(1,1.8,1,1.5).lineTo(1.1,0.5).lineTo(1.1,0.1).lineTo(-0.1,0.4).closePath();
	this.shape_12.setTransform(195.45,466.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FF9900").beginStroke().moveTo(-2.5,2.8).curveTo(-3.4,1.8,-3.4,0).curveTo(-3.4,-1.8,-2.5,-2.8).curveTo(-1.5,-3.8,0.1,-3.8).curveTo(1.4,-3.8,2.2,-3.2).curveTo(3,-2.7,3.3,-1.5).lineTo(1.4,-1.1).curveTo(1.3,-1.7,1,-2).curveTo(0.6,-2.3,0.1,-2.3).curveTo(-0.6,-2.3,-1,-1.8).curveTo(-1.5,-1.3,-1.5,-0.1).curveTo(-1.5,1.2,-1,1.7).curveTo(-0.6,2.2,0.1,2.2).curveTo(0.7,2.2,1,1.9).curveTo(1.4,1.6,1.5,0.8).lineTo(3.4,1.2).curveTo(3.1,2.5,2.3,3.1).curveTo(1.4,3.8,0,3.8).curveTo(-1.6,3.8,-2.5,2.8).closePath();
	this.shape_13.setTransform(187.775,466.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FF9900").beginStroke().moveTo(1.4,3.7).lineTo(1.4,-0).curveTo(1.4,-1.2,1.3,-1.5).curveTo(1.1,-1.8,0.8,-2.1).curveTo(0.6,-2.3,0.2,-2.3).curveTo(-0.3,-2.2,-0.7,-2).curveTo(-1.1,-1.7,-1.2,-1.3).curveTo(-1.4,-0.8,-1.4,0.4).lineTo(-1.4,3.7).lineTo(-3.3,3.7).lineTo(-3.3,-3.5).lineTo(-1.5,-3.5).lineTo(-1.5,-2.5).curveTo(-0.5,-3.7,0.8,-3.7).curveTo(1.5,-3.7,2,-3.5).curveTo(2.6,-3.2,2.8,-2.9).curveTo(3.1,-2.5,3.2,-2.1).lineTo(3.3,-0.8).lineTo(3.3,3.7).closePath();
	this.shape_14.setTransform(175.65,465.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FF9900").beginStroke().moveTo(-1,5).lineTo(-1,-2.2).lineTo(1,-2.2).lineTo(1,5).closePath().moveTo(-1,-3.2).lineTo(-1,-5).lineTo(1,-5).lineTo(1,-3.2).closePath();
	this.shape_15.setTransform(169.425,464.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FF9900").beginStroke().moveTo(-2.2,3.4).curveTo(-2.8,3,-3.1,2.5).curveTo(-3.3,1.9,-3.3,0.9).lineTo(-3.3,-3.7).lineTo(-1.4,-3.7).lineTo(-1.4,-0.4).curveTo(-1.4,1.1,-1.3,1.5).curveTo(-1.1,1.9,-0.8,2.1).curveTo(-0.6,2.3,-0.1,2.3).curveTo(0.4,2.2,0.7,2).curveTo(1.1,1.7,1.2,1.3).curveTo(1.4,0.9,1.4,-0.6).lineTo(1.4,-3.7).lineTo(3.3,-3.7).lineTo(3.3,3.5).lineTo(1.6,3.5).lineTo(1.6,2.4).curveTo(1.1,3,0.5,3.4).curveTo(-0.2,3.7,-0.8,3.7).curveTo(-1.6,3.7,-2.2,3.4).closePath();
	this.shape_16.setTransform(163.2,466.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FF9900").beginStroke().moveTo(-2.5,4.5).curveTo(-3.3,3.9,-3.3,2.9).lineTo(-3.3,2.7).lineTo(-1.1,3).curveTo(-1,3.4,-0.8,3.5).curveTo(-0.6,3.7,0.1,3.7).curveTo(0.8,3.7,1.1,3.5).curveTo(1.4,3.3,1.5,3).curveTo(1.7,2.8,1.7,2.1).lineTo(1.7,1).curveTo(0.7,2.2,-0.6,2.2).curveTo(-2,2.2,-2.8,1).curveTo(-3.6,0,-3.5,-1.4).curveTo(-3.6,-3.3,-2.6,-4.2).curveTo(-1.8,-5.2,-0.5,-5.2).curveTo(0.9,-5.2,1.8,-4).lineTo(1.8,-5).lineTo(3.6,-5).lineTo(3.6,1.5).curveTo(3.6,2.8,3.3,3.4).curveTo(3.1,4,2.8,4.4).curveTo(2.3,4.8,1.8,5).curveTo(1.1,5.2,0.1,5.2).curveTo(-1.7,5.2,-2.5,4.5).closePath().moveTo(-1.1,-3.2).curveTo(-1.5,-2.7,-1.6,-1.6).curveTo(-1.5,-0.4,-1.1,0.1).curveTo(-0.7,0.7,-0,0.7).curveTo(0.7,0.7,1.2,0.1).curveTo(1.7,-0.4,1.7,-1.5).curveTo(1.7,-2.6,1.2,-3.2).curveTo(0.7,-3.7,0.1,-3.7).curveTo(-0.7,-3.7,-1.1,-3.2).closePath();
	this.shape_17.setTransform(154.55,467.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FF9900").beginStroke().moveTo(1.4,3.7).lineTo(1.4,-0).curveTo(1.4,-1.2,1.3,-1.5).curveTo(1.2,-1.8,0.8,-2.1).curveTo(0.6,-2.3,0.2,-2.3).curveTo(-0.3,-2.2,-0.7,-2).curveTo(-1.1,-1.7,-1.3,-1.3).curveTo(-1.4,-0.8,-1.4,0.4).lineTo(-1.4,3.7).lineTo(-3.3,3.7).lineTo(-3.3,-3.5).lineTo(-1.5,-3.5).lineTo(-1.5,-2.5).curveTo(-0.6,-3.7,0.8,-3.7).curveTo(1.5,-3.7,2.1,-3.5).curveTo(2.5,-3.2,2.9,-2.9).curveTo(3.1,-2.5,3.2,-2.1).lineTo(3.3,-0.8).lineTo(3.3,3.7).closePath();
	this.shape_18.setTransform(146.25,465.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FF9900").beginStroke().moveTo(-2.7,2.6).curveTo(-3.4,1.6,-3.4,0).curveTo(-3.4,-1.8,-2.5,-2.8).curveTo(-1.5,-3.8,-0.1,-3.8).curveTo(1.5,-3.8,2.5,-2.7).curveTo(3.4,-1.7,3.4,0.5).lineTo(-1.5,0.5).curveTo(-1.4,1.4,-0.9,1.9).curveTo(-0.6,2.4,0.1,2.4).curveTo(0.6,2.4,0.9,2.1).curveTo(1.2,1.9,1.3,1.3).lineTo(3.2,1.6).curveTo(2.9,2.7,2.1,3.2).curveTo(1.3,3.8,0.1,3.8).curveTo(-1.8,3.8,-2.7,2.6).closePath().moveTo(-1,-1.9).curveTo(-1.4,-1.4,-1.4,-0.6).lineTo(1.4,-0.6).curveTo(1.4,-1.5,1.1,-1.9).curveTo(0.6,-2.3,0.1,-2.3).curveTo(-0.6,-2.3,-1,-1.9).closePath();
	this.shape_19.setTransform(138,466.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FF9900").beginStroke().moveTo(-3.5,5.1).lineTo(-3.5,-4.9).lineTo(-1.7,-4.9).lineTo(-1.7,-3.9).curveTo(-1.4,-4.4,-0.8,-4.8).curveTo(-0.2,-5.1,0.5,-5.1).curveTo(1.8,-5.1,2.7,-4.1).curveTo(3.5,-3.1,3.6,-1.3).curveTo(3.5,0.5,2.7,1.5).curveTo(1.8,2.5,0.5,2.5).curveTo(-0.1,2.5,-0.6,2.2).curveTo(-1.1,2,-1.6,1.4).lineTo(-1.6,5.1).closePath().moveTo(-1.2,-3).curveTo(-1.7,-2.5,-1.6,-1.4).curveTo(-1.6,-0.2,-1.2,0.4).curveTo(-0.7,1,-0,1).curveTo(0.7,1,1.2,0.4).curveTo(1.6,-0.1,1.6,-1.3).curveTo(1.6,-2.5,1.1,-3).curveTo(0.7,-3.6,-0,-3.6).curveTo(-0.7,-3.6,-1.2,-3).closePath();
	this.shape_20.setTransform(130.15,467.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FF9900").beginStroke().moveTo(-3.3,5.8).curveTo(-5,5,-5.8,3.6).curveTo(-6.6,2.1,-6.6,0.3).curveTo(-6.6,-1.6,-5.7,-3.3).curveTo(-4.7,-4.9,-3.2,-5.7).curveTo(-1.6,-6.6,0.4,-6.6).curveTo(2.2,-6.6,3.5,-5.9).curveTo(4.8,-5.2,5.6,-4).curveTo(6.2,-2.8,6.2,-1.3).curveTo(6.2,0.4,5.1,1.8).curveTo(3.8,3.6,1.7,3.6).curveTo(1.2,3.6,0.8,3.4).curveTo(0.5,3.2,0.5,2.8).curveTo(-0.3,3.6,-1.4,3.6).curveTo(-2.5,3.6,-3.2,2.8).curveTo(-4,2.1,-4,0.8).curveTo(-4,-0.8,-3.1,-2.2).curveTo(-2,-3.8,-0.3,-3.8).curveTo(0.9,-3.8,1.5,-2.9).lineTo(1.6,-3.6).lineTo(3.4,-3.6).lineTo(2.4,1.3).lineTo(2.3,1.9).lineTo(2.4,2.1).lineTo(2.6,2.2).curveTo(3,2.2,3.4,1.8).curveTo(4.2,1.3,4.6,0.4).curveTo(5,-0.4,5,-1.4).curveTo(5,-3.1,3.8,-4.2).curveTo(2.6,-5.3,0.4,-5.3).curveTo(-1.5,-5.3,-2.8,-4.6).curveTo(-4.1,-3.8,-4.7,-2.4).curveTo(-5.4,-1.1,-5.4,0.4).curveTo(-5.4,1.9,-4.6,3).curveTo(-3.9,4.2,-2.5,4.8).curveTo(-1.2,5.3,0.5,5.3).curveTo(2.1,5.3,3.2,4.9).curveTo(4.5,4.4,5.1,3.5).lineTo(6.6,3.5).curveTo(5.9,4.9,4.5,5.7).curveTo(2.9,6.6,0.6,6.6).curveTo(-1.7,6.6,-3.3,5.8).closePath().moveTo(-1.3,-2.1).curveTo(-1.7,-1.6,-2,-0.8).curveTo(-2.3,0,-2.2,0.7).curveTo(-2.2,1.6,-1.9,2).curveTo(-1.6,2.4,-1,2.4).curveTo(-0.7,2.4,-0.3,2.2).lineTo(0.3,1.8).curveTo(0.6,1.3,0.8,0.5).curveTo(1.1,-0.3,1.1,-1).curveTo(1.1,-1.7,0.7,-2.1).curveTo(0.4,-2.6,-0.2,-2.6).curveTo(-0.8,-2.6,-1.3,-2.1).closePath();
	this.shape_21.setTransform(115.1,466.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000000").beginStroke().moveTo(-160,15).lineTo(-160,-15).lineTo(160,-15).lineTo(160,15).closePath();
	this.shape_22.setTransform(160,465);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// back
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-160,240).lineTo(-160,-240).lineTo(160,-240).lineTo(160,240).closePath();
	this.shape_23.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60,25.6,261,455.4);
// library properties:
lib.properties = {
	id: 'AD48DCE78233C84B8D21EE6D0024CD62',
	width: 320,
	height: 480,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./images/spacer.png", id:"spacer"},
		{src:"./sounds/gamestart.mp3", id:"gamestart"},
		{src:"./sounds/level.mp3", id:"level"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AD48DCE78233C84B8D21EE6D0024CD62'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;