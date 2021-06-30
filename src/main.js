// Screen
const SCREEN = {
  width: 500,
  height: 500,
}
const screen = document.getElementById('screen')
screen.style.width = SCREEN.width+'px'
screen.style.height = SCREEN.height+'px'

// Pelota
const PELOTA = {
  size: 60,
  y0: 10, // posición inicial
  v: 80, // velocidad-impulso inicial
}
const pelota = document.querySelector('.pelota')
pelota.innerHTML = '⚽'
pelota.style.fontSize = PELOTA.size+'px'
pelota.style.left = (SCREEN.width - PELOTA.size) / 2 + 'px'
//pelota.style.buttom = PELOTA.y0+'px'

// desestructuramos y0 y v. definimos y, v0.
let { y0, v, v0, y } = PELOTA
// guardamos valor inicial de v en v0
v0 = v 

// Movimiento
const tiraParaArriba = () => {
  // ecuación de TV - posición (y) vs tiempo (t)
  y = y0 + v*t - 1/2*10*t*t

  // cambiar posición (y) de la pelota
  pelota.style.bottom = y + 'px'

  // incremento de tiempo
  t += .15

  // resetar t al volver a la posición inicial (Rebote)
  if (y < y0) {
    t = 0
    v = v / 1.4 // disminuir impulso 

    // la pelota no rebota más
    if (v <= 0.01) {
      //empezar = false // detener loop
      v = v0 // volver a darle impulso
    }
    console.log(v)
  }
}

// Loop
let t = 0
let empezar = true

setInterval(() => {
  if (empezar) tiraParaArriba()
}, 1000/60)

