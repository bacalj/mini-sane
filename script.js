let helloendpoint = 'https://mini-sane.netlify.app/.netlify/functions/hello-world'

async function helloWorld(){
    await axios.get(helloendpoint).then((r) => {
        document.querySelector('#results').innerHTML = r.data.message;
    })
    .catch((e)=> console.log(e))
}