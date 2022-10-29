class Timer{
    constructor(durationInput,startButton,pauseButton,callbacks){
        this.durationInput=durationInput;
        this.startButton=startButton;
        this.pauseButton=pauseButton;
        if(callbacks){
            this.onStart=callbacks.onStart;
            this.onTick=callbacks.onTick;
            this.onComplete=callbacks.onComplete;
        }
        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click',this.pause)
    }

    start=()=>{
        // console.log('time to start timer')
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        console.log(this)
        this.tick()
        this.interval=setInterval(this.tick,50);
    }
    tick=()=>{
        // console.log('tick')
        // const timeRemaining=this.timeRemaining;
        if(this.timeRemaining<=0){
            this.pause()
        }
        else{
            this.timeRemaining = this.timeRemaining-0.05
            if(this.onTick){
                this.onTick(this.timeRemaining)
            }
        }
        //setter              //getter
    }
    pause=()=>{
        clearInterval(this.interval)
        if(this.onComplete){
            this.onComplete()
        }
    };
    //getter
    get timeRemaining(){
        return parseFloat(this.durationInput.value)
    };

    //setter
    set timeRemaining(time){
        this.durationInput.value=time.toFixed(2);
    }
}