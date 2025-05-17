// Query Selectors
const doc = document;
const getId = "getElementById";
const urlList = doc[getId]("urlList");
const openBtn = doc[getId]("openBtn");
const clearBtn = doc[getId]("clearBtn");

// Open Button
openBtn.addEventListener("click", function () {
   if (urlList.value === "") {
      window.alert("Please enter at least one URL.");
      return false;
   } else {
      openBtn.innerHTML = "Opening...";
      openBtn.disabled = true;
      setTimeout(() => {
         const urls = urlList.value
            .split("\n")
            .map(url => url.trim())
            .filter(url => url.length > 0);

         urls.forEach(url => {
            let finalUrl = url;
            if (!/^https?:\/\//i.test(url)) {
               finalUrl = "https://" + url;
            }
            window.open(finalUrl, "_blank");
         });

         openBtn.innerHTML = "Open";
         openBtn.disabled = false;
      }, 1000);
   }
});

// Clear Button
clearBtn.addEventListener("click", function () {
   if (urlList.value === "") {
      window.alert("Please enter at least one URL.");
      return false;
   } else {
      clearBtn.innerHTML = "Clearing...";
      clearBtn.disabled = true;
      setTimeout(() => {
         urlList.value = "";
         clearBtn.innerHTML = "Clear";
         clearBtn.disabled = false;
      }, 1000);
   }
});