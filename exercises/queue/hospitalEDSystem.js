const { PriorityQueue } = require("../../lib/PriorityQueue");
const { Queue } = require("../../lib/queue");
const prompt = require('prompt-sync')();
let patients = new PriorityQueue();

function hospitalEDSystem() {
    let noExit = true
    while (noExit) {
        let question = prompt('Choose a number for your operation: ' + '\n' +
            '1. Patient enters ED.' + '\n' +
            '2. Patient is seen by doctor.' + '\n' +
            '3. Display list of patients waiting to be seen.' + '\n' +
            '4. Exit'+'\n')
        if (question == 1) {
            addPatient()
        }
        else if (question == 2) {
            currentPatient()
        }
        else if (question == 3) {
            nextPatients()
        }
        else if (question == 4) {
            noExit = false
        }
        else {
            console.log('Your option is not valid. Try again')
        }
    }
}

function addPatient() {
    const name = prompt('Enter the name of the patient: ')
    const code = prompt("Enter the patient's priority code: ")
    patients.enqueue({
        'name': name,
        'code': code
    })
}
function currentPatient() {
    if (patients.length() > 0) {
        let seen = patients.dequeue()
        console.log("Patient being treated: " + seen[0].name);
    }
    else {
        console.log("There's no patient being treated")
    }
}
function nextPatients() {
    if (patients.length() > 0) {
        console.log('Patients waiting to be seen:')
        console.log(patients.toString());
    }
    else {
        console.log("there's no patients to be seen")
    }
}
hospitalEDSystem()

