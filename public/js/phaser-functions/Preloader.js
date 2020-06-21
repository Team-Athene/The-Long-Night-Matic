BasicGame.Preloader = function (game) {
	this.background = null
	this.preloadBar = null
	this.music = null
	this.ready = false
}

BasicGame.Preloader.prototype = {
	preload: function () {
		this.background = this.add.sprite(0, 0, 'preloaderBackground')
		this.background.width = window.innerWidth
		this.background.height = window.innerHeight

		this.load.json('quizJson', '../assets/quiz.json')

		this.preloadBar = this.add.sprite(400, 600, 'preloaderBar')
		this.preloadBar.anchor.setTo(0.5)
		this.load.setPreloadSprite(this.preloadBar, 0)
		this.load.spritesheet(
			'button',
			'assets/images/button_sprite_sheet.png',
			265,
			98
		)
		this.load.spritesheet(
			'button1',
			'assets/images/button1_sprite_sheet.png',
			265,
			98
		)
		this.load.spritesheet(
			'button2',
			'assets/images/button2_sprite_sheet.png',
			265,
			98
		)
		this.load.spritesheet(
			'button3',
			'assets/images/button3_sprite_sheet.png',
			265,
			98
		)
		this.music = this.add.audio('got')
		this.music.autoplay = true
		this.music.loop = true
		// this.music.play()
	},

	create: function () {
		this.preloadBar.cropEnabled = false
	},

	update: function () {
		this.ready = true
		this.state.start('MainMenu')
	},
}
