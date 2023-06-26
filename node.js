
function calculateAge(name ,birthYear){
    //Get the current year 
    const date = new Date();

    const year = date.getFullYear();

    const age = year - birthYear;

    return `${name} is ${age} year old`
}
//

console.log(calculateAge( 'Tenai Naikuni',2010));