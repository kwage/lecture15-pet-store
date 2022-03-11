// WEATHER ENDPOINT: https://handlers.education.launchcode.org/static/weather.json
// CAT FACTS ENDPOINT: https://cat-fact.herokuapp.com/facts

window.addEventListener('load', async function() {

    let myCatFact = await getCatFact();
    let myDidYouKnowEle = document.getElementById('animal-fact');
    myDidYouKnowEle.innerText = myCatFact;

});

async function getCatFact() {
    let myCatFact = await fetch('https://cat-fact.herokuapp.com/facts')
    .then(function(response) {
        return response.json();
    }).then(function(response) {
        // response is an array of cat fact objects
        let randoInt = Math.floor(Math.random() * (response.length));
        return response[randoInt].text;
    });
    return myCatFact;
}



    /*await fetch('https://handlers.education.launchcode.org/static/weather.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log('This response has returned!');
    });
    console.log('Im here!'); */