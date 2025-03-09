import Building from './Building';

const ITEMS = [
    {
        title: "Ashot's Shawarma Shack",
        totalBuildings: 0,
        price: 1,
    },
    {
        title: "Nirbek's Shawarma Shack",
        totalBuildings: 0,
        price: 1,
    },
    {
        title: "Garganthon's Shawarma Shack",
        totalBuildings: 0,
        price: 1,
    },
    {
        title: "Vova's Shawarma Shack",
        totalBuildings: 0,
        price: 1,
    },
    
];

export default class Buildings extends Phaser.GameObjects.Container {
    background: Phaser.GameObjects.Rectangle;
    items: Phaser.GameObjects.Container[] = [];

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
        scene.add.existing(this);

        this.background = new Phaser.GameObjects.Rectangle(scene, 0, 0, 400, 800, 0x000000, 0.5);
        this.background.setOrigin(0, 0);
        this.add(this.background);

        ITEMS.forEach((item, index) => {
            const newItem = new Building(scene, 0, index * 55, item.title, item.price, item.totalBuildings);
            this.items.push(newItem);
        });

        this.add(this.items);
    }
}
