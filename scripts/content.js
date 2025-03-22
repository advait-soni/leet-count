

let count = 0

const st = new Set()


chrome.runtime.onMessage.addListener((message) => {
    if (message.submissionStatus && message.questionId) {
      console.log("Received submission status:", message.submissionStatus);
      console.log("Received question ID:", message.questionId);
      st.add(message.questionId)
      count = st.size
    }
  })
  

