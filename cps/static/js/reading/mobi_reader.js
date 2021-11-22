var reader;

$(document).ready(function() {
    "use strict";

    var filepath = document.getElementById("mobiContainer").getAttribute("file")

    var request = new XMLHttpRequest();
    request.open("GET", filepath);
    request.responseType = "arraybuffer";
    request.addEventListener("load", function() {
        if (request.status >= 200 && request.status < 300) {
            new MobiFile(request.response).render_to("content");
        } else {
            console.warn(request.statusText, request.responseText);
        }
    });
    request.send();
    
});