const fs = require('fs');
const { Dictionary } = require('../../lib/dictionary');
//Include in your program the ability to display
//one phone number, display all phone numbers, add new phone numbers, remove
//phone numbers, and clear out the list of numbers.

const text = fs.readFileSync('Numbers.txt', { encoding: 'utf8', flag: 'r' })
const data = text.split('\r\n')
const newDictionary = new Dictionary()

//fill the new dictionary
function fillDictionary(dic, data) {
   for (let i = 0; i < data.length; i++) {
      let splitted = data[i].split(', ')
      dic.add(splitted[0], splitted[1])
   }
   return dic
}
fillDictionary(newDictionary, data)

//display all numbers
function showAllNum(dic) {
   const data = dic.datastore
   if (data) {
      Object.keys(data).forEach(function (key, index) {
         console.log(data[key]);
      })
   }
   else {
      console.log('empty dictionary')
   }
}

//display a number
function showNumber(dic, name) {
   let number = dic.find(name)
   if (number) {
      console.log(number)
   } else {
      console.log('number not found')
   }
}

//add new phone number
function newPhoneNumber(number, name, dic) {
   dic.add(name, number)
   console.log('new phone number added!')
}

//delete phone number
function deleteNumber(number, dic) {
   const keys = Object.keys(dic.datastore)
   let i = 0
   let notFound = true
   while (notFound) {
      let currKey = dic.find(keys[i])
      if (currKey == number) {
         dic.remove(keys[i])
         console.log('deleted')
         notFound = false
      }
      i++
   }
}

//clear all phone numbers
function clearNumbers(dic) {
   Object.keys(dic.datastore).forEach(function clearNum(data, index) {
      dic.remove(keys[i])
   })
}
clearNumbers(newDictionary)