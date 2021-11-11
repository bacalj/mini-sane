let resultsArea = document.querySelector('#results')
let helloendpoint = 'https://mini-sane.netlify.app/.netlify/functions/hello-world'

async function pingTheFunction(){
    await axios.get(helloendpoint).then((r) => {
        console.log(r)
        resultsArea.innerHTML = r.data.message;
    })
    .catch((e)=> console.log(e))
}