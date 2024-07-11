export default function() {

  const forestSound = new Audio("./src/sounds/Floresta.wav")
  const rainSound = new Audio("./src/sounds/Chuva.wav")
  const coffeShopSound = new Audio("./src/sounds/Cafeteria.wav")
  const firePlaceSound = new Audio("./src/sounds/Lareira.wav")

  const buttonPressAudio = new Audio("./src/sounds/button-press.wav")
  const kitchenTimer = new Audio("./src/sounds/kitchen-timer.mp3")

  forestSound.loop = true
  rainSound.loop = true
  coffeShopSound.loop = true
  firePlaceSound.loop = true

  function playForest() {
      forestSound.play()
  }

  function stopForest() {
      forestSound.pause()
  }
  
  function playRain() {
      rainSound.play()
  }

  function stopRain() {
      rainSound.pause()
  }

  function playCoffee() {
      coffeShopSound.play()
  }

  function stopCoffee() {
      coffeShopSound.pause()
  }

  function playFire() {
      firePlaceSound.play()
  }

  function stopFire() {
      firePlaceSound.pause()
  }

  function pressButton() {
      buttonPressAudio.play()
    }
  
    function timeEnd() {
      kitchenTimer.play()
    }

    
  return {
  playForest,
  stopForest,
  playRain,
  stopRain,
  playCoffee,
  stopCoffee,
  playFire,
  stopFire,
  pressButton,
  timeEnd
  }

}