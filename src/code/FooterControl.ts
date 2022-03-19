//Create Checkpoint Obj Contructor
function CreateCheckpointObject(hash, time){
   this.hash = `#${hash}`
   this.time = time
}


//Getta CheckPoints Output 
const CheckpointsOutputDesk = document.querySelector("#CheckpointsOutputDesk")
const CheckpointsOutputSmartp = document.querySelector("#CheckpointsOutputSmartp")
var HashTime = 1
var CheckPoints = []


//Create the Add Checkpoints function
const AddChecks = document.getElementById("AddCheckpoints").addEventListener('click', () => {
   //Get Checks 
   const timeGetta = document.getElementById("NumberData").textContent
   CheckPoints.push( new CreateCheckpointObject(HashTime,timeGetta))
   ++HashTime
   RenderChecks('Render+', CheckPoints)
})


//Create the Remove Checkpoints Function
const RemoveChecksD = document.getElementById("RemCheckpoints").addEventListener('click', () => {
   RenderChecks('Render-', null)
})


//Create the Render Function
const RenderChecks = (query, inquery) => {
if(query == 'Render+'){
   CheckpointsOutputDesk.innerHTML = ""
   CheckpointsOutputSmartp.innerHTML = ""
   for(let z = 0 ; z < inquery.length ; ++z){
      CheckpointsOutputDesk.innerHTML += `<p> ${inquery[z].hash} => ${inquery[z].time} </p>`
      CheckpointsOutputSmartp.innerHTML += `<p> ${inquery[z].hash} => ${inquery[z].time} </p>`
   }
}else{
   HashTime = 1
   CheckpointsOutputDesk.innerHTML = ""
   CheckpointsOutputSmartp.innerHTML = ""
   CheckPoints = []
}
}