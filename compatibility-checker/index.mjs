import { tokenizer, tokTypes } from './node_modules/acorn';

function parse(input) {
    let tokenized = tokenizer(input, {
        ecmaVersion: "latest"
    });
    let token, result = [],
        topush
    do {
        token = tokenized.getToken()
        if (token.type.label === 'string' || token.type.label == 'eof') continue
        if (!token.value) topush = token.type.label
        else topush = token.value
        result.push(topush)
    } while (token.type !== tokTypes.eof)
    return result
}

function generateBrowserVersions(input) {
    var browsers = {
        "IE": {
            version: 0,
            restrictions: []
        }, "Edge": {
            version: 0,
            restrictions: []
        }, "Firefox": {
            version: 0,
            restrictions: []
        }, "Chrome": {
            version: 0,
            restrictions: []
        }, "Chrome for Android": {
            version: 0,
            restrictions: []
        }, "Safari": {
            version: 0,
            restrictions: []
        }, "Safari on iOS": {
            version: 0,
            restrictions: []
        }, "Opera": {
            version: 0,
            restrictions: []
        }, "Samsung Internet": {
            version: 0,
            restrictions: []
        },
    }
    let detected = []
    if (input.includes('let') || input.includes('const')) {
        detected.push('let/const')
        browsers = setVersion(browsers, 'IE', 11, 'Let/const: Unexpected scope behaviour in for loops')
        browsers = setVersion(browsers, 'Edge', 12)
        browsers = setVersion(browsers, 'Firefox', 44)
        browsers = setVersion(browsers, 'Chrome', 49, 'Let/const: works in v41-49 only in strict mode')
        browsers = setVersion(browsers, 'Chrome for Android', 97);
        browsers = setVersion(browsers, 'Safari', 11, 'Let/const: Unexpected scope behaviour in for loops using v10')
        browsers = setVersion(browsers, 'Safari on iOS', 11, 'Let/const: Unexpected scope behaviour in for loops using v10');
        browsers = setVersion(browsers, 'Opera', 36, 'Let/const: works in v28-36 only in strict mode');
        browsers = setVersion(browsers, 'Samsung Internet', 5, 'Let/const: works in v4 only in strict mode');
    }
    if (input.includes('=>')) {
        detected.push('arrow functions')
        browsers = setVersion(browsers, 'IE', false)
        browsers = setVersion(browsers, 'Edge', 97)
        browsers = setVersion(browsers, 'Firefox', 22)
        browsers = setVersion(browsers, 'Chrome', 45)
        browsers = setVersion(browsers, 'Chrome for Android', 97)
        browsers = setVersion(browsers, 'Safari', 10)
        browsers = setVersion(browsers, 'Safari on iOS', 10)
        browsers = setVersion(browsers, 'Opera', 32)
        browsers = setVersion(browsers, 'Samsung Internet', 5)
    }
    return { detected, browsers }
}
function setVersion(browsers, browser, version, restrictions) {
    if (restrictions) browsers[browser].restrictions.push({ restriction: restrictions })
    if (!version && browsers[browser].version != 0) return browsers
    if (browsers[browser].version < version)
        browsers[browser].version = version
    else return browsers

    return browsers
}

function generateHTMLPage(returned) {
    let result = `<h1>Detected the following</h1>
`
    returned.detected.forEach(function (val) {
        result += val + `<br>`
    })
    result += `<h1>Browser compatibility</h1>
<p class="muted">Your code is compatible with...</p>
`
    for (const browser in returned.browsers) {
        let cur = returned.browsers[browser]
        let restricts = ``
        for (const restriction in cur.restrictions) {
            restricts += `  <li>${cur.restrictions[restriction].restriction}</li>
`
        }
        result += `
<div class="browser">
    <h1>${browser} version ${cur.version} and above</h1>
    <p>Restrictions</p>
    <ul>
    ${restricts}    </ul>
</div>
`
    }
    return result
}

console.log(
    generateHTMLPage(generateBrowserVersions(
        parse(`
            let func = () => {
                yah = true;
            }
        func()`)
    )
    ))