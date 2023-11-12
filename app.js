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
})