//write a program that stores the number of occurrences
//of words in a text. Your program should display each word in a text just once as
//well as the number of times the word occurs in the text.

const { Dictionary } = require("../../lib/dictionary")
let text = 'Pola como estas yo bien'

function numberOccurrences(txt) {
    let newDictionary = new Dictionary()
    const splitText = txt.toLowerCase().split(' ')
    for (let i = 0; i < splitText.length; i++) {
        let value = 0
        for(let j = 0; j<splitText.length; j++){
            if(splitText[i]==splitText[j]){
                value++
            }
        }
        newDictionary.add(splitText[i],value)
    }
    return newDictionary.showAll()

}
numberOccurrences(test)
