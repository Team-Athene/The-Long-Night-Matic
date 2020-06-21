BasicGame.Sample = function (game) {
	this.playButton = null
	this.statButton = null
	this.currentQues = null
	this.index = 0
	this.status = null
	this.tween = null
	this.timeText = null
	this.timeInSeconds = 4
	this.popup = null
	this.roomID = null
	this.qId = null
	this.currentAns = null
	this.clicked = null
	this.dat = []

	this.user = 0
	this.myLife = 3
	this.oppLife = 3

	this.aryaLife = 0
	this.walkerLife = 0
}
BasicGame.Sample.prototype = {
	// init: function(data) { 
	// 	this.currentQues = data.quiz
	// 	this.qId = data.qId
	// 	this.roomID = sessionStorage.getItem('roomId')
	// 	this.user = sessionStorage.getItem('user')
	// 	var users = []
    //     console.log("TCL: users", users)
	// 	for (const user of data.users) {
	// 		users.push(JSON.parse(user))
	// 	}
	// 	if(this.user == 1) {
	// 		//I am Arya
	// 		if(users[0].user == this.user) {
	// 			this.aryaLife = users[0].score
	// 			this.walkerLife = users[1].score
	// 		} else {
	// 			this.aryaLife = users[1].score
	// 			this.walkerLife = users[0].score
	// 		}
	// 	} else {
	// 		//I am White Walker
	// 		if(users[0].user == this.user) {
	// 			this.walkerLife = users[0].score
	// 			this.aryaLife = users[1].score
	// 		} else {
	// 			this.walkerLife = users[1].score
	// 			this.aryaLife = users[0].score
	// 		}
	// 	}
		
	//   },
	create: function () {
		this.background = this.add.sprite(0, 0, 'quizBG')
		this.background.width = window.innerWidth
		this.background.height = window.innerHeight

		this.music = this.add.audio('got')
		this.music.loop = true
		this.music.autoplay = true
		if (this.sound.usingWebAudio && this.sound.context.state !== 'running') {
			this.input.onDown.addOnce(function () {
				this.sound.context.resume()
			}, this)
		}
        this.question = this.add.sprite(0, 0, 'question')
		this.question.width = window.innerWidth / 1.2
		this.question.alignIn(this.world.bounds, Phaser.TOP_CENTER, 0, -35)
		this.option1 = this.add.button(window.innerWidth / 5.5, 110, 'option')
		this.option2 = this.add.button(window.innerWidth/2, 110, 'option')
		this.option3 = this.add.button(window.innerWidth / 5.5, 165, 'option')
		this.option4 = this.add.button(window.innerWidth/2, 165, 'option')
		this.option1.width = window.innerWidth / 3.5
		this.option2.width = window.innerWidth / 3.5
		this.option3.width = window.innerWidth / 3.5
        this.option4.width = window.innerWidth / 3.5
        
        this.livesW = this.add.group()
		var x = 150
		var y = window.innerHeight - 50

		for (var i = 0; i < 3; i++) {
            var LifeW = this.livesW.create(x - 100 + 50 * i, y, 'lifeW')
            LifeW.width= window.innerWidth/24
            LifeW.height= window.innerWidth/24
			LifeW.anchor.setTo(0.5, 0.5)
		}

		this.livesA = this.add.group()
		var p = window.innerWidth - 50
		var q = window.innerHeight - 50

		for (var i = 0; i < 3; i++) {
			var LifeA = this.livesA.create(p - 100 + 50 * i, q, 'lifeA')
            LifeA.width= window.innerWidth/24
            LifeA.height= window.innerWidth/24
			LifeA.anchor.setTo(0.5, 0.5)
		}

		this.arya = this.add.sprite(
			window.innerWidth / 2.3,
			window.innerHeight-(window.innerWidth / 3.5),
			'arya'
        )
        this.arya.width = window.innerWidth / 3.5
        this.arya.height = window.innerWidth / 3.5
		var walk = this.arya.animations.add('walk', [0, 1, 2, 4, 2, 1], 4, false)
		this.arya.animations.play('walk', 1, true)

		this.whiteWalker = this.add.sprite(
			window.innerWidth / 4,
			window.innerHeight-(window.innerWidth / 3.5),
			'whiteWalker'
		)
        this.whiteWalker.width = window.innerWidth / 3
        this.whiteWalker.height = window.innerWidth / 3.5
		var walker = this.whiteWalker.animations.add(
			'walker',
			[0, 1, 2, 4, 2, 1],
			4,
			false
		)
		this.whiteWalker.animations.play('walker', 1, true)
    }
}