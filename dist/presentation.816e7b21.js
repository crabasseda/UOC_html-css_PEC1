"use strict";
document.getElementById("moreInfoBtn")?.addEventListener("click", function() {
    const moreInfo = document.getElementById("moreInfo");
    console.log("hola");
    if (moreInfo) {
        if (moreInfo.style.display === "none") moreInfo.style.display = "block";
        else moreInfo.style.display = "none";
    }
});

//# sourceMappingURL=presentation.816e7b21.js.map
