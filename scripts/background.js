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

      if (data.question_id && data.status_msg) {
        chrome.tabs.sendMessage(details.tabId, {
          submissionStatus: data.status_msg,
          questionId: data.question_id,
        });
      }
    } catch (error) {
      console.error("Error fetching submission status:", error);
    } finally {
      fetchingSubmission.delete(details.url);
    }
  },
  { urls: ["https://leetcode.com/submissions/detail/*/check/"] }
);
