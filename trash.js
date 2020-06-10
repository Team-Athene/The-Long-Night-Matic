if (value == true) {
    console.log('Correct')


    this.quesText.destroy()
    this.question.destroy()
    this.option1.destroy()
    this.option2.destroy()
    this.option3.destroy()
    this.option4.destroy()
    this.option1Text.destroy()
    this.option2Text.destroy()
    this.option3Text.destroy()
    this.option4Text.destroy()
    this.livesW.destroy()
    this.livesA.destroy()
    this.arya.destroy()
    this.whiteWalker.destroy()		



    if (this.walkerLife > 0) {
        this.popup = this.add.sprite(
            this.world.centerX,
            this.world.centerY,
            'popUp'
        )
        this.popup.alpha = 0.8
        this.popup.anchor.set(0.5)

        this.tween = this.add
            .tween(this.popup.scale)
            .to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true)
        this.status = this.add
            .text(0, 0, 'Correct!!\n Your next game\n starts in ', {
                fill: 'gold',
                align: 'center',
                font: '28px Arial',
            })
            .alignIn(
                this.world.bounds,
                Phaser.TOP_CENTER,
                0,
                -window.innerHeight / 2.5
            )
        this.timeInSeconds = 4
        this.timeText = this.add.text(
            this.world.centerX,
            this.world.centerY + 70,
            'COUNT'
        )
        this.timeText.fill = '#ffffff'
        this.timeText.anchor.set(0.5, 0.5)
        this.timer = this.time.events.loop(Phaser.Timer.SECOND, this.tick, this)
    } else {
        this.popup = this.add.sprite(
            this.world.centerX,
            this.world.centerY,
            'popUp'
        )
        this.popup.alpha = 0.8
        this.popup.anchor.set(0.5)
        this.tween = this.add
            .tween(this.popup.scale)
            .to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true)
        this.status = this.add
            .text(0, 0, 'Game Over!!\n You Won the \nGame ', {
                fill: 'gold',
                align: 'center',
                font: '28px Arial',
            })
            .alignIn(
                this.world.bounds,
                Phaser.TOP_CENTER,
                0,
                -window.innerHeight / 2.5
            )
        this.mainButton = this.add.button(
            this.world.centerX - 75,
            this.world.centerY + 60,
            'mainMenu',
            this.mainMenu,
            this,
            2,
            1,
            0
        )
        this.mainButton.width = 150
        this.mainButton.height = 70
    }
} else {
    console.log('Wrong')
    this.aryaLife--
    this.quesText.destroy()
    this.question.destroy()
    this.option1.destroy()
    this.option2.destroy()
    this.option3.destroy()
    this.option4.destroy()
    this.option1Text.destroy()
    this.option2Text.destroy()
    this.option3Text.destroy()
    this.option4Text.destroy()
    this.livesW.destroy()
    this.livesA.destroy()
    this.arya.destroy()
    this.whiteWalker.destroy()
    if (this.aryaLife > 0) {
        this.popup = this.add.sprite(
            this.world.centerX,
            this.world.centerY,
            'popUp'
        )
        this.popup.alpha = 0.8
        this.popup.anchor.set(0.5)

        this.tween = this.add
            .tween(this.popup.scale)
            .to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true)
        this.status = this.add
            .text(0, 0, 'Wrong!!\n Your next game\n starts in ', {
                fill: 'gold',
                align: 'center',
                font: '28px Arial',
            })
            .alignIn(
                this.world.bounds,
                Phaser.TOP_CENTER,
                0,
                -window.innerHeight / 2.5
            )
        this.timeInSeconds = 4
        this.timeText = this.add.text(
            this.world.centerX,
            this.world.centerY + 70,
            'COUNT'
        )
        this.timeText.fill = '#ffffff'
        this.timeText.anchor.set(0.5, 0.5)
        this.timer = this.time.events.loop(Phaser.Timer.SECOND, this.tick, this)
    } else {
        this.popup = this.add.sprite(
            this.world.centerX,
            this.world.centerY,
            'popUp'
        )
        this.popup.alpha = 0.8
        this.popup.anchor.set(0.5)
        this.tween = this.add
            .tween(this.popup.scale)
            .to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true)
        this.status = this.add
            .text(0, 0, 'Game Over!! \nYou Lost the \nGame ', {
                fill: 'gold',
                align: 'center',
                font: '28px Arial',
            })
            .alignIn(
                this.world.bounds,
                Phaser.TOP_CENTER,
                0,
                -window.innerHeight / 2.5
            )
        this.mainButton = this.add.button(
            this.world.centerX - 75,
            this.world.centerY + 60,
            'mainMenu',
            this.mainMenu,
            this,
            2,
            1,
            0
        )
        this.mainButton.width = 150
        this.mainButton.height = 70
    }
}