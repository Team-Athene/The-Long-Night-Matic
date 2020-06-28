BasicGame.Join = function (game) {
	this.mainButton = null
	this.startButton = null
	this.RoomID = 'Start Typing'
	this.RoomIDText = null
	this.currentQues = null
}

BasicGame.Join.prototype = {
	create: function () {
		this.background = this.add.sprite(0, 0, 'joinBG')
		this.background.width = window.innerWidth
		this.background.height = window.innerHeight

		this.input.keyboard.addCallbacks(this, null, null, this.keyPress)

		this.clearButton = this.add.button(
			window.innerWidth / 2.1,
			window.innerHeight / 1.5,
			'clear',
			this.keyDel,
			this,
			2,
			1,
			0
		)
		this.clearButton.width = window.innerWidth / 12
		this.clearButton.height = window.innerWidth / 24
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
		this.startButton.width = window.innerWidth / 9
		this.startButton.height = window.innerWidth / 18
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
	},
	keyDel: function (pointer) {
		this.keyPress('DEL')
	},
	keyPress: function (char) {
		if (char == 'DEL') {
			if (this.RoomID != 'Start Typing') {
				this.RoomID = this.RoomID.slice(0, -1)
			}
		} else {
			if (this.RoomID == 'Start Typing') {
				this.RoomID = char
			} else {
				this.RoomID = this.RoomID + char
			}
		}
	},
	update: function () {
		if (this.RoomIDText != null) {
			this.RoomIDText.destroy()
		}
		this.RoomIDText = this.add.text(
			window.innerWidth / 2.2,
			window.innerHeight / 1.6,
			`${this.RoomID}`,
			{ fill: 'yellow', align: 'center', font: '14px Arial' }
		)
	},

	startGame: function (pointer) {
		joinGame(this.RoomID, 'second')
		socket.on('user-joined', async (data) => {
			console.log('Log: user-joined data', data)
			sessionStorage.setItem('roomId', this.RoomID)
			sessionStorage.setItem('user', 2)
			this.state.start('Quiz', true, false, data)
			const join_res = await LN.methods.join_game(data.GameId).send({
				from: account,
			})
		})
	},

	mainMenu: function (pointer) {
		console.log('mainMenu')
		this.state.start('MainMenu')
	},
}
