const { default: axios } = require("axios");

let helloendpoint = 'https://mini-sane.netlify.app/.netlify/functions/hello-world'

async function helloWorld(){
    await axios.get(helloendpoint).then((r) => {
        console.log(r)
        document.querySelector('#results').innerHTML = r.data;
    })
    .catch((e)=> console.log(e))
}

async function clientGetJoke(){
    await axios.get('https://icanhazdadjoke.com').then((r) => console.log(r))
}