const maxBpm = 140
const minBpm = 75

const roots = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#' , 'G', 'G#']
const scales = ['MAJOR', 'MINOR', 'IONIAN', 'DORIAN', 'PHRYGIAN', 'LYDIAN', 'MIXOLYDIAN', 'AEOLIAN', 'LOCRIAN']
const sounds = ['GUITAR', 'BASS', 'PERCUSSION', 'PAD', 'SYNTH', 'ARP', 'ACC', 'BOW', 'COIN', 'FX', 'LEAD', 'FUZZ', 'HARMONICS','EBOW','FREEZE', 'LAP STEEL']

const rootEl = document.getElementById('root-text')
const scaleEl = document.getElementById('scale-text')
const bpmEl = document.getElementById(
'bpm-text')
const soundEl = document.getElementById('sound-text')
const cubeEls = document.querySelectorAll('cube')
const btnEl = document.getElementById('new-button')

const getIndex = (num) => {
  let result = Math.floor(Math.random() * num)
  return result
}

const rollDice = () => {

  rootEl.textContent = roots[getIndex(roots.length)]
  scaleEl.textContent = scales[getIndex(scales.length)]
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
  console.log(bpmVal)
}

btnEl.addEventListener('click', (evt) => {
  rollDice()
})

rollDice()