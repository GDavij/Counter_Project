/*
    Counter Project ; JS Part; V: 0.1
*/
var countStart, TimeGlobal = [0, 0, 0, 0] , pointCount = 1
var OtherActions = {
    addCheckPoint: () => {
        const Inner = document.getElementById("RegisterPoint")
        Inner.value += `\n${pointCount}°Point: ${( '00' + TimeGlobal[0]).slice(-2)}:${( '00' + TimeGlobal[1]).slice(-2)}:${('00' + TimeGlobal[2]).slice(-2)}:${('00' + TimeGlobal[3]).slice(-2)}`
        ++ pointCount
    },
    resetCheckPoint: () => {
        const Clear = document.getElementById("RegisterPoint").value = "CheckPoints"
        pointCount = 1 
    },
}
var PrincipalActions = {
    StartCount: () => {
        document.getElementById("StartButton").disabled = true
        countStart = setInterval(function IntervalCount() {
            PrincipalActions.addCount()
        }, 10)//The Best Number i found to represent a second 
    },
    addCount: () => {
        ++ TimeGlobal[3] 
        if (TimeGlobal[3] == 100) {
            ++TimeGlobal[2]
            TimeGlobal[3] = 0
            if (TimeGlobal[2] == 60) {
               ++TimeGlobal[1]
                TimeGlobal[2] = 0
                if (TimeGlobal[1] == 60) {
                    if(TimeGlobal[0] >= 100){
                        TimeGlobal[0] = "++"
                    }else{
                    ++TimeGlobal[0]
                    TimeGlobal[1] = 0
                    }
                }
            }
        }
        const innerTime = document.getElementById("TimeShow")
        //console.log(TimeGlobal[0])
        innerTime.innerText = ` ${('00' + TimeGlobal[0]).slice(-2)}:${('00' + TimeGlobal[1]).slice(-2)}:${('00' + TimeGlobal[2]).slice(-2)}:${('00' + TimeGlobal[3]).slice(-2)}`
    },
    ResetCount: () => {
        TimeGlobal = [0, 0, 0, 0]
        const resetOutput = document.getElementById("TimeShow").innerText = "00:00:00:00"
    },
    PauseCount: () => {
        clearInterval(countStart)
     document.getElementById("StartButton").disabled = false
    },
}
function OtherActionsServer(req) {
    try {
        switch (req) {
            case 'ADP': OtherActions.addCheckPoint() //Add Point
                break;
            case 'RSP': OtherActions.resetCheckPoint() //Reset Point
                break;
            case 'CCL': OtherActions.NewOutputTime() //Change Counter Limit
                break;
            default: throw new Error("Action Not Find Errorcode:0000 ")
        }
    } catch (e) {
        console.log(e)
    }
}
function PrincipalActionsServer(req) {
    try {
        switch (req) {
            case 'STA': PrincipalActions.StartCount() //StartCount
                break;
            case 'RSC': PrincipalActions.ResetCount() //ResetCount
                break;
            case 'PAC': PrincipalActions.PauseCount() // PauseCount
        }
    } catch (e) {
        console.log(e)
    }
}