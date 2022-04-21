
document.querySelector('button').addEventListener('click', checkIfHaiku)

let syllableArr = [0, 0, 0]
function checkIfHaiku() {

    // Create array from user input
    let haikuArr = [];
    
    haikuArr.push(document.querySelector('.line1'))
    haikuArr.push(document.querySelector('.line2'))
    haikuArr.push(document.querySelector('.line3'))

    // Creates URL with the parameters to search up the syllable metadata
    let url = new URL('/words', 'https://api.datamuse.com')
    url.searchParams.set('qe', 'sp')
    url.searchParams.set('md', 's')
    
    // Declare empty array to store syllable values to use after loop
    // Refactor without.forEach()    
    haikuArr.forEach((element, index) => {
        
        url.searchParams.set('sp', element.value)
        console.log(url.toString())

        // Update it to map to the line number, it doesn't do that right now
        // Template literal? and connect it with HTML

        fetch(url.toString())
            .then(res => res.json())
            .then(data => {
            
                if (data.length === 0) {
                    document.querySelector(`#line${index+1}Syllables`).innerText = "0 syllables"
                } 
                else if (index === 0) {
                    document.querySelector('#line1Syllables').innerText = `${data[0].numSyllables} syllables`

                    syllableArr[index] = data[0].numSyllables

                    if (data[0].numSyllables === 5) {
                        document.querySelector('#line1Syllables').style = 'background: green;'
                    }
                    else {
                        document.querySelector('#line1Syllables').style = 'background: red;'
                    }
                }
                else if (index === 1) {
                    document.querySelector('#line2Syllables').innerText = `${data[0].numSyllables} syllables`

                    syllableArr[index] = data[0].numSyllables

                    if (data[0].numSyllables === 7) {
                        document.querySelector('#line2Syllables').style = 'background: green;'
                    }
                    else {
                        document.querySelector('#line2Syllables').style = 'background: red;'
                    }
                }
                else if (index === 2) {
                    document.querySelector('#line3Syllables').innerText = `${data[0].numSyllables} syllables`

                    syllableArr[index] = data[0].numSyllables

                    if (data[0].numSyllables === 5) {
                        document.querySelector('#line3Syllables').style = 'background: green;'
                    }
                    else {
                        document.querySelector('#line3Syllables').style = 'background: red;'
                    }                
                }
            })
    })  
    setTimeout(() => {
        if (syllableArr[0] === 5 && syllableArr[1] === 7 && syllableArr[2] === 5) {
            document.querySelector('.haikuResult').innerText = "It's a haiku!"
        }
        else {
            document.querySelector('.haikuResult').innerText = "Try again =/"
        }
    }, 500)
}
    

//THIS IS SOME ASYNC. FUTURE YOU, YOU GOT THIS
//     console.log(syllableArr)
// if(syllableArr === [5, 7, 5]){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
    
//Simplified...? Version
// if (data.length === 0){
//     document.querySelector(`#line${index+1}Syllables`).innerText = "0 syllables"
//     } 

//     else{
//     document.querySelector(`#line${index+1}Syllables`).innerText = `${data[0].numSyllables} syllables`
//         syllableArr[index] = data[0].numSyllables
//     }
//     //update everything in here for now

    // if((document.querySelectorAll('span').style = 'background: green;') == true){
        
    // }
    
    //ORIGINAL TEXT
    // else{
    //     document.querySelector(`#line${index+1}Syllables`).innerText = `${data[0].numSyllables} syllables`
        

    // put user form input into values
    // maybe create an array with the strings from the input and then map them into syllables?
    //loop over array [line1, line2, line3]
    //make a loop to iterate over each line

    // fetch('https://api.datamuse.com/words?sp=this%20is%20a%20fake%20haiku&qe=sp&md=s')
    
//     let syllables = await fetch(url.toString())
//     .then (res => res.json())
//     .then (data => {
//         console.log(data[0].word + " num syllables:" + data[0].numSyllables);
//         console.log(data)
//     })

// })

// if (data.length === 0){
//     document.querySelector(`#line${index+1}Syllables`).innerText = "0 syllables"
// } 
// else if(index === 0){
// document.querySelector('#line1Syllables').innerText = `${data[0].numSyllables} syllables`
//     if(data[0].numSyllables === 5){
//     document.querySelector('#line1Syllables').style = 'background: green;'
//     }
//     else {
//         document.querySelector('#line1Syllables').style = 'background: red;'
//     }

// }
// else if(index === 1){
//     document.querySelector('#line2Syllables').innerText = `${data[0].numSyllables} syllables`
//     if(data[0].numSyllables === 7){
//         document.querySelector('#line2Syllables').style = 'background: green;'
//     }
//     else {
//             document.querySelector('#line2Syllables').style = 'background: red;'
//     }
// }
// else if(index === 2){
//         document.querySelector('#line3Syllables').innerText = `${data[0].numSyllables} syllables`
//         if(data[0].numSyllables === 5){
//             document.querySelector('#line3Syllables').style = 'background: green;'
//         }
//         else {
//                 document.querySelector('#line3Syllables').style = 'background: red;'
//         }