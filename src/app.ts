document.getElementById("moreInfoBtn")?.addEventListener("click", function () {
  const moreInfo = document.getElementById("moreInfo");
  if (moreInfo) {
    if (moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
    } else {
      moreInfo.style.display = "none";
    }
  }
});
