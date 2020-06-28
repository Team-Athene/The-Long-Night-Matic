BasicGame.Instructions = function (game) {
	this.mainButton = null
}

BasicGame.Instructions.prototype = {
	create: function () {
		this.background = this.add.sprite(0, 0, 'instBG')
		this.background.width = window.innerWidth
		this.background.height = window.innerHeight
		this.instruction = this.add.sprite(20, 20, 'inst')
		this.instruction.height = window.innerHeight / 1.1
		this.instruction.width = this.instruction.height / 1.3

		this.mainButton = this.add.button(
			window.innerWidth / 2 - window.innerWidth / 18,
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
	update: function () {},

	mainMenu: function (pointer) {
		console.log('mainMenu')
		this.state.start('MainMenu')
	},
}
