
document.querySelector('button').addEventListener('click', checkIfHaiku)

function checkIfHaiku() {

    let line1 = document.querySelector('.line1').value
    let line2 = document.querySelector('.line2').value
    let line3 = document.querySelector('.line3').value

    let url = new URL('words?','https://api.datamuse.com/words')
        
    url.searchParams.append('sp', line1)
    console.log(url.toString())
    // put user form input into values
    // maybe create an array with the strings from the input and then map them into syllables?

    // fetch('https://api.datamuse.com/words?sp=this%20is%20a%20fake%20haiku&qe=sp&md=s')
    
fetch(url.toString())
    .then (res => res.json())
    .then (data => {
        console.log(data[0].word + " num syllables:" + data[0].numSyllables);
        console.log(data)
    })
}
