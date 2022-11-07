const $ = (s, a) => document[`querySelector${a ? 'All' : ''}`](s);

const timeGet = {
    usertime: () => new Date().toLocaleTimeString(),
    userlocale: () => (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language,
    gmttime: () => new Date().toLocaleTimeString(timeGet.userlocale(), { timeZone: "Europe/London" }),
    tz: () => Intl.DateTimeFormat().resolvedOptions().timeZone
}

function updateFields() {
    let tufields = $('.tu-field', 1);
    for (const tufield of tufields)
        tufield.innerHTML = timeGet[tufield.dataset.value]()
}

function updateOutput() {
    let output = $('#gdt-output'), outputlabel = $('#gdt-output-label');
    outputlabel.style.opacity = 1;
    let date = new Date($('#gdt-selectDatetime').value).getTime() / 1000;
    let type = $('#gdt-selectType').value;
    let d = `&lt;t:${date}:${type}>`;
    output.innerHTML = d;
}

$('#gdt-today').onclick = () => {
    let date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    $('#gdt-selectDatetime').value = date.toISOString().slice(0, 16);
    
    updateOutput()
}

setInterval(updateFields, 300)
oninput = updateOutput