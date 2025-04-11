const emailForm = document.querySelector("#email-signup-form")
const searchForm = document.querySelector("#search-form")

const pratos = {
    "Arroz e feijão": "#arrozfeijao",
    "Macarrão": "#macarrao",
    "Executivo": "#executivo",
    "Nhoque": "#nhoque",
    "Lasanha": "#lasanha",
}

function setElementFocus(id){
    window.location.href = id
    const elemento = document.querySelector(id)
    elemento.classList.add("focus")
    setTimeout(() => {
        elemento.classList.remove("focus")
    }, 2000)
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const searchInput = document.querySelector("#search-input")
    const valor = searchInput.value.toLowerCase()
    const prato = Object.keys(pratos).find((p) => p.toLowerCase().includes(valor))
    
    if (prato) {
        setElementFocus(pratos[prato])
    } else {
        alert("Prato não encontrado!")
    }
})

async function share() {
    await navigator.share({
        title: "Recipes+",
        text: `Confira essas receitas incríveis`,
        url: "https://exape-10-04-2025.netlify.app/", 
    })
}

emailForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailInput = document.querySelector("#email-input")
    if(!emailInput.value || !emailInput.value.includes("@")) {
        alert("Por favor, insira um endereço de e-mail válido.")
        return
    }
    const emailValue = emailInput.value
    alert(`Obrigado por se inscrever, ${emailValue}! Compartilhe com um amigo: `)
    share()
    emailInput.value = ""
})