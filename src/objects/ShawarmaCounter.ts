export default class ShawarmaCounter extends Phaser.GameObjects.Container {
    background: Phaser.GameObjects.Rectangle;
    text: Phaser.GameObjects.Text;

    constructor(scene, x, y, counter) {
        super(scene, x, y);
        scene.add.existing(this);

        this.background = scene.add.rectangle(0, 0, 600, 80, 0x000000, 0.5);
        this.background.setOrigin(0.5);

        let fullText = `shawarmas:\n${String(counter)}`;

        this.text = scene.add.text(0, 0, fullText, {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.text.setOrigin(0.5);

        this.add([this.background, this.text]);
    }

    setText(newText) {
        let fullText = `shawarmas:\n${String(newText)}`;
        this.text.setText(fullText);
    }
}
