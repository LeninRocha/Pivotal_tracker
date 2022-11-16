async function gatinho(){
    const response = await fetch("https://api.thecatapi.com/v1/images/search")
    const person = await response.json()
    return person
}
gatinho()
.then((data)=>{
    console.log(data)
    const gatinho = document.getElementById('api-de-gatinho')
    gatinho.innerHTML= `<img src=${data[0].url} height=${data[0].height} width=${data[0].width} alt=${data[0].id}>`
})