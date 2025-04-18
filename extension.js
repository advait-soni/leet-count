const API_BASE_URL = "http://localhost:8000"

document.addEventListener('DOMContentLoaded', () => {
    let a = new Date()
    let date = a.toDateString().slice(4)
    fetch(`${API_BASE_URL}/api/questions/${date}`).then(res => res.json()).then((data) => {
        console.log('data', data)
        document.getElementById('cnt').innerText = `Q's : ${data.num || 0}`
    })

    fetch(`${API_BASE_URL}/api/questions/all`).then(res => res.json()).then((data) => {
        console.log('data', data)
        document.getElementById('total').innerText = `total : ${data.count}`
    })
})