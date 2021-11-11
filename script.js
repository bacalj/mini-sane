let helloendpoint = 'https://mini-sane.netlify.app/.netlify/functions/hello-world'

async function getFromFunction(){
    await axios.get(helloendpoint).then((r) => {
        console.log(r)
        document.querySelector('#results').innerHTML = r.data;
    })
    .catch((e)=> console.log(e))
}

async function clientGetJoke(){
    await axios.get('https://icanhazdadjoke.com', { headers: { "Accept": "text/plain" } })
    .then((r) => {
        console.log(r)
        document.querySelector('#results').innerHTML = r.data;
    })
    
}