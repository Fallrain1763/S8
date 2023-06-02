class Title extends Phaser.Scene {
    constructor() {
        super('Title');
    }
    preload(){
        this.load.image('bg', './assets/bg.png');
    }
    create(){

        this.add.image(0, 0, 'bg');



        //this.time.delayedCall(2000, () => this.cameras.main.fadeOut(4000, 0,0,0));

        this.time.delayedCall(1000, () => {
        let t1 = this.add.text(
            40, 
            250, 
            'Play', 
            {
                font: "40px",
                color: "#FFFF00"
            } 
        );
        t1.alpha = 0;
        this.tweens.add({
            targets: t1,
            alpha: 1,
            duration: 1000,
            ease: 'Linear'
          });
    });
        
    this.time.delayedCall(1500, () => {
        let t2 = this.add.text(
            40, 
            300, 
            'Setting', 
            {
                font: "40px",
                color: "#FFFF00"
            } 
        );
        t2.alpha = 0;
        this.tweens.add({
            targets: t2,
            alpha: 1,
            duration: 1000,
            ease: 'Linear'
          });
    });

    this.time.delayedCall(2000, () => {
        let t3 = this.add.text(
            40, 
            350, 
            'Exit', 
            {
                font: "40px",
                color: "#FFFF00"
            } 
        );
        t3.alpha = 0;
        this.tweens.add({
            targets: t3,
            alpha: 1,
            duration: 1000,
            ease: 'Linear'
          });
    });
    

        let t4 = this.add.text(
            40, 
            20, 
            'Roly Poly', 
            {
                font: "80px",
                color: "#FFFFFF"
            } 
        );

        this.tweens.add({
            targets: t4,
            alpha:0,
            duration: 2000,
            ease: 'Linear',
            repeat: -1,
        });

        this.input.once('pointerdown', function ()
        {

            this.scene.start('victory');

        }, this);
    }
}

class victory extends Phaser.Scene {
    constructor() {
        super('victory');
    }
    preload(){
        this.load.image('firework', './assets/firework.png');
    }
    create(){
        this.cameras.main.setBackgroundColor(0x444344);
        
        this.time.delayedCall(1000, () => {
        let t5 = this.add.text(50, 50)
        .setText("Congratulations,\nyou win !")
        .setFontSize('60px')

        t5.alpha = 0;
        this.tweens.add({
            targets: t5,
            alpha: 1,
            duration: 1000,
            ease: 'Linear'
          });
    });

        let i = this.add.image(320, 320, 'firework');
        i.setScale(0.5);
        this.tweens.add({
            targets: i,
            alpha:0,
            duration: 2000,
            ease: 'Linear',
            repeat: -1,
        });
    }
}

let game = new Phaser.Game({
    width: 640,
    height: 480,
    scene: [Title, victory]
});