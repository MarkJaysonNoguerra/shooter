export default class Countdown extends Phaser.GameObjects.Text {
    initialTime = 15;
    constructor(scene) {
      super(scene, (window.innerWidth*.5) - 10, 0, '', { color: 'white', fontSize: '28px' });
      scene.add.existing(this);
      this.setText(this.formatTime(this.initialTime));
      scene.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });
    }
  
    formatTime(seconds){
        // Minutes
        var minutes = Math.floor(seconds/60);
        // Seconds
        var partInSeconds = seconds%60;
        // Adds left zeros to seconds
        partInSeconds = partInSeconds.toString().padStart(2,'0');
        // Returns formated time
        return `${minutes}:${partInSeconds}`;
    }
    
    
    onEvent ()
    {
        if(this.initialTime == 0){
            // this.initialTime -= 1; // One second
        }else {
          this.initialTime--;
        }
        this.setText(this.formatTime(this.initialTime));
    }
  }
  