const searchBtn = document.querySelector('#search');
const country = document.querySelector('#country');
const result = document.querySelector('#result')
// const setUpEvent = async () =>  {
        // searchBtn.addEventListener('click', async() => {
    //     const countryName = 'India';
    //     const fetchUrl = `https://restcountries.com/v3.1/name/{name}?    fullText=true`;
    //     console.log(fetchUrl)
    //     const response = await fetch (fetchUrl) 
    //     const json = await response.json()

    //     return json.name

    // })
// }



searchBtn.addEventListener('click', async() => {
    const countryName = country.value;
    const fetchUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    // console.log(fetchUrl)
    fetch(fetchUrl).then((response) => response.json()).then((data) => {
        // console.log(data[0])
        // console.log(data[0].capital[0])
        // console.log(data[0].flags.svg)
        // console.log(data[0].name.common)
        // console.log(data[0].continents[0])
        // console.log(data[0].population)
        // console.log(Object.keys(data[0].currencies)[0])
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        // console.log(Object.values(data[0].languages).toString().split(',').join( ))

        result.innerHTML = `
            <img src= "${data[0].flags.svg}"
            class = "flagImage">
            <h2>${data[0].name.common}</h2>

            <div class= "wrapper">
                <div class = "dataWrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
                <div class = "dataWrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
                <div class = "dataWrapper">
                    <h4>Population:</h4>
                    <span>${(data[0].population / 1000000).toFixed(2)}</span>
                </div>
                <div class = "dataWrapper">
                    <h4>Currencies:</h4>
                    <span>${Object.keys(data[0].currencies)[0]}</span>
                </div>
                <div class = "dataWrapper">
                    <h4>Language:</h4>
                    <span>${Object.values(data[0].languages).toString().split(', ').join( )}</span>
                </div>
            </div>

            
        `
    }).catch(() => {
        if(countryName.length === 0) {
            result.innerHTML = `
                <h3>The input field cannot be empty</h3>
            `
        }else {
            result.innerHTML = `
                <h3>Please enter a valid country name</h3>
            `
        }
    })
    
    

})