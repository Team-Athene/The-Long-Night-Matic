var BasicGame = {}

BasicGame.Boot = function (game) {}

BasicGame.Boot.prototype = {
	preload: function () {
		this.load.image('preloaderBackground', '../../assets/images/GoT.jpg')
		this.load.image('instBG', '../../assets/images/instBG.jpg')
		this.load.image('preloaderBar', '../assets/images/preloadr_bar.png')
		this.load.image('scoreBG', '../../assets/images/scoreBG.jpg')
		this.load.image('popUp', '../assets/images/popUp.png')
		this.load.image('inst', '../../assets/images/Inst.png')
		this.load.image('fought', '../../assets/images/fought.png')
		this.load.image('won', '../../assets/images/won.png')
		this.load.image('lost', '../../assets/images/lost.png')
		this.load.image('question', '../assets/images/question.png')
		this.load.image('option', '../assets/images/option.png')
		this.load.image('lifeA', '../assets/images/life.png')
		this.load.image('lifeW', '../assets/images/life1.png')
		this.load.audio('got', '../assets/audio/got1.mp3')
		this.load.image('quizBG', '../assets/images/darkbg.jpg')
		this.load.image('createBG', '../assets/images/createBG.jpg')
		this.load.image('joinBG', '../assets/images/joinBG.jpg')
		this.load.spritesheet(
			'arya',
			'../assets/images/arya_sprite_sheet.png',
			340,
			350,
			4
		)
		this.load.spritesheet(
			'whiteWalker',
			'../assets/images/whiteWalker_sprite_sheet.png',
			385,
			350,
			4
		)
		this.load.spritesheet(
			'startGame',
			'../assets/images/startGame_sprite_sheet.png',
			265,
			98
		)
		this.load.spritesheet(
			'mainMenu',
			'../assets/images/mainMenu_sprite_sheet.png',
			265,
			98
		)
		this.load.spritesheet('clear', '../assets/images/clear.png', 159, 46)
	},

	create: function () {
		this.input.maxPointers = 1
		this.stage.disableVisibilityChange = true
		if (this.game.device.desktop) {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
			this.scale.pageAlignHorizontally = true
			this.scale.pageAlignVertically = true
		} else {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
			this.scale.pageAlignHorizontally = true
			this.scale.pageAlignVertically = true
			this.scale.forceOrientation(true, false)
			this.scale.setResizeCallback(this.gameResized, this)
			this.scale.refresh()
		}
		this.state.start('Preloader')
	},
}
