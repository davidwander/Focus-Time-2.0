import { 
    buttonPlay,
    buttonStop,
    plusFiveMinutes,
    lessFiveMinutes,
    forestSoundButton,
    rainSoundButton,
    coffeShopSoundButton,
    firePlaceSoundButton
 } from "./elements.js"


export default function({controls, timer, sound}) {

    buttonPlay.addEventListener('click', function() {    
        controls.play()
        timer.countdown()
        sound.pressButton()
    })
    
    buttonStop.addEventListener('click', function() {    
        controls.stop()
        timer.reset()
        sound.pressButton()    
    })

    plusFiveMinutes.addEventListener('click', function() {
        timer.plusFiveMinutes()
        sound.pressButton()   
    
    })

    lessFiveMinutes.addEventListener('click', function() {
        timer.lessFiveMinutes()
        sound.pressButton()   
    
    })
    
   
    forestSoundButton.addEventListener('click', function() { 
        if (forestSoundButton.classList.contains('active'))  {
            sound.stopForest()
            forestSoundButton.classList.remove('active')
            return
        } 
        forestSoundButton.classList.add('active')
        sound.playForest()

    })

    rainSoundButton.addEventListener('click', function() { 
        if (rainSoundButton.classList.contains('active'))  {
            sound.stopRain()
            rainSoundButton.classList.remove('active')
            return
        } 
        rainSoundButton.classList.add('active')
        sound.playRain()

    })

    coffeShopSoundButton.addEventListener('click', function() { 
        if (coffeShopSoundButton.classList.contains('active'))  {
            sound.stopCoffee()
            coffeShopSoundButton.classList.remove('active')
            return
        } 
        coffeShopSoundButton.classList.add('active')
        sound.playCoffee()

    })
    
    firePlaceSoundButton.addEventListener('click', function() { 
        if (firePlaceSoundButton.classList.contains('active'))  {
            sound.stopFire()
            firePlaceSoundButton.classList.remove('active')
            return
        } 
        firePlaceSoundButton.classList.add('active')
        sound.playFire()

    })

    
}