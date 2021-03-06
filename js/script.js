// Global Vars and arrays:
const maxBpm = 140
const minBpm = 75
let scaleIdx = 0
const roots = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#' , 'G', 'G#']
const scales = ['MAJOR', 'MINOR', 'DORIAN', 'PHRYGI', 'LYDIAN', 'MIXO', 'LOCRI']
const sounds = ['GUITAR', 'BASS', 'PERC', 'PAD', 'SYNTH', 'ARP', 'ACC', 'BOW', 'COIN', 'FX', 'LEAD', 'FUZZ', 'HARMONIX','EBOW','FREEZE', 'LAP STEEL']
const scaleTones = ['T - T - S - T - T - T - S', 'T - S - T - T - S - T - T', 'T - S - T - T - T - S - T', 'S - T - T - T - S - T - T', 'T - T - S - T - S - T - T', 'T - T - S - T - T - S - T', 'S - T - T - S - T - T - T']

// DOM elements:
const cubeEls = document.querySelectorAll('cube')
const rootEl = document.getElementById('root-text')
const scaleEl = document.getElementById('scale-text')
const bpmEl = document.getElementById('bpm-text')
const soundEl = document.getElementById('sound-text')
const btnEl = document.getElementById('new-button')
const tonesEl = document.getElementById('scale-tones')

btnEl.addEventListener('click', (evt) => {
    rollDice()
  })

// Random Index Generator Function:
const getIndex = (num) => {
  let result = Math.floor(Math.random() * num)
  scaleIdx = result
  return result
}

// New Roll Function:
const rollDice = () => {
  rootEl.textContent = roots[getIndex(roots.length)]

  scaleEl.textContent = scales[getIndex(scales.length)]
  tonesEl.textContent= scaleTones[scaleIdx]

  soundEl.textContent = sounds[getIndex(sounds.length)]
  
  let bpmVal = getIndex(maxBpm)
  
  if (bpmVal > maxBpm) {
    console.log(`High! ${bpmVal}`)
    bpmVal = maxBpm
  } else if (bpmVal < minBpm) {
    console.log(`Low! ${bpmVal}`)
    bpmVal = minBpm
  }
  
  bpmEl.textContent = bpmVal
}

// Initial choices:
rollDice()