/**
 * 
 * @param {message to encode} s 
 * @param {shift characters} k 
 * @returns encoded string
 */
function caesarCipher(s, k) {
    //Start with a empy encoded string
    let newText = '';
    //Work with lower case letter, and handle upper case letters. 
    const alphaebets = [...'abcdefghijklmnopqrstuvwxyz'];
    //Update k if the k is greater than 26. 
    if (k > 26) {
        k = k % 26
    }
    //Loop througth the string and for each index find it in the alphabets array and shit it by the k integer
    for (let i = 0; i < s.length; i++) {
        const letter = s.charAt(i);
        //Get if value does exsist within the index array
        if (!alphaebets.includes(letter.toLowerCase())) {
            newText += letter;
            continue
        }
        //Get the index of the letter in the alphabet
        let indexLetter = alphaebets.findIndex((item) => item === letter.toLowerCase())
        //Add the k integer to the indexLetter
        if (alphaebets[indexLetter + k]) {
            //Check of letter is upper or lower case
            if(isUpper(letter)){
                //withi range
                newText += alphaebets[indexLetter + k].toLocaleUpperCase();
            }else{
                //withi range
                newText += alphaebets[indexLetter + k];   
            }
        } else {
            //Check of letter is upper or lower case
            if(isUpper(letter)){
                //Is upper convert it to upper case.
                newText += alphaebets[indexLetter + k -  26].toLocaleUpperCase();
            }else{
                //isl lower keep it that way.
                newText += alphaebets[indexLetter + k - 26];   
            }
        }
    }
    return newText;
}

function isUpper(ch) {
    return (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90)
}


console.log(caesarCipher('hello world', 5))