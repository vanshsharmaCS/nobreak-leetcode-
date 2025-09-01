console.log("🚀 LeetCode WA Hider running...");

// Function: hides only Wrong Answer test case details
const hideWrongAnswerDetails = () => {
  const hasWrongAnswer = document.body.innerText.includes("Wrong Answer"); //  sb se phele yha se ye page read kr lega to fir m wrong answe kinal lunga
  
  if (hasWrongAnswer) {
    console.log("❌ Wrong Answer detected → Checking test case details...");

    document.querySelectorAll("div").forEach(el => {
      if (!el.dataset.hiddenByExt) {
        const text = el.innerText || "";

        if (
          (text.startsWith("Input") || text.startsWith("Output")) &&
          text.includes("Expected")
        ) {
          el.style.display = "none";   
          el.dataset.hiddenByExt = "true";
        }

        if (text.startsWith("Expected")) {
          el.style.display = "none";   
          el.dataset.hiddenByExt = "true";
        }
      }
    });
  } else {
    console.log("✅ No Wrong Answer → Nothing hidden.");
  }
};

hideWrongAnswerDetails();

const observer = new MutationObserver(() => {
  hideWrongAnswerDetails();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
