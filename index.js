/bot|google|baidu|bing|msn|teoma|slurp|yandex/i.test(navigator.userAgent) ||
addEventListener('load', function () {
    setTimeout(function () {
        if (document.getElementById('copyright'))
            document.getElementById('copyright').style.display = 'none'
    }, 100)
})