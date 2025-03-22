let fetchingSubmission = new Set();

chrome.webRequest.onCompleted.addListener(
  async (details) => {
    if (fetchingSubmission.has(details.url)) return;

    fetchingSubmission.add(details.url);

    try {
      const response = await fetch(details.url);
      const data = await response.json();
      console.log("LeetCode Submission Status:", data.status_msg);
      console.log("LeetCode question id", data.question_id);

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0] && tabs[0].id >= 0) {
          chrome.tabs.sendMessage(tabs[0].id, {
            submissionStatus: data.status_msg,
            questionId: data.question_id,
          });
        } else {
          console.error("No active tab found or tabId is invalid");
        }
      });
    } catch (error) {
      console.error("Error fetching submission status:", error);
    } finally {
      fetchingSubmission.delete(details.url);
    }
  },
  { urls: ["https://leetcode.com/submissions/detail/*/check/"] }
);
