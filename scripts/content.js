const API_BASE_URL = "http://localhost:8000"


chrome.runtime.onMessage.addListener(message => {
  if (message.submissionStatus && message.questionId) {
    console.log("Received submission status:", message.submissionStatus)
    console.log("Received question ID:", message.questionId)
    let a = new Date()
    let date = a.toDateString().slice(4)
    let id = message.questionId || ''
    console.log('date', date)
    console.log('hello')
    console.log('id', id)
    fetch(`${API_BASE_URL}/api/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        id: id,
      }),
    })
  }
})
