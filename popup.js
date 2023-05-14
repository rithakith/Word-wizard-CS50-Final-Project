document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search").addEventListener("click", function() {
        var word = document.getElementById("word").value;
        if (word.trim() === '') {
          document.getElementById("required").textContent = "*Input is required.";
          return;
        }
        var url = "https://www.google.com/search?q=" + word + "+definition";
        chrome.tabs.create({url: url});
    });
});
