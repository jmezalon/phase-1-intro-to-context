// Your code here
 function createEmployeeRecord(arrOfStr) {
     let employeeObj = {}  
     
     employeeObj.firstName = arrOfStr[0]
     employeeObj.familyName = arrOfStr[1]
     employeeObj.title = arrOfStr[2]
     employeeObj.payPerHour = arrOfStr[3]
     employeeObj.timeInEvents = []
     employeeObj.timeOutEvents = []

    return employeeObj
 }


 function createEmployeeRecords(arrOfarr) {
     
    return arrOfarr.map(array => createEmployeeRecord(array))    
 }

 

 function createTimeInEvent(obj, dateStamp) {

    obj.timeInEvents.push({
        type: 'TimeIn', 
        date: dateStamp.slice(0, 10), 
        hour: parseInt(dateStamp.slice(-4), 10)
    })

    return obj   
 }


 function createTimeOutEvent(obj, dateStamp) {

    obj.timeOutEvents.push({
        type: 'TimeOut',
        date: dateStamp.slice(0, 10),
        hour: parseInt(dateStamp.slice(-4), 10) 
    })

    return obj
 }


function hoursWorkedOnDate(recordObj, date) {
   
   let employeeHourIn = recordObj.timeInEvents.find(dates => dates.date === date)
   let employeeHourOut = recordObj.timeOutEvents.find(dates => dates.date === date)
   let hoursWorked = employeeHourOut.hour - employeeHourIn.hour
   
     

     return hoursWorked / 100
}



function wagesEarnedOnDate(recordObj, date) {
   let employeePayRate = recordObj.payPerHour
    
   return hoursWorkedOnDate(recordObj, date) * employeePayRate
    
}

function allWagesFor(employeeRecord) {
    
   let wages = employeeRecord.timeInEvents.map(dates => dates.date).reduce((accumulator, dates) => accumulator + wagesEarnedOnDate(employeeRecord, dates), 0)

   return wages
}


function calculatePayroll(employeeRecords) {   

   return employeeRecords.reduce((accumulator, wages) => accumulator + allWagesFor(wages), 0)

}