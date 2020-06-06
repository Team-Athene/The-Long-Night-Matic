BasicGame.Quiz = function (game) {

	this.playButton = null;
	this.statButton = null;

};
BasicGame.Quiz.prototype = {

	create: function () {

		// this.add.sprite(0,0,'preloaderBackground');
		this.background = this.add.sprite(0, 0, 'quizBG');
		this.background.width = window.innerWidth
		this.background.height = window.innerHeight
		this.music = this.add.audio('got')
		this.music.loop = true
		this.music.autoplay = true
		if (this.sound.usingWebAudio && this.sound.context.state !== 'running') {
			this.input.onDown.addOnce(function () {
				this.sound.context.resume();
			}, this);
		}
		this.myJSON = this.cache.getJSON('quizJson')
		console.log("TCL: myJSON", myJSON)
		this.question = this.add.sprite(0, 0, 'question');
		this.question.width = window.innerWidth/1.2
		this.question.alignIn(this.world.bounds, Phaser.TOP_CENTER,0, -25);
		this.option1 = this.add.button(window.innerWidth/5.5, 100, 'option', this.optButton1, this);
		var option2 = this.add.button(0, 0, 'option', this.optButton2, this).alignTo(this.option1, Phaser.RIGHT_CENTER, 16);
		this.option3 = this.add.button(window.innerWidth/5.5, 155, 'option', this.optButton3, this);
		var option4 = this.add.button(0, 0, 'option', this.optButton4, this).alignTo(this.option3, Phaser.RIGHT_CENTER, 16);

		this.livesW = this.add.group();
		var x = 150; // use your values
		var y = window.innerHeight-50;

		for (var i = 0; i < 3; i++) {
		var LifeW = this.livesW.create(
			x - 100 + 50 * i,
			y,
			'lifeW'
		);
		LifeW.anchor.setTo(0.5, 0.5);
		}

		this.livesA = this.add.group();
		var p = window.innerWidth - 50; // use your values
		var q = window.innerHeight-50;

		for (var i = 0; i < 3; i++) {
		var LifeA = this.livesA.create(
			p - 100 + 50 * i,
			q,
			'lifeA'
		);
		LifeA.anchor.setTo(0.5, 0.5);
		}

        this.arya = this.add.sprite(window.innerWidth/2.3, window.innerHeight/2,'arya')
        var walk = this.arya.animations.add('walk',[0, 1, 2, 4, 2, 1], 4, false);
        this.arya.animations.play('walk', 1, true);

        this.whiteWalker = this.add.sprite(window.innerWidth/5, window.innerHeight/2,'whiteWalker')
        var walker = this.whiteWalker.animations.add('walker',[0, 1, 2, 4, 2, 1], 4, false);
		this.whiteWalker.animations.play('walker', 1, true);
		
// Callback
// hurtPlayer: function(player, enemy) {
//     console.log(this.hitCounter);
// //do this during overlap
//     this.isHit = true;
//     this.canShoot = false;
//     enemy.play('attacking');
//     player.play('hit');
//     var live;
//     live = this.lives.getFirstAlive();

//     if (live) {
//         live.kill();
//     }
//     this.livesCounter--;

//     if (this.livesCounter == 0) {
//         player.kill();
//         this.playerDies(); // Use your custom function when the player dies
//     }
// },

	},

	update: function () {

		//	Do some nice funky main menu effect here
		// var nums = [1,2,3,4,5,6,7,8,9,10],
		let ranNums = [],
        quizJson = this.myJSON,
        currentQues = {},
		i = this.myJSON.length,
		j = 0;

		while (i--) {
			j = Math.floor(Math.random() * (i+1));
			ranNums.push(myJSON[j]);
			currentQues = myJSON[j]
			quizJson.splice(j,1);
		}

	},
	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	},
	optButton1: function() {
		console.log('Option1');
	},
	optButton2: function() {
		console.log('Option2');
	},
	optButton3: function() {
		console.log('Option3');
	},
	optButton4: function() {
		console.log('Option4');
	}
};