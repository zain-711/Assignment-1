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

let NUM_TRIALS = 2 //This is the number of hands to be generated and checked
let NUM_flush = 0 //number of times a flush appears.
let NUM_fullhouse = 0 //number of times a full house appears

let hand = []


// hand = drawFiveCards()
// console.log(hand.join(' '));

function full_house(){
    let array = [] 
    for (let i = 0; i < hand.length; i++){
        if (hand[i][1] == 0){
            array.push("10") 
        }else{
            array.push(hand[i][0]) //Creates new array with just numbers 
        }
    }
    array.sort((a, b) => a - b) //sorts so that duplicates are next to each other in accending order
    console.log(array)
    if ((array[0] == array[1]) && (array[2] == array[3]) && (array[3] == array[4])){ //checks if the first two are the same along with the next three
        console.log("this is full house")
        NUM_fullhouse++
        return NUM_fullhouse 
    }
}



function flush(){
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





for(let i=0; i<NUM_TRIALS; i++){ // loop to check each hand againt the special card functions
    hand = drawFiveCards()
    console.log(hand)
    flush()
    full_house()
}


//set suits value in nested array equal to 5 different variables and compare them
// or
//seperate nested array tyop just suits and numbers

//ADD SUITS TO A NEW ARRAY WITHIN THE FUNCTION