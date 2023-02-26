function drawFiveCards() {
let suits = ["H", "S", "D", "C"]
let values = ["A","K", "Q","J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]
let deck = []
let hand = []

for (let i=0; i<suits.length; i++){
    for (let j=0; j<values.length;j++) {
        deck.push(values[j] + suits[i])
    }
}

for(let i=0; i<5; i++){
    let index = Math.floor(Math.random() * deck.length)
    let card = deck[index]
    hand.push(card)
    deck.splice(index, 1)
}
    return hand
}

let NUM_TRIALS = 5 //This is the number of hands to be generated and checked
let NUM_flush = 0 //number of times a flush appears.
let NUM_fullhouse = 0 //number of times a full house appears
let NUM_ThreeOfAkind = 0 //number of times three of a kind appears
let hand = []


// hand = drawFiveCards()
// console.log(hand.join(' '));

function full_house(){ //2 ranks are the same and the other three are aswell.
    let array = [] 
    let count = 0
    for (let i = 0; i < hand.length; i++){
        if (hand[i][1] == 0){
            array.push("10") 
        }else{
            array.push(hand[i][0]) //Creates new array with just numbers 
        }
    }
    for (let j = 0; j <array.length; j++){
        for (let k = j + 1; k < array.length; k++){
            if (array[j] == array[k]){
                count++
                if (count == 4){
                    console.log("this is a fullhouse")
                    NUM_fullhouse++
                    return NUM_fullhouse 
                }
            }
        }
    }
}



function flush(){ //five cards of the same suit
    let count = 0
    for (let i = 0; i < hand.length; i++){ //finding duplicates by comparing each element against each other
        for (let j = i + 1 ; j < hand.length; j++) {
            if (hand[i][1] === hand[j][1]) { //If the first hand has the same suit then counter increases
                count++
                if (count >= 4){
                    console.log("This is a flush") //if count is 4 (all suits are the same)
                    NUM_flush++
                    return NUM_flush 
                }
            }else{
                break
            }
        }
        break   
    }
}

function three_of_a_kind(){ //three cards of the same rank and two other random ones
    let array = [] 
    let count = 0
    for (let i = 0; i < hand.length; i++){
        if (hand[i][1] == 0){
            array.push("10") 
        }else{
            array.push(hand[i][0]) //Creates new array with just numbers 
        }
    }
    for (let j = 0; j <array.length; j++){
        for (let k = j + 1; k < array.length; k++){ //again checking each value against each other
            if (array[j] == array[k]){ //counting the number of repeats 
                count++
                if (count == 3){
                    console.log("this is three of a kind")
                    NUM_ThreeOfAkind++
                    return NUM_ThreeOfAkind 
                }
            }
        }
    }
}
//this function is similar to the full house so i just used the same code and changed the logic towards the end.



for(let i=0; i<NUM_TRIALS; i++){ // loop to check each hand againt the special card functions
    hand = drawFiveCards()
    console.log(hand)
    flush()
    full_house()
    three_of_a_kind()
}
