BasicGame.Quiz = function (game) {

	this.playButton = null;
	this.statButton = null;
	this.aryaLife = 3;
	this.currentQues = null;
	this.walkerLife = 3;
	this.index = 0
	this.status = null
	this.tween = null
	this.timeText = null
	this.timeInSeconds = 4;
	this.popup = null


};
BasicGame.Quiz.prototype = {

	create: function () {



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
		

		this.quizJson = this.myJSON
		this.index = this.myJSON.length - 1


		this.gameQuiz()

	},
	tick: async function() {
        this.timeInSeconds--;
        var minutes = Math.floor(this.timeInSeconds / 60);
        var seconds = this.timeInSeconds - (minutes * 60);
        var timeString = await this.addZeros(seconds);
        this.timeText.text = timeString;
        if (this.timeInSeconds == 0) {
            this.timeText.text="Now";
            await this.time.events.remove(this.timer);
			this.gameQuiz()
        }
    },
    addZeros: function(num) {
        if (num < 10) {
            num = num;
        }
        return num;
    },

	update: function () {
	},
	random: function (index) {	
		j = Math.floor(Math.random() * (index+1));
		this.currentQues = this.quizJson[j]
		this.quizJson.splice(j,1);
		return j
	},
    animateCharacter: function() {

		this.livesW = this.add.group();
		var x = 150;
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
		var p = window.innerWidth - 50;
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

	startGame:  function (pointer) {
		this.state.start('Game');
	},
	checkAnswer: async function(button) {
		if(button.value ==  this.currentQues.ans) {
			console.log("Correct")
			this.walkerLife--;
			this.index--
			this.quesText.destroy()
			this.question.destroy()
			this.option1.destroy()
			this.option2.destroy()
			this.option3.destroy()
			this.option4.destroy()
			this.option1Text.destroy()
			this.option2Text.destroy()
			this.option3Text.destroy()
			this.option4Text.destroy()
			this.livesW.destroy();
			this.livesA.destroy();
			this.arya.destroy();
			this.whiteWalker.destroy();			
			if(this.walkerLife > 0) {		
				this.popup = this.add.sprite(this.world.centerX, this.world.centerY, 'popUp');
				this.popup.alpha = 0.8;
				this.popup.anchor.set(0.5);
	
				this.tween = this.add.tween(this.popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
				this.status = this.add.text(0, 0, 'Correct!!\n Your next game\n starts in ', {fill:'gold', align:'center', font: "28px Arial"}).alignIn(this.world.bounds, Phaser.TOP_CENTER,0, -window.innerHeight/2.5);
				this.timeInSeconds = 4;
				this.timeText = this.add.text(this.world.centerX, this.world.centerY+70, "COUNT");
				this.timeText.fill = "#ffffff";
				this.timeText.anchor.set(0.5, 0.5);
				this.timer =  this.time.events.loop(Phaser.Timer.SECOND, this.tick, this);
			}
			else {
				this.popup = this.add.sprite(this.world.centerX, this.world.centerY, 'popUp');
				this.popup.alpha = 0.8;
				this.popup.anchor.set(0.5);
				this.tween = this.add.tween(this.popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
				this.status = this.add.text(0, 0, 'Game Over!!\n You Won the \nGame ', {fill:'gold', align:'center', font: "28px Arial"}).alignIn(this.world.bounds, Phaser.TOP_CENTER,0, -window.innerHeight/2.5);
				this.mainButton = this.add.button(
					this.world.centerX-75, this.world.centerY+60,
					'mainMenu',
					this.mainMenu,
					this,
					2,
					1,
					0
				)
				this.mainButton.width = 150
				this.mainButton.height = 70
			}
		}
		else {
			console.log("Wrong")
			this.aryaLife--;
			this.index--
			this.quesText.destroy()
			this.question.destroy()
			this.option1.destroy()
			this.option2.destroy()
			this.option3.destroy()
			this.option4.destroy()
			this.option1Text.destroy()
			this.option2Text.destroy()
			this.option3Text.destroy()
			this.option4Text.destroy()
			this.livesW.destroy();
			this.livesA.destroy();
			this.arya.destroy();
			this.whiteWalker.destroy();
			if(this.aryaLife > 0) {		
			this.popup = this.add.sprite(this.world.centerX, this.world.centerY, 'popUp');
			this.popup.alpha = 0.8;
			this.popup.anchor.set(0.5);

			this.tween = this.add.tween(this.popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
			this.status = this.add.text(0, 0, 'Wrong!!\n Your next game\n starts in ', {fill:'gold', align:'center', font: "28px Arial"}).alignIn(this.world.bounds, Phaser.TOP_CENTER,0, -window.innerHeight/2.5);;
			this.timeInSeconds = 4;
			this.timeText = this.add.text(this.world.centerX, this.world.centerY+70, "COUNT");
			this.timeText.fill = "#ffffff";
			this.timeText.anchor.set(0.5, 0.5);
			this.timer =  this.time.events.loop(Phaser.Timer.SECOND, this.tick, this);
			}
			else {
				this.popup = this.add.sprite(this.world.centerX, this.world.centerY, 'popUp');
				this.popup.alpha = 0.8;
				this.popup.anchor.set(0.5);
				this.tween = this.add.tween(this.popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
				this.status = this.add.text(0, 0, 'Game Over!! \nYou Lost the \nGame ', {fill:'gold', align:'center', font: "28px Arial"}).alignIn(this.world.bounds, Phaser.TOP_CENTER,0, -window.innerHeight/2.5);
				this.mainButton = this.add.button(
					this.world.centerX-75, this.world.centerY+60,
					'mainMenu',
					this.mainMenu,
					this,
					2,
					1,
					0
				)
				this.mainButton.width = 150
				this.mainButton.height = 70
			}
		}

	},	
	mainMenu: function (pointer) {
		this.state.start('MainMenu')
	},
	gameQuiz: function(){
		if(this.popup!=null){
			this.popup.destroy()
			this.timeText.destroy()
			this.status.destroy()
		}
		this.animateCharacter()
		let j = this.random(this.index)
		this.question = this.add.sprite(0, 0, 'question');
		this.question.width = window.innerWidth/1.2
		this.question.alignIn(this.world.bounds, Phaser.TOP_CENTER,0, -35);
		this.option1 = this.add.button(window.innerWidth/5.5, 110, 'option');
		this.option2 = this.add.button(0, 0, 'option').alignTo(this.option1, Phaser.RIGHT_CENTER, 16);
		this.option3 = this.add.button(window.innerWidth/5.5, 165, 'option');
		this.option4 = this.add.button(0, 0, 'option').alignTo(this.option3, Phaser.RIGHT_CENTER, 16);
		this.option1.width = window.innerWidth/3.5
		this.option2.width = window.innerWidth/3.5
		this.option3.width = window.innerWidth/3.5
		this.option4.width = window.innerWidth/3.5
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