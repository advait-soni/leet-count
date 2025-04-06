import { API_BASE_URL } from "../config"

chrome.runtime.onMessage.addListener(message => {
  if (message.submissionStatus && message.questionId) {
    console.log("Received submission status:", message.submissionStatus)
    console.log("Received question ID:", message.questionId)
    let a = new Date()
    let date = a.toDateString().slice(4)
    let id = message.questionId

    fetch(`${API_BASE_URL}/api/questions`, {
      method: "POST",
      body: JSON.stringify({
        date: date,
        id: id,
      }),
    })
  }
})
