fetch('https://rickandmortyapi.com/api/character', {
    "method": "GET",
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    data => {
        console.log(data)
        for(object in data.results ){
            console.log(data.results[object].name)
            console.log(data.results[object].image)
            let x = document.createElement("H5")
            const div=document.createElement("div")

            x.innerText=data.results[object].name
            div.appendChild(x)
            let y =document.createElement("IMG")
            y.src = data.results[object].image
            div.appendChild(y)
            const maindiv=document.getElementById("a1")
            maindiv.appendChild(div)
            

        }
    }

).catch((err) => {
    console.log('rejected', err)
});
