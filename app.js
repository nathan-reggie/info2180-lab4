document.addEventListener("DOMContentLoaded", (event)=>{

    searchButton = document.querySelector(".search")

    searchButton.addEventListener("click", async (event)=>{
        event.preventDefault()
        const result = await fetch("http://localhost:8888/info2180-lab4/superheroes.php", {
            method: "GET"
        })
        const data = await result.text()
        alert(data)
    })

    const form = document.querySelector("#form")

    form.addEventListener("submit", async (event)=>{
        event.preventDefault()
        const resultcont = document.getElementById("result")
        resultcont.replaceChildren()
        const formData = new FormData(event.target)
        const name = formData.get("name")
        const result = await fetch(`http://localhost:8888/info2180-lab4/superheroes.php?name=${name}`)
        console.log(name)
        const data = await result.json()
        console.log(data, typeof(data))
        if(name.length == 0){
            Object.keys(data).forEach(key =>{
                let listElement = document.createElement("li")
                listElement.innerHTML = data[key]["alias"]
                resultcont.append(listElement)
            })
        }
        else{
            resultcont.innerHTML = `<h3>${data.alias}</h3><h4>${data.name}</h4><p>${data.biography}`
        }
    })
})