var BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        this.load.image('preloaderBackground', '../../assets/images/GoT.jpg');
        this.load.image('preloaderBar', '../assets/images/preloadr_bar.png');
        this.load.image('question', '../assets/images/question.png');
        this.load.image('option', '../assets/images/option.png');
        this.load.image('lifeA', '../assets/images/life.png');
        this.load.image('lifeW', '../assets/images/life1.png');
        this.load.audio('got', '../assets/audio/got1.mp3');
        this.load.image('quizBG', '../assets/images/darkbg.jpg')
        this.load.image('createBG', '../assets/images/createBG.jpg')
        this.load.image('joinBG', '../assets/images/joinBG.jpg')
        this.load.spritesheet('arya', '../assets/images/arya_sprite_sheet.png',340,350,4)
        this.load.spritesheet('whiteWalker', '../assets/images/whiteWalker_sprite_sheet.png',385,350,4)
		this.load.spritesheet('startGame', '../assets/images/startGame_sprite_sheet.png',265,98);
		this.load.spritesheet('mainMenu', '../assets/images/mainMenu_sprite_sheet.png',265,98);

    },

    create: function () {

        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop)
        {
            //  If you have any desktop specific settings, they can go in here
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }
        else
        {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.refresh();
        }

        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        this.state.start('Preloader');

    }

};
