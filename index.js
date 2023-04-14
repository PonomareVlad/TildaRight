function TildaRight() {
    const node = document.getElementById("tildacopy");
    if (node) node.style.display = "none";
}

addEventListener("load", function() {
    setTimeout(TildaRight, 100);
    setTimeout(TildaRight, 1000);
    setTimeout(TildaRight, 10000);
});

setTimeout(TildaRight, 100);
setTimeout(TildaRight, 1000);
setTimeout(TildaRight, 10000);
