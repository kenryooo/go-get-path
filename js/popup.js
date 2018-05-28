document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ChromePlugin-goget").addEventListener("click", function(){
         
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {},
            function(msg) {
		if (!msg) {
	            document.getElementById("ChromePlugin-result-disp").innerHTML = 'This page is not a target WEB site.';
		} else {
		    document.getElementById("ChromePlugin-result-disp").innerHTML = '"' + msg + '": copied!';
		}
            });
        });
    });
});
