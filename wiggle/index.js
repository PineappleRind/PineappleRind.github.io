(function() {
    function $(id) { return document.querySelector(id) }
    var Maker = {
        input: $('#input'),
        output: $('.output'),
        small: $('small'),
        params: {
            height: $('#height'),
            width: $('#width'),
            ease: $('#ease')
        },
    }

    if (window.Worker) {
        var worker = new Worker('worker.js');
    } else return alert('Wiggle maker is not supported on your browser =(')


    let loading = false
    oninput = () => {
        loading = true
        $('.loading').classList.add('showing')
        worker.postMessage([
            Maker.params.height.value,
            Maker.params.width.value,
            Maker.input.value,
            Maker.params.ease.value
        ])
        worker.onmessage = output => {
            output = output.data
            Maker.params.height.nextElementSibling.innerHTML = `Wiggle height (${Maker.params.height.value})`
            Maker.params.width.nextElementSibling.innerHTML = `Wiggle width (${Maker.params.width.value})`
            let ccount = output.replaceAll('<br>', ' ').length
            Maker.small.innerHTML = ccount + ' characters'
            Maker.output.innerHTML = output
            if (loading === true) {
                $('.loading').classList.remove('showing')
                loading = false
            }
        }

    }
})();
