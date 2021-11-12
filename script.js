let helloendpoint = 'https://mini-sane.netlify.app/.netlify/functions/hello-world'

async function getFromFunction(){
    await axios.get(helloendpoint).then((r) => {
        console.log(r)
        document.querySelector('#results').innerHTML = JSON.stringify(r.data)
    })
    .catch((e)=> console.log(e))
}