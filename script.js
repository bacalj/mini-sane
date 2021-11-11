async function pingTheFunction(){
    const result = await axios.get('https://mini-sane.netlify.app/.netlify/functions/hello-world')
    .then((r) => {
        console.log(r)
        document.querySelector('#results').innerHTML = r.data.message;
    }).catch((e)=> console.log(e))
}