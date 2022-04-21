
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
    haikuArr.forEach((element, index) => {
        
        url.searchParams.set('sp', element.value)
        console.log(url.toString())

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

    // Wait so it does not read an empty array
    setTimeout(() => {
        if (syllableArr[0] === 5 && syllableArr[1] === 7 && syllableArr[2] === 5) {
            document.querySelector('.haikuResult').innerHTML = "It's a haiku!"
        }
        else {
            document.querySelector('.haikuResult').innerText = "Try again =/"
        }
    }, 700)
}
    
