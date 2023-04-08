console.log("ouo");
const copyButton = document.getElementById("copyButton");
const textToCopy = document.getElementById("textToCopy");
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(textToCopy.innerText);
    console.log("文字已複製到剪貼板");
  } catch (err) {
    console.error("複製失敗:", err);
  }
});
