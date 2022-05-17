(function () {
    function $(id) { return document.querySelector(id) }
    var Maker = {
        input: $('#input'),
        output: $('.output'),
        charCount: $('#charCount'),
        params: {
            height: $('#height'),
            width: $('#width'),
            ease: $('#ease'),
            bezier: $('#bezierInput')
        },
    }

    if (window.Worker) {
        var worker = new Worker('/wiggle/worker.js');
    } else return alert('Wiggle maker is not supported on your browser =(')


    let loading = false
    oninput = () => {
        loading = true
        $('.loading').classList.add('showing')
        const { height, width, ease, bezier } = Maker.params
        if (ease.value === 'bezier') $('#bezier').style.display = 'block'
        else $('#bezier').style.display = 'none'
        worker.postMessage([
            height.value, width.value, input.value,
            ease.value === 'bezier' ? parseBezierObject(bezier.value) : ease.value
        ])
        worker.onmessage = output => {
            output = output.data
            height.nextElementSibling.innerHTML = `Wiggle height (${height.value})`
            width.nextElementSibling.innerHTML = `Wiggle width (${width.value})`
            let ccount = output.replaceAll('<br>', ' ').length
            Maker.charCount.innerHTML = ccount + ' characters'
            Maker.output.innerHTML = output
            if (loading === true) {
                $('.loading').classList.remove('showing')
                loading = false
            }
        }

    }

    function parseBezierObject(str) {
        str = str.replaceAll(' ', '').split(',')
        return {
            points: str
        }
    }

    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand("copy");
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
            () => console.log("Async: Copying to clipboard was successful!"),
            err => console.error("Async: Could not copy text: ", err)
        );
    }
    onclick = e => {
        if (e.target.classList.value == 'output') {
            copyTextToClipboard($('textarea').value)
            let toast = new Toast({
                title: 'Copied!',
                description: 'Successfully copied to clipboard',
                duration: 5
            }).initialize()
            setTimeout(() => toast.show())
        }
    }
    let toastIsShowing = false

    function Toast(obj) {
        this.title = obj.title
        this.description = obj.description
        this.duration = obj.duration * 1000

        this.initialize = function () {
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
        this.show = function () {
            setTimeout(() => toaststruct.element.classList.add('showing'))
            setTimeout(() => toaststruct.element.classList.remove('showing'), this.duration)
            setTimeout(() => toaststruct.element.remove(), 500)
            return this
        }
    }
})();
