//Create a Person class that stores a person’s name and their gender. Create a list of
//at least 10 Person objects. Write a function that displays all the people in the list of
//the same gender.

const {List} = require('../../lib/List.js')

function person(name,gender) {
        this.name = name
        this.gender = gender
    }

const person1 = new person('Maria','femenino')
const person2 = new person('Alejandro','masculino')
const person3 = new person('Indi','femenino')
const person4 = new person('Vane','femenino')
const person5 = new person('Edgar','masculino')
const person6 = new person('Jose','masculino')
const person7 = new person('Gabriel','masculino')
const person8 = new person('Gabriela','femenino')
const person9 = new person('Teresa','femenino')
const person10 = new person('Ali','masulino')

let personList = new List()
personList.append(person1)
personList.append(person2)
personList.append(person3)
personList.append(person4)
personList.append(person5)
personList.append(person6)
personList.append(person7)
personList.append(person8)
personList.append(person9)
personList.append(person10)

function displayByGender(list,gender){
  
    for(list.front();list.currPos()<list.length();list.next()){
        if(list.getElement()['gender']==gender){
            console.log(list.getElement()['name'])
        }    
    }
}
console.log(displayByGender(personList,'masculino'));
