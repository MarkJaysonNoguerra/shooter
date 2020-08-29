import Crosshair from '../objects/crosshair'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    /**
     * Delete all the code below to start a fresh scene
     */
    new Crosshair(this, this.cameras.main.width / 2, this.cameras.main.displayHeight /2)
    this.fpsText = new FpsText(this)

    // async/await example
    // const pause = ms => {
    //   return new Promise(resolve => {
    //     window.setTimeout(() => {
    //       resolve()
    //     }, ms)
    //   })
    // }
    // const asyncFunction = async () => {
    //   console.log('Before Pause')
    //   await pause(4000) 
    //   console.log('After Pause')
    // }
    // asyncFunction()

    // display the Phaser.VERSION
    // this.add
    //   .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
    //     color: '#000000',
    //     fontSize: 24
    //   })
    //   .setOrigin(1, 0)
  }

  update() {
    this.fpsText.update()
  }
}
