
document.querySelector('button').addEventListener('click', checkIfHaiku)

function checkIfHaiku() {


    //Create array from user input
    let haikuArr = [];

    haikuArr.push(document.querySelector('.line1'))
    haikuArr.push(document.querySelector('.line2'))
    haikuArr.push(document.querySelector('.line3'))


    let url = new URL('/words','https://api.datamuse.com')
    
    haikuArr.forEach((element, index) => {
        url.searchParams.set('sp', element.value)
        url.searchParams.set('qe', 'sp')
        url.searchParams.set('md', 's')
        console.log(url.toString())

        //update it to map to the line number, it doesn't do that right now
        //template literal? and connect it with HTML
    
        fetch(url.toString())
            .then (res => res.json())
            .then (data => {
                document.querySelector(`#line${index+1}Syllables`).innerText = data[0].numSyllables
            })


    })
    
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

}
