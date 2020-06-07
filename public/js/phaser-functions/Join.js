BasicGame.Join = function (game) {
	this.mainButton = null
	this.startButton = null
	this.RoomID = "Start Typing"
	this.RoomIDText = null
}

BasicGame.Join.prototype = {
	create: function () {
		console.log('InSide Join')

		this.background = this.add.sprite(0, 0, 'joinBG')
		this.background.width = window.innerWidth
		this.background.height = window.innerHeight
		
		this.input.keyboard.addCallbacks(this, null, null, this.keyPress);

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
		this.clearButton.width = 100
		this.clearButton.height = 40
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
	},
keyDel: function (pointer) {
	this.keyPress('DEL')

},
	keyPress: function(char) {
		console.log("PING")
		console.log("TCL: char", char)
		if(char=="DEL"){
			this.RoomID = this.RoomID.slice(0, -1);	
            console.log("TCL: newStr", this.RoomID)
		} else if(this.RoomID == "Start Typing"){
			this.RoomID = char
			if(char == "DEL"){
				this.RoomID = "Start Typing"
			}
		} else {
			this.RoomID = this.RoomID+char
		}
		console.log("TCL: this.RoomID", this.RoomID)
	},
	update: function () {
		if(this.RoomIDText != null){
			this.RoomIDText.destroy()
		}
		this.RoomIDText = this.add.text(
				window.innerWidth / 2.2,
				window.innerHeight / 1.65,
				`${this.RoomID}`,
				{ fill: 'yellow' }
			)
	
	},

	startGame: function (pointer) {
		// let k = prompt('ENTER ROOM NUMBER ?')
		joinGame(this.RoomID, 'mekhamol')
		socket.on('user-joined', (data) => {
			console.log('Log: user-joined data', data)
		})
		this.state.start('Quiz')
	},

	mainMenu: function (pointer) {
		console.log('mainMenu')
		this.state.start('MainMenu')
	},
}
