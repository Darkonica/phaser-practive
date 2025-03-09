export default class Building extends Phaser.GameObjects.Container {
    background: Phaser.GameObjects.Rectangle;
    title: Phaser.GameObjects.Text;
    price: Phaser.GameObjects.Text;
    totalBuildings: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, x: number, y: number, title: string, price: number, totalBuildings: number) {
        super(scene, x, y);
        scene.add.existing(this);

        
        this.background = new Phaser.GameObjects.Rectangle(scene, 0, 0, 400, 50, Phaser.Display.Color.GetColor(100, 50, 0), 0.5);
        this.background.setOrigin(0, 0);
        this.background.setInteractive({ useHandCursor: true });

        this.title = scene.add.text(14, 5, title, {
            fontFamily: 'Arial', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 2,
            align: 'left'
        });
        this.title.setOrigin(0, 0);

        this.price = scene.add.text(14, 25, String(price), {
            fontFamily: 'Arial', fontSize: 14, color: '#ffffff',
            stroke: '#000000', strokeThickness: 1,
            align: 'left'
        });
        this.title.setOrigin(0, 0);

        this.totalBuildings = scene.add.text(350, 5, String(totalBuildings), {
            fontFamily: 'Arial', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 2,
            align: 'right'
        });
        this.totalBuildings.setOrigin(0, 0);

        this.add([this.background, this.title, this.price, this.totalBuildings]);
    }
}
