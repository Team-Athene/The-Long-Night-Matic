BasicGame.Create = function (game) {
	this.mainButton = null
	this.room = 000000
}

BasicGame.Create.prototype = {
	create: function () {
		console.log('InSide Create')
		createGame('dennyMon')
		socket.on('game-created', (roomid) => {
			console.log('Log: roomid', roomid)
			this.room = roomid
		})
		this.background = this.add.sprite(0, 0, 'createBG')
		this.background.width = window.innerWidth
		this.background.height = window.innerHeight
		// this.add.text(
		// 	window.innerWidth / 2.2,
		// 	window.innerHeight / 1.7,
		// 	`${this.room}`,
		// 	{ fill: 'yellow' }
		// )

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
		this.mainButton.width = window.innerWidth / 9
		this.mainButton.height = window.innerWidth / 18
		this.music = this.add.audio('got')
		this.music.loop = true
		this.music.autoplay = true
		if (this.sound.usingWebAudio && this.sound.context.state !== 'running') {
			this.input.onDown.addOnce(function () {
				this.sound.context.resume()
			}, this)
		}
		socket.on('game-created', (dta) => {
			console.log('Log: dta', dta)
			this.room = dta.room
			this.GameId = dta.GameId
		})
	},

	update: function () {
		if (this.roomId != null) {
			this.roomId.destroy()
		}
		this.roomId = this.add.text(
			window.innerWidth / 2.1,
			window.innerHeight / 1.68,
			`${this.room}`,
			{ fill: 'yellow', align: 'center', font: '14px Arial' }
		)
	},

	mainMenu: function (pointer) {
		this.state.start('MainMenu')
	},
}
