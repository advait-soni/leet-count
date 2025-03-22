let fetchingSubmission = new Set();

chrome.webRequest.onCompleted.addListener(
  async (details) => {


      if (fetchingSubmission.has(details.url)) return;


      fetchingSubmission.add(details.url);

      try {
        const response = await fetch(details.url);
        const data = await response.json();
        console.log("LeetCode Submission Status:", data);

        chrome.tabs.sendMessage(details.tabId, {
          submissionStatus: data,
        });
      } catch (error) {
        console.error("Error fetching submission status:", error);
      } finally {
        fetchingSubmission.delete(details.url);
      }

  },
  { urls: ["https://leetcode.com/submissions/detail/*/check/"] }
);
