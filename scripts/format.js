

const format = (unicodes) => {
    let f = unicodes.map(e => {
        return e.split(', ')[0]
    })

    let u = [...new Set(f)].map(e => {
        return parseInt(e.replace('U+', ''), 16)
    })
    u.sort()
    let ranges = []
    let singles = []

    for (let i = 0; i < u.length; i++) {
        if (u[i - 1] + 1 == u[i] || u[i + 1] - 1 == u[i]) {
            ranges[ranges.length] = u[i]
        } else {
            singles[singles.length] = u[i]
        }
    }

    let r = []

    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i - 1] == (ranges[i] - 1)) {
            r[r.length - 1] = [r[r.length - 1][0], ranges[i]]
        } else {
            r[r.length] = [ranges[i], null];
        }
    }

    let sin = singles.map(e => `\\x{${e.toString(16)}}`)
    let ran = r.map(e => `\\x{${e[0].toString(16)}}-\\x{${e[1].toString(16)}}`)

    return sin.join('') + ran.join('')
}

module.exports = format;