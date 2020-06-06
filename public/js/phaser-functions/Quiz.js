BasicGame.Quiz = function (game) {

	this.playButton = null;
	this.statButton = null;
	this.aryaLife = 3;
	this.currentQues = null;
	this.walkerLife = 3;
	this.index = 0


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
		console.log("TCL: myJSON", this.myJSON)
		this.question = this.add.sprite(0, 0, 'question');
		this.question.width = window.innerWidth/1.2
		this.question.alignIn(this.world.bounds, Phaser.TOP_CENTER,0, -35);

		this.option1 = this.add.button(window.innerWidth/5.5, 110, 'option');
		this.option2 = this.add.button(0, 0, 'option').alignTo(this.option1, Phaser.RIGHT_CENTER, 16);
		this.option3 = this.add.button(window.innerWidth/5.5, 165, 'option');
		this.option4 = this.add.button(0, 0, 'option').alignTo(this.option3, Phaser.RIGHT_CENTER, 16);

		// this.option1.scale.setTo(window.innerWidth/4)
		this.option1.width = window.innerWidth/3.5
		this.option2.width = window.innerWidth/3.5
		this.option3.width = window.innerWidth/3.5
		this.option4.width = window.innerWidth/3.5


		// this.add.text(window.innerWidth/2.2, window.innerHeight/1.7, '123456', {fill : 'yellow'});




		this.quizJson = this.myJSON
		// let ranNums = [],
		// j = 0;
        // console.log("TCL: j", j)
		this.index = this.myJSON.length - 1,
        console.log("TCL: this.index", this.index)


		this.gameQuiz()
		// while (index--) {
		// }
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
//         live.destroy();
//     }
//     this.livesCounter--;

//     if (this.livesCounter == 0) {
//         player.destroy();
//         this.playerDies(); // Use your custom function when the player dies
//     }
// },

	},

	update: function () {

		//	Do some nice funky main menu effect here

		
	},
	random: function (index) {	
		j = Math.floor(Math.random() * (index+1));
		console.log("TCL: RANDOM j", j)
		// ranNums.push(this.myJSON[j]);
		this.currentQues = this.quizJson[j]
		console.log("TCL: currentQues", this.currentQues)
		this.quizJson.splice(j,1);
		return j
	},
    animateCharacter: function() {

		this.livesW = this.add.group();
		var x = 150; // use your values
		var y = window.innerHeight-50;

		for (var i = 0; i < this.walkerLife; i++) {
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

		for (var i = 0; i < this.aryaLife; i++) {
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
	},
	checkAnswer: function(button) {
		console.log("TCL: value", button.value)
		console.log("TCL: this.myJSON[button.j].ans", this.currentQues.ans)
		if(button.value ==  this.currentQues.ans) {
			console.log("Correct")
			this.walkerLife--;
			this.index--
			this.quesText.destroy()
			this.option1Text.destroy()
			this.option2Text.destroy()
			this.option3Text.destroy()
			this.option4Text.destroy()
			this.livesW.destroy();
			this.livesA.destroy();
			this.arya.destroy();
			this.whiteWalker.destroy();
			this.gameQuiz()
		}
		else {
			console.log("Wrong")
			this.aryaLife--;
			this.index--
			this.quesText.destroy()
			this.option1Text.destroy()
			this.option2Text.destroy()
			this.option3Text.destroy()
			this.option4Text.destroy()
			this.livesW.destroy();
			this.livesA.destroy();
			this.arya.destroy();
			this.whiteWalker.destroy();
			this.gameQuiz()
		}

	},
	gameQuiz: function(){
		this.animateCharacter()
		let j = this.random(this.index)
		console.log("TCL: j", j)
		this.option1.value = this.currentQues.a
		this.option1.j = j
		this.option1.inputEnabled = true;        
		this.option1.events.onInputDown.add(this.checkAnswer, this);
		this.option2.value = this.currentQues.b
		this.option2.j = j
		this.option2.inputEnabled = true;        
		this.option2.events.onInputDown.add(this.checkAnswer, this);
		this.option3.value = this.currentQues.c
		this.option3.j = j
		this.option3.inputEnabled = true;        
		this.option3.events.onInputDown.add(this.checkAnswer, this);
		this.option4.value = this.currentQues.d
		this.option4.j = j
		this.option4.inputEnabled = true;        
		this.option4.events.onInputDown.add(this.checkAnswer, this);
		this.quesText = this.add.text(0, 0, this.currentQues.question ,{font: "18px Arial", fill : 'white'}).alignTo(this.question, Phaser.RIGHT_CENTER, -(this.question.width-20));
		this.option1Text = this.add.text(0, 0, this.currentQues.a,{font: "16px Arial", fill : 'yellow'}).alignTo(this.option1, Phaser.RIGHT_CENTER, -(this.option1.width-20));
		this.option2Text = this.add.text(0, 0, this.currentQues.b,{font: "16px Arial", fill : 'yellow'}).alignTo(this.option2, Phaser.RIGHT_CENTER, -(this.option2.width-20));
		this.option3Text = this.add.text(0, 0, this.currentQues.c,{font: "16px Arial", fill : 'yellow'}).alignTo(this.option3, Phaser.RIGHT_CENTER, -(this.option3.width-20));
		this.option4Text = this.add.text(0, 0, this.currentQues.d,{font: "16px Arial", fill : 'yellow'}).alignTo(this.option4, Phaser.RIGHT_CENTER, -(this.option4.width-20));
	}
};