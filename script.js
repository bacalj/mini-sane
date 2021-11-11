let helloendpoint = 'https://mini-sane.netlify.app/.netlify/functions/hello-world'

async function helloWorld(){
    await axios.get(helloendpoint).then((r) => {
        console.log(r)
        document.querySelector('#results').innerHTML = r;
    })
    .catch((e)=> console.log(e))
}