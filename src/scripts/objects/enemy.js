export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  enemy

  constructor(scene, x, y) {
    super(scene, x, y, 'enemy')
    scene.add.existing(this)
    // scene.add.image(0, 80, 'enemy', 0);

    scene.tweens.add({
      targets: this,
      props: {
          x: { value: Math.random() * window.innerWidth, duration: 5000, flipX: true },
          y: { value: Math.random() * window.innerHeight, duration: 6000,  },
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
