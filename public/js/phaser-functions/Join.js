BasicGame.Join = function (game) {
	this.mainButton = null
	this.startButton = null
}

BasicGame.Join.prototype = {
	create: function () {
		console.log('InSide Join')

		this.background = this.add.sprite(0, 0, 'joinBG')
		this.background.width = window.innerWidth
		this.background.height = window.innerHeight
		this.startButton = this.add.button(
			window.innerWidth / 1.6,
			window.innerHeight / 1.2,
			'startGame',
			this.startGame,
			this,
			2,
			1,
			0
		)
		this.startButton.width = 150
		this.startButton.height = 70
		this.mainButton = this.add.button(
			window.innerWidth / 3.5,
			window.innerHeight / 1.2,
			'mainMenu',
			this.mainMenu,
			this,
			2,
			1,
			0
		)
		this.mainButton.width = 150
		this.mainButton.height = 70
		this.music = this.add.audio('got')
		this.music.loop = true
		this.music.autoplay = true
		if (this.sound.usingWebAudio && this.sound.context.state !== 'running') {
			this.input.onDown.addOnce(function () {
				this.sound.context.resume()
			}, this)
		}
		let k = prompt('ENTER ROOM NUMBER ?')
		joinGame(k, 'mekhamol')
		socket.on('user-joined', (data) => {
			console.log('Log: user-joined data', data)
		})
	},

	update: function () {
	},

	startGame: function (pointer) {
		this.state.start('Quiz')
	},

	mainMenu: function (pointer) {
		console.log('mainMenu')
		this.state.start('MainMenu')
	},
}
