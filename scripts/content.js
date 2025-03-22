
chrome.runtime.onMessage.addListener((message) => {
    if (message.submissionStatus && message.questionId) {
      console.log("Received submission status:", message.submissionStatus);
      console.log("Received question ID:", message.questionId);
  
    }
  });
  