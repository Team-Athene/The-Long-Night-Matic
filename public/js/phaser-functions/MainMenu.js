BasicGame.MainMenu = function (game) {
	this.playButton = null
	this.statButton = null
	this.joinButton = null
}

BasicGame.MainMenu.prototype = {
	create: function () {
		this.background = this.add.sprite(0, 0, 'preloaderBackground')
		this.background.width = window.innerWidth
		this.background.height = window.innerHeight
		
		this.playButton = this.add.button(
			window.innerWidth / 1.45,
			window.innerHeight / 3,
			'button',
			this.createGame,
			this,
			2,
			1,
			0
		)
		this.playButton.width = 320
		this.playButton.height = 150

		this.joinButton = this.add.button(
			window.innerWidth / 1.45,
			window.innerHeight / 2,
			'button1',
			this.joinGame,
			this,
			2,
			1,
			0
		)
		this.joinButton.width = 320
		this.joinButton.height = 150

		this.statButton = this.add.button(
			window.innerWidth / 1.45,
			window.innerHeight / 1.5,
			'button2',
			this.myKingdom,
			this,
			2,
			1,
			0
		)
		this.statButton.width = 320
		this.statButton.height = 150
		this.music = this.add.audio('got')
		this.music.loop = true
		this.music.autoplay = true
		if (this.sound.usingWebAudio && this.sound.context.state !== 'running') {
			this.input.onDown.addOnce(function () {
				// this.sound.context.resume();
			}, this)
		}
	},

	update: function () {
	},

	createGame: function (pointer) {
		this.state.start('Create')
	},	
	joinGame: function (pointer) {
		this.state.start('Join')
	},
	myKingdom: function (pointer) {
		this.state.start('Login')
	},
}
