BasicGame.MainMenu = function (game) {
	this.playButton = null
	this.statButton = null
	this.joinButton = null
	this.instButton = null
}

BasicGame.MainMenu.prototype = {
	create: function () {
		this.background = this.add.sprite(0, 0, 'preloaderBackground')
		this.background.width = window.innerWidth
		this.background.height = window.innerHeight
		this.playButton = this.add.button(
			window.innerWidth / 1.45,
			window.innerHeight / 4,
			'button',
			this.createGame,
			this,
			2,
			1,
			0
		)
		this.playButton.width = window.innerWidth / 4
		this.playButton.height = window.innerWidth / 10
		this.joinButton = this.add.button(
			window.innerWidth / 1.45,
			window.innerHeight / 4 + window.innerWidth / 10,
			'button1',
			this.joinGame,
			this,
			2,
			1,
			0
		)
		this.joinButton.width = window.innerWidth / 4
		this.joinButton.height = window.innerWidth / 10
		this.statButton = this.add.button(
			window.innerWidth / 1.45,
			window.innerHeight / 4 + 2 * (window.innerWidth / 10),
			'button2',
			this.myKingdom,
			this,
			2,
			1,
			0
		)
		this.statButton.width = window.innerWidth / 4
		this.statButton.height = window.innerWidth / 10
		this.instButton = this.add.button(
			window.innerWidth / 1.45,
			window.innerHeight / 4 + 3 * (window.innerWidth / 10),
			'button3',
			this.instruction,
			this,
			2,
			1,
			0
		)
		this.instButton.width = window.innerWidth / 4
		this.instButton.height = window.innerWidth / 10
		this.music = this.add.audio('got')
		this.music.loop = true
		this.music.autoplay = true
		if (this.sound.usingWebAudio && this.sound.context.state !== 'running') {
			this.input.onDown.addOnce(function () {
				// this.sound.context.resume();
			}, this)
		}
	},

	update: function () {},

	createGame: function (pointer) {
		this.state.start('Create')
	},
	joinGame: function (pointer) {
		this.state.start('Join')
	},
	myKingdom: function (pointer) {
		this.state.start('Score')
	},
	instruction: function (pointer) {
		this.state.start('Instructions')
	},
}
