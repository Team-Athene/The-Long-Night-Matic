BasicGame.Score = function (game) {
	this.mainButton = null
}

BasicGame.Score.prototype = {
	create: function () {
		console.log('InSide Join')

		this.background = this.add.sprite(0, 0, 'scoreBG')
		this.background.width = window.innerWidth
        this.background.height = window.innerHeight

        
		this.fought = this.add.sprite(window.innerWidth/1.5, 20, 'fought')
		this.fought.height = window.innerHeight/3.5
        this.fought.width = this.fought.height

		this.foughtText = this.add.text(
            (window.innerWidth/1.5)+(0.42*this.fought.width),
            20+(0.6*this.fought.height),
            `25`,
            { fill: '#f1c75d' , align:'center', font: "30px Arial" }
        )
        
		this.won = this.add.sprite(window.innerWidth/1.5, window.innerHeight/3.5+20, 'won')
		this.won.height = window.innerHeight/3.5
        this.won.width = this.won.height

		this.wonText = this.add.text(
            (window.innerWidth/1.5)+(0.42*this.won.width),
            (window.innerHeight/3.5)+20+(0.6*this.won.height),
            `15`,
            { fill: '#f1c75d' , align:'center', font: "30px Arial" }
        )
        
		this.lost = this.add.sprite(window.innerWidth/1.5, 2*window.innerHeight/3.5+20, 'lost')
		this.lost.height = window.innerHeight/3.5
        this.lost.width = this.lost.height
        
		this.lostText = this.add.text(
            (window.innerWidth/1.5)+(0.42*this.lost.width),
            (2*(window.innerHeight/3.5)+20)+(0.6*this.lost.height),
            `10`,
            { fill: '#f1c75d' , align:'center', font: "30px Arial" }
        )
		
		this.mainButton = this.add.button(
			(window.innerWidth/2)-(window.innerWidth/18),
			window.innerHeight / 1.2,
			'mainMenu',
			this.mainMenu,
			this,
			2,
			1,
			0
		)
		this.mainButton.width = window.innerWidth/9
		this.mainButton.height = window.innerWidth/18
		this.music = this.add.audio('got')
		this.music.loop = true
		this.music.autoplay = true
		if (this.sound.usingWebAudio && this.sound.context.state !== 'running') {
			this.input.onDown.addOnce(function () {
				this.sound.context.resume()
			}, this)
		}
	},
	update: function () {
	},

	mainMenu: function (pointer) {
		console.log('mainMenu')
		this.state.start('MainMenu')
	},
}
