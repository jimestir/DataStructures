const prompt = require('prompt-sync')
const prom = prompt()
const {LList} = require('../../lib/linkedList.js')
let listGrades = new LList()
function testGradeTracker(){
    let noExit = true
    while(noExit){
        let question = prom('Select an option:'+
        '1.Add a new grade'+
        '2.Show the list of grades'+
        '3.Exit ')
        if(question == 1){
            const gradeInput = prom('Insert the grade to track')
            listGrades.insert(gradeInput,"head")
        }
        else if(question == 2){
            console.log('List of grades:')
            listGrades.display()
        }
        else if(question == 3){
            noExit=false
        }
        else {
            console.log('Your option is not valid')
        }
    }
}
testGradeTracker()