/bot|google|baidu|bing|msn|teoma|slurp|yandex/i.test(navigator.userAgent) ||
addEventListener('load', function () {
    setTimeout(function () {
        if (document.getElementById('tildacopy'))
            document.getElementById('tildacopy').style.display = 'none'
    }, 100)
})
