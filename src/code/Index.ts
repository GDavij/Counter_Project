/*
    Counter Project ; JS Part; V: 0.1
*/
var RunsBy //Interval 


//Getta Buttons
const ButtonRun_able = document.getElementById('RunButton') as HTMLButtonElement
const ButtonReset_able = document.getElementById('ResetButton') as HTMLButtonElement
const ButtonPause_able = document.getElementById('PauseButton') as HTMLButtonElement

//Set Time
var time = [0, 0, 0, 0]

//Set Output Data (time)
const outputTime = document.querySelector('#NumberData') as HTMLParagraphElement

//Set Sum Time (Run)

const SummerTime = () => {
if(time[3] == 60){
    ++time[2]
    time[3] = 0 
}else{
    ++time[3] 
}
if(time[2] == 60){
    ++time[1]
    time[2] = 0
}else if(time[1] == 60){
    ++time[0]
    time[1] = 0
}
}


//set RenderTime
const RenderTime = () => {
    if(time[0] < 99){    
outputTime.innerText = `${('00' + String(time[0])).slice(-2)} :  ${ ('00' + String(time[1])).slice(-2) } : ${('00' +  String(time[2])).slice(-2)} : ${ ('00' + String(time[3])).slice(-2)}`
    }else{
outputTime.innerText = ` +99 : ${('00' + String(time[1])).slice(-2)} : ${ ('00' + String(time[2])).slice(-2)} : ${( '00' + String(time[3])).slice(-2)}`
    }
}
RenderTime()


//Set Run
const Run = document.querySelector('#RunButton').addEventListener('click' , (ev) => {
    ButtonRun_able.disabled = true
 ButtonReset_able.disabled = false
 ButtonPause_able.disabled = false
   RunsBy = setInterval( () => {
        SummerTime()
        RenderTime()
    },100)// by what i know that is one milliseconds

})


//Set Reset
const Reset = document.querySelector('#ResetButton').addEventListener('click' , () => {
time = [0,0,0,0]
RenderTime()
if(ButtonRun_able.disabled == true){
    ButtonReset_able.disabled = false
}else{
    ButtonReset_able.disabled = true
}
})


//Set Pause
const Pause = document.querySelector('#PauseButton').addEventListener('click' , () => {
    clearInterval(RunsBy)
    RenderTime()
    ButtonRun_able.disabled = false
 ButtonReset_able.disabled = false
 ButtonPause_able.disabled = true

})
