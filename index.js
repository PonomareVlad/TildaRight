function TildaRight() {
    if (/bot|google|baidu|bing|msn|teoma|slurp|yandex/i.test(navigator.userAgent)) return;
    const node = document.getElementById("tildacopy");
    if (node) node.style.display = "none";
}

addEventListener("load", TildaRight);
TildaRight();
