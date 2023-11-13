document.addEventListener("DOMContentLoaded", (event)=>{

    searchButton = document.querySelector(".search")

    searchButton.addEventListener("click", async (event)=>{
        event.preventDefault()
        const result = await fetch("http://localhost/info2180-lab4/superheroes.php", {
            method: "GET"
        })
        const data = await result.text()
        alert(data)
    })

    const form = document.querySelector("#form")

    form.addEventListener("submit", async (event)=>{
        event.preventDefault()
        const formData = new FormData(event.target)
        const name = formData.get("name")
        const result = await fetch(`http://localhost/info2180-lab4/superheroes.php?name=${name}`)
        console.log(name)
        const data = await result.json()
        console.log(data, typeof(data))
        const resultcont = document.querySelector(".result")
        if(Object.keys(data).length > 1){
            Object.keys(data).forEach(key =>{
                let listElement = document.createElement("li")
                listElement.innerHTML = data[key]["alias"]
                resultcont.append(listElement)
            })
        }
    })
})