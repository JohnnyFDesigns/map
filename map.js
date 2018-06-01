(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"map_atlas_", frames: [[0,0,812,183],[814,0,160,216],[0,185,39,5]]}
];


// symbols:



(lib.map_1 = function() {
	this.spriteSheet = ss["map_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pin_2x = function() {
	this.spriteSheet = ss["map_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pin_shadow = function() {
	this.spriteSheet = ss["map_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AobroIQ3AAIAAXRIw3AAg");
	this.shape.setTransform(54,74.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AobLpIAA3RIQ3AAIAAXRg");
	this.shape_1.setTransform(54,74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,110,151), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pin_2x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,59.3,80), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pin_2x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,80,108), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4wUjMAAAgpFMAxhAAAMAAAApFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-158.4,-131.5,317,263), null);


// stage content:
(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_3.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.adobe.com/3", "_blank");
		}
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.adobe.com/2", "_blank");
		}
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.adobe.com/1", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80));

	// Pin 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(373,133,1,1,0,0,0,40,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:136.6},0).wait(1).to({y:140.2},0).wait(1).to({y:143.8},0).wait(1).to({y:147.4},0).wait(1).to({y:151},0).wait(1).to({scaleY:0.93,x:372.8,y:154.5},0).wait(1).to({scaleY:0.86,x:372.6,y:158},0).wait(1).to({scaleY:0.93,y:155.4},0).wait(1).to({scaleY:1,y:152.8},0).wait(1).to({x:372.7,y:149.5},0).wait(1).to({y:146.2},0).wait(1).to({x:372.8,y:142.9},0).wait(1).to({x:372.9,y:139.6},0).wait(1).to({y:136.3},0).wait(1).to({x:373,y:133},0).wait(2).to({y:136.6},0).wait(1).to({y:140.2},0).wait(1).to({y:143.8},0).wait(1).to({y:147.4},0).wait(1).to({y:151},0).wait(1).to({scaleY:0.93,x:372.8,y:154.5},0).wait(1).to({scaleY:0.86,x:372.6,y:158},0).wait(1).to({scaleY:0.93,y:155.4},0).wait(1).to({scaleY:1,y:152.8},0).wait(1).to({x:372.7,y:149.5},0).wait(1).to({y:146.2},0).wait(1).to({x:372.8,y:142.9},0).wait(1).to({x:372.9,y:139.6},0).wait(1).to({y:136.3},0).wait(1).to({x:373,y:133},0).wait(2).to({y:136.6},0).wait(1).to({y:140.2},0).wait(1).to({y:143.8},0).wait(1).to({y:147.4},0).wait(1).to({y:151},0).wait(1).to({scaleY:0.93,x:372.8,y:154.5},0).wait(1).to({scaleY:0.86,x:372.6,y:158},0).wait(1).to({scaleY:0.93,y:155.4},0).wait(1).to({scaleY:1,y:152.8},0).wait(1).to({x:372.7,y:149.5},0).wait(1).to({y:146.2},0).wait(1).to({x:372.8,y:142.9},0).wait(1).to({x:372.9,y:139.6},0).wait(1).to({y:136.3},0).wait(1).to({x:373,y:133},0).wait(2).to({y:136.6},0).wait(1).to({y:140.2},0).wait(1).to({y:143.8},0).wait(1).to({y:147.4},0).wait(1).to({y:151},0).wait(1).to({scaleY:0.93,x:372.8,y:154.5},0).wait(1).to({scaleY:0.86,x:372.6,y:158},0).wait(1).to({scaleY:0.93,y:155.4},0).wait(1).to({scaleY:1,y:152.8},0).wait(1).to({x:372.7,y:149.5},0).wait(1).to({y:146.2},0).wait(1).to({x:372.8,y:142.9},0).wait(1).to({x:372.9,y:139.6},0).wait(1).to({y:136.3},0).wait(1).to({x:373,y:133},0).wait(2).to({y:136.6},0).wait(1).to({y:140.2},0).wait(1).to({y:143.8},0).wait(1).to({y:147.4},0).wait(1).to({y:151},0).wait(1).to({scaleY:0.93,x:372.8,y:154.5},0).wait(1).to({scaleY:0.86,x:372.6,y:158},0).wait(1).to({scaleY:0.93,y:155.4},0).wait(1).to({scaleY:1,y:152.8},0).wait(1).to({x:372.7,y:149.5},0).wait(1).to({y:146.2},0).wait(1).to({x:372.8,y:142.9},0).wait(1).to({x:372.9,y:139.6},0).wait(1).to({y:136.3},0).wait(1).to({x:373,y:133},0).wait(1));

	// Pin 1 shadow
	this.instance_1 = new lib.pin_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(355,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// Pin 2
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(141.6,125,1,1,0,0,0,29.6,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({y:126.5},0).wait(1).to({y:129.5},0).wait(1).to({y:132.5},0).wait(1).to({y:135.5},0).wait(1).to({y:138.5},0).wait(1).to({y:141.5},0).wait(1).to({y:144.5},0).wait(1).to({scaleY:0.93,x:141.4,y:148},0).wait(1).to({scaleY:0.86,x:141.2,y:151.5},0).wait(1).to({scaleY:0.93,y:148.9},0).wait(1).to({scaleY:1,y:146.3},0).wait(1).to({x:141.3,y:143.7},0).wait(1).to({y:141.1},0).wait(1).to({x:141.4,y:138.4},0).wait(1).to({y:135.8},0).wait(1).to({x:141.5,y:133.1},0).wait(1).to({x:141.6,y:126.5},0).wait(1).to({y:129.5},0).wait(1).to({y:132.5},0).wait(1).to({y:135.5},0).wait(1).to({y:138.5},0).wait(1).to({y:141.5},0).wait(1).to({y:144.5},0).wait(1).to({scaleY:0.93,x:141.4,y:148},0).wait(1).to({scaleY:0.86,x:141.2,y:151.5},0).wait(1).to({scaleY:0.93,y:148.9},0).wait(1).to({scaleY:1,y:146.3},0).wait(1).to({x:141.3,y:143.7},0).wait(1).to({y:141.1},0).wait(1).to({x:141.4,y:138.4},0).wait(1).to({y:135.8},0).wait(1).to({x:141.5,y:133.1},0).wait(1).to({x:141.6,y:126.5},0).wait(1).to({y:129.5},0).wait(1).to({y:132.5},0).wait(1).to({y:135.5},0).wait(1).to({y:138.5},0).wait(1).to({y:141.5},0).wait(1).to({y:144.5},0).wait(1).to({scaleY:0.93,x:141.4,y:148},0).wait(1).to({scaleY:0.86,x:141.2,y:151.5},0).wait(1).to({scaleY:0.93,y:148.9},0).wait(1).to({scaleY:1,y:146.3},0).wait(1).to({x:141.3,y:143.7},0).wait(1).to({y:141.1},0).wait(1).to({x:141.4,y:138.4},0).wait(1).to({y:135.8},0).wait(1).to({x:141.5,y:133.1},0).wait(1).to({x:141.6,y:126.5},0).wait(1).to({y:129.5},0).wait(1).to({y:132.5},0).wait(1).to({y:135.5},0).wait(1).to({y:138.5},0).wait(1).to({y:141.5},0).wait(1).to({y:144.5},0).wait(1).to({scaleY:0.93,x:141.4,y:148},0).wait(1).to({scaleY:0.86,x:141.2,y:151.5},0).wait(1).to({scaleY:0.93,y:148.9},0).wait(1).to({scaleY:1,y:146.3},0).wait(1).to({x:141.3,y:143.7},0).wait(1).to({y:141.1},0).wait(1).to({x:141.4,y:138.4},0).wait(1).to({y:135.8},0).wait(1).to({x:141.5,y:133.1},0).wait(1).to({x:141.6,y:126.5},0).wait(1).to({y:130.1},0).wait(1).to({y:133.7},0).wait(1).to({y:137.3},0).wait(1).to({y:140.9},0).wait(1).to({y:144.5},0).wait(1).to({scaleY:0.93,x:141.4,y:148},0).wait(1).to({scaleY:0.86,x:141.2,y:151.5},0).wait(1).to({scaleY:0.93,y:148.9},0).wait(1).to({scaleY:1,y:146.3},0).wait(1).to({x:141.3,y:143},0).wait(1).to({y:139.7},0).wait(1).to({x:141.4,y:136.4},0).wait(1).to({x:141.5,y:133.1},0).wait(1));

	// Pin 2 shadow
	this.instance_3 = new lib.pin_shadow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122,181);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// Pin 3
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(258.6,72.9,1,1,0,0,0,29.6,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({y:76.5},0).wait(1).to({y:80.1},0).wait(1).to({y:83.7},0).wait(1).to({y:87.3},0).wait(1).to({y:90.9},0).wait(1).to({scaleY:0.93,x:258.3,y:94.4},0).wait(1).to({scaleY:0.86,x:258.1,y:97.9},0).wait(1).to({scaleY:0.93,y:95.3},0).wait(1).to({scaleY:1,x:258.2,y:92.7},0).wait(1).to({y:89.4},0).wait(1).to({x:258.3,y:86.1},0).wait(1).to({x:258.4,y:82.8},0).wait(1).to({y:79.5},0).wait(1).to({x:258.5,y:76.2},0).wait(1).to({x:258.6,y:72.9},0).wait(2).to({y:76.5},0).wait(1).to({y:80.1},0).wait(1).to({y:83.7},0).wait(1).to({y:87.3},0).wait(1).to({y:90.9},0).wait(1).to({scaleY:0.93,x:258.3,y:94.4},0).wait(1).to({scaleY:0.86,x:258.1,y:97.9},0).wait(1).to({scaleY:0.93,y:95.3},0).wait(1).to({scaleY:1,x:258.2,y:92.7},0).wait(1).to({y:89.4},0).wait(1).to({x:258.3,y:86.1},0).wait(1).to({x:258.4,y:82.8},0).wait(1).to({y:79.5},0).wait(1).to({x:258.5,y:76.2},0).wait(1).to({x:258.6,y:72.9},0).wait(2).to({y:76.5},0).wait(1).to({y:80.1},0).wait(1).to({y:83.7},0).wait(1).to({y:87.3},0).wait(1).to({y:90.9},0).wait(1).to({scaleY:0.93,x:258.3,y:94.4},0).wait(1).to({scaleY:0.86,x:258.1,y:97.9},0).wait(1).to({scaleY:0.93,y:95.3},0).wait(1).to({scaleY:1,x:258.2,y:92.7},0).wait(1).to({y:89.4},0).wait(1).to({x:258.3,y:86.1},0).wait(1).to({x:258.4,y:82.8},0).wait(1).to({y:79.5},0).wait(1).to({x:258.5,y:76.2},0).wait(1).to({x:258.6,y:72.9},0).wait(2).to({y:76.5},0).wait(1).to({y:80.1},0).wait(1).to({y:83.7},0).wait(1).to({y:87.3},0).wait(1).to({y:90.9},0).wait(1).to({scaleY:0.93,x:258.3,y:94.4},0).wait(1).to({scaleY:0.86,x:258.1,y:97.9},0).wait(1).to({scaleY:0.93,y:95.3},0).wait(1).to({scaleY:1,x:258.2,y:92.7},0).wait(1).to({y:89.4},0).wait(1).to({x:258.3,y:86.1},0).wait(1).to({x:258.4,y:82.8},0).wait(1).to({y:79.5},0).wait(1).to({x:258.5,y:76.2},0).wait(1).to({x:258.6,y:72.9},0).wait(2).to({y:77.4},0).wait(1).to({y:81.9},0).wait(1).to({y:86.4},0).wait(1).to({y:90.9},0).wait(1).to({scaleY:0.86,x:258.1,y:97.9},0).wait(1).to({scaleY:0.93,y:95.3},0).wait(1).to({scaleY:1,x:258.2,y:92.7},0).wait(1).to({x:258.3,y:87.8},0).wait(1).to({x:258.4,y:82.8},0).wait(1).to({x:258.5,y:77.9},0).wait(1).to({x:258.6,y:72.9},0).wait(1));

	// Pin 3 shadow
	this.instance_5 = new lib.pin_shadow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(243,129,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// Pin 4
	this.instance_6 = new lib.Symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(489.6,101.9,1.097,1.093,0,0,0,29.7,40.1);
	this.instance_6.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-2,-2,63,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// Pin 4 shadow
	this.instance_7 = new lib.pin_shadow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(468,146,1.097,1.093);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// Pin 5
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(690.6,151.9,1.097,1.093,0,0,0,29.7,40.1);
	this.instance_8.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 0, 0, 0, 0)];
	this.instance_8.cache(-2,-2,63,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// Pin 5 shadow
	this.instance_9 = new lib.pin_shadow();
	this.instance_9.parent = this;
	this.instance_9.setTransform(669,196,1.097,1.093);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// Pin 6
	this.instance_10 = new lib.Symbol3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(585.7,105.6,0.812,0.812,0,0,0,29.7,40.1);
	this.instance_10.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 0, 0, 0, 0)];
	this.instance_10.cache(-2,-2,63,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// Pin 6 shadow
	this.instance_11 = new lib.pin_shadow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(570,138,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// Pin 7
	this.instance_12 = new lib.Symbol3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(535.7,154.6,0.812,0.812,0,0,0,29.7,40.1);
	this.instance_12.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-2,-2,63,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

	// Pin 7 shadow
	this.instance_13 = new lib.pin_shadow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(520,188,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80));

	// Map
	this.instance_14 = new lib.map_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80));

	// pin_3
	this.movieClip_3 = new lib.Symbol1();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.parent = this;
	this.movieClip_3.setTransform(142.6,137.6,0.344,0.475,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(80));

	// pin_2
	this.movieClip_2 = new lib.Symbol4();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(255.1,88.6,1,1,0,0,0,54,74.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(80));

	// pin_1
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(372.6,157.6,0.344,0.597,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(412.5,163.6,812,238.5);
// library properties:
lib.properties = {
	id: '37679E28A1224BAAB7D259BCF0389678',
	width: 825,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/map_atlas_.png?1527849904108", id:"map_atlas_"}
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
an.compositions['37679E28A1224BAAB7D259BCF0389678'] = {
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