import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

declare let window: any;

@IonicPage()
@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl.push(HomePage)
  }

  turnOnFlashlight(){
    if(typeof window !== 'undefined') {
        window.plugins.flashlight.switchOn();
      } else {
      
    }
  }

  turnOffFlashlight(){
    if(typeof window !== 'undefined') {
        window.plugins.flashlight.switchOff();
      } else {
      
    }
  }

  toggleFlashlight(){
      if(typeof window !== 'undefined') {
        window.plugins.flashlight.toggle();
      } else {
      
    }
  }

  strobeFlashlight(){
      if(typeof window !== 'undefined') {
        let strobe: (i: number) =>
          void = (i: number, delay = 500) => {
            if (i % 2 === 0) {
              delay = 500;
            }
            
            setTimeout(() => {
              window.plugins.flashlight.toggle();
              if (--i) {
                strobe(i);
              }
            }, delay);
          };
        strobe(10);
      } else {
        
    }
  }

}
