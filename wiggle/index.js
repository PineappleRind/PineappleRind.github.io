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

    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand("copy");
        } catch (err) {
            console.error(err)
        }

        document.body.removeChild(textArea);
    }

    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(
            function() {
                console.log("Async: Copying to clipboard was successful!");
            },
            function(err) {
                console.error("Async: Could not copy text: ", err);
            }
        );
    }
    onclick = e => {
        if (e.target.classList.value == 'output') {
            console.log(e.target.classList)
            console.log('OUCH')
            copyTextToClipboard($('textarea').value)
            let toast = new Toast({
                title: 'Copied!',
                description: 'Successfully copied to clipboard',
                duration: 5
            })
            toast.initialize()
            setTimeout(function() {
                toast.show()
            }, 1)
        }
    }
    $('.output').onclick = () => {

    }
    let toastIsShowing = false

    function Toast(obj) {
        this.title = obj.title
        this.description = obj.description
        this.duration = obj.duration * 1000
        this.initialize = function() {
            toastIsShowing = true
            let toastcont = $('.toastcont')
            let toast = document.createElement('DIV')
            toast.classList.add('toast')
            toast.innerHTML = `<b>${this.title}</b>
        <p>${this.description}</p>`
            toastcont.appendChild(toast)
            this.element = toast
            return this
        }
        this.show = function() {
            let toaststruct = this
            setTimeout(function() { toaststruct.element.classList.add('showing') })
            setTimeout(function() {
                toaststruct.element.classList.remove('showing')
                setTimeout(function() {
                    toaststruct.element.remove()
                }, 500)
            }, this.duration)
            return this
        }
    }
})();