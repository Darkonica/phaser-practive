import { Scene } from 'phaser';
import ShawarmaCounter from '../objects/ShawarmaCounter';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    // counterView: Phaser.GameObjects.Text;
    shawarma: Phaser.GameObjects.Image; // TODO: crop png later
    shawarmaCounter: Phaser.GameObjects.Container;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        let counter = 0;

        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        // this.counterView = this.add.text(300, 100, String(counter), {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // });
        // this.counterView.setOrigin(0.5);

        this.shawarma = this.add.image(300, 400, 'shawarma');
        this.shawarma.setScale(0.5);
        this.shawarma
            .setInteractive()
            .on('pointerdown', () => {
                counter++;
                this.shawarmaCounter.setText(String(counter));
                
                this.tweens.add({
                    targets: this.shawarma,
                    scaleX: 0.48,
                    scaleY: 0.48,
                    duration: 50,
                    yoyo: true
                });
            })
            .on('pointerover', () => {
                this.input.setDefaultCursor('pointer');
            })
            .on('pointerout', () => {
                this.input.setDefaultCursor('default');
            });

        this.shawarmaCounter = new ShawarmaCounter(this, 300, 100, counter);

        // this.input.once('pointerdown', () => {

        //     this.scene.start('GameOver');

        // });
    }
}
