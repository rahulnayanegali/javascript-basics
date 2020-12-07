// Basic

// console.log('Before Timer')
// setTimeout(function(){
//     console.log('Inside Timer')
//     // above line async because it Doesn't block the code 
//     //  execution untill 5 seconds.    
// }, 5000);
// console.log('After Timer')

const request = fetch('http://restcountries.eu/rest/v2/name/portugal');
console.log(request) 


const getCountryData = function(country) {
    fetch(`http://restcountries.eu/rest/v2/name/${country}`)
        .then(function(response){
            console.log(response)
            return response.json()
        }).then(function(data){
            console.log(data)
        })
    };

    getCountryData('portugal')
