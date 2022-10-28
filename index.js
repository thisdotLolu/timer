const durationInput=document.querySelector('#duration')
const startButton=document.querySelector('#start')
const pauseButton=document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton,{
    onStart(){
        console.log('timer,started')
    },
    onTick(){
        console.log('timer just ticked down')
    },
    onComplete(){
        console.log('Timer is completed')
    }
});


