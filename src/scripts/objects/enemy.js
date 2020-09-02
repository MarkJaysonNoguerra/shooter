export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  enemy

  constructor(scene, x, y) {
    super(scene, x, y, 'enemy')
    scene.add.existing(this)
    // scene.add.image(0, 80, 'enemy', 0);

    scene.tweens.add({
      targets: this,
      props: {
          x: { value: 1000, duration: 4000, flipX: true },
          y: { value: 800, duration: 8000,  },
      },
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: -1
  });

    
  }
  update() {
    this.setInteractive()
        .on('pointerdown', () => this.setVisible(false))
  } 

}
