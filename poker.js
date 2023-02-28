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

let NUM_TRIALS = 100 //This is the number of hands to be generated and checked
let NUM_flush = 0 //number of times a flush appears.
let NUM_fullhouse = 0 
let NUM_ThreeOfAkind = 0 
let NUM_FourOfAKind = 0 
let NUM_straight = 0 
let NUM_straight_flush = 0 
let hand = []




function three_checks(){ //This code will check for fullhouse, three of a kind and four of a kind all at once
    let array = [] 
    let count = 0
    for (let i = 0; i < hand.length; i++){
        if (hand[i][1] == 0){
            array.push("10") 
        }else{
            array.push(hand[i][0]) //Creates new array with just numbers 
        }
    }
    array.sort() // duplicate ranks will move next to each other
    for (let j = 0; j <array.length; j++){
        for (let k = j + 1; k < array.length; k++){
            if (array[j] == array[k]){
                count++
                if (count == 4){
                    console.log("this is a fullhouse")
                    NUM_fullhouse++
                    return NUM_fullhouse 
                } else if (count == 3){
                    console.log("this is three of a kind") 
                    NUM_ThreeOfAkind++
                    return NUM_ThreeOfAkind 
                } else if (count == 6 ){
                    console.log("this is four of a kind") 
                    NUM_FourOfAKind++
                    return NUM_FourOfAKind
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



function straight(){ //checks for straight and straigh flush
    let array = []
    let count = 0
    let straight_count = 0
    for (let i = 0; i < hand.length; i++){
        if (hand[i][1] == 0){
            array.push("10") 
        }else if (hand[i][0] === "J"){
            array.push("11")
        }else if (hand[i][0] == "Q"){
            array.push("12")
        }else if(hand[i][0] == "K"){
            array.push("13")
        }else if(hand[i][0] == "A"){
            array.push("14")
        }else{
            array.push(hand[i][0]) //Creates new array with just numbers 
        }
    }
    let array_int = array.map(str => { //converts array from string to integer
        return Number(str);
      });
    array_int.sort((a,b)=>b-a) //sorts array decending
    for (let j = 0; j < array_int.length; j++){
        for(let k = j + 1; k < array_int.length; k++){
            if ((array_int[j] - array_int[k] == 1) && (hand[j][1] == hand[k][1])){ 
                count++
                if (count >= 4){
                    console.log("This is a straight flush")
                    NUM_straight_flush++
                    return NUM_straight_flush //if so the straight flush variable will be updated so it is seperate to flush and straigh variable 
                }
                }else if(array_int[j] - array_int[k] == 1){
                    straight_count++ 
                    if (straight_count == 4){
                        console.log("this is a straight")
                        NUM_straight++
                        return NUM_straight
                }
                break
            }
        }
    }
    
}


for(let i=0; i<NUM_TRIALS; i++){ // loop to check each hand againt the special card functions
    hand = drawFiveCards()
    console.log(hand)
    flush()
    three_checks()
    straight()
}
