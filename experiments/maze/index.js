function createBlankMaze() {
    var e, t, o = document.createElement("table"),
        a = document.createElement("tbody");
    for (e = 1; e <= mazeHeight; e += 1) {
        var n = document.createElement("tr");
        for (t = 1; t <= mazeWidth; t += 1) {
            var r = document.createElement("td");
            1 == e && 1 == t ? (r.setAttribute("type", "start"), r.style.backgroundColor = "rgb(0,244,0)") : e == mazeHeight && t == mazeWidth && (r.style.backgroundColor = "rgb(0,244,0)", r.setAttribute("type", "finish")), r.setAttribute("id", "cell_" + e + "_" + t), n.appendChild(r)
        }
        a.appendChild(n)
    }
    o.appendChild(a), document.getElementById("maze_container").appendChild(o)
}
var mazeWidth = 40,
    mazeHeight = mazeWidth;

function init() {
    createBlankMaze(), paint()
}

function paint() {
    var e = 1,
        t = 1;
    for (addRoute(e, t, !1, "rgb(240, 0, 0)"), n = 1; n < mazeWidth * mazeHeight - 1; n += 1) {
        "true" == document.getElementById("cell_" + e + "_" + t).getAttribute("occupied") && addRoute(e, t, !0, "rgb(240, 120, 0)"), t == mazeWidth ? (e += 1, t = 1) : t += 1
    }
}

function addRoute(e, o, a, n) {
    for (var r, l, d = ["right", "bottom", "left", "top"], m = {
            right: mazeWidth,
            bottom: mazeHeight,
            left: 0,
            top: 0
        }, c = [], h = [], g = e, b = o, u = document.getElementById("cell_" + g + "_" + b), s = 0, p = 0, f = 3 * mazeWidth * mazeHeight; s < mazeWidth * mazeHeight - 1 && !((p += 1) >= f);) {
        for (c = [], i = 0; i < d.length; i += 1) {
            switch (d[i]) {
                case "right":
                    l = document.getElementById("cell_" + g + "_" + (b + 1));
                    break;
                case "left":
                    l = document.getElementById("cell_" + g + "_" + (b - 1));
                    break;
                case "bottom":
                    l = document.getElementById("cell_" + (g + 1) + "_" + b);
                    break;
                case "top":
                    l = document.getElementById("cell_" + (g - 1) + "_" + b)
            }
            if (null != l && "true" != l.getAttribute("occupied"))
                for (t = 0; t < m[d[i]]; t += 1) c.push(d[i])
        }
        if (0 != c.length) {
            switch (r = c[Math.floor(Math.random() * Math.floor(c.length))], 0 == a ? u.style["border-" + r] = "none" : "right" == r && b == mazeWidth - 1 && g == mazeHeight || "bottom" == r && b == mazeWidth && g == mazeHeight - 1 || (u.style["border-" + r] = "none"), r) {
                case "right":
                    b += 1, m.left += 1, m.right -= 1;
                    break;
                case "bottom":
                    g += 1, m.top += 1, m.bottom -= 1;
                    break;
                case "left":
                    b -= 1, m.left -= 1, m.right += 1;
                    break;
                case "top":
                    g -= 1, m.top -= 1, m.bottom += 1
            }
            switch (h.push([g, b]), u = document.getElementById("cell_" + g + "_" + b), r) {
                case "right":
                    u.style["border-left"] = "none";
                    break;
                case "bottom":
                    u.style["border-top"] = "none";
                    break;
                case "left":
                    u.style["border-right"] = "none";
                    break;
                case "top":
                    u.style["border-bottom"] = "none"
            }
            if (g == mazeHeight && b == mazeWidth) break;
            u.setAttribute("occupied", "true"), r, s += 1
        } else {
            if (1 == a) return !1;
            h.splice(h.length - 1, 1), g = h[h.length - 1][0], b = h[h.length - 1][1], u = document.getElementById("cell_" + g + "_" + b)
        }
    }
}
window.addEventListener("load", init);function createBlankMaze() {
    var e, t, o = document.createElement("table"),
        a = document.createElement("tbody");
    for (e = 1; e <= mazeHeight; e += 1) {
        var n = document.createElement("tr");
        for (t = 1; t <= mazeWidth; t += 1) {
            var r = document.createElement("td");
            1 == e && 1 == t ? (r.setAttribute("type", "start"), r.style.backgroundColor = "rgb(0,244,0)") : e == mazeHeight && t == mazeWidth && (r.style.backgroundColor = "rgb(0,244,0)", r.setAttribute("type", "finish")), r.setAttribute("id", "cell_" + e + "_" + t), n.appendChild(r)
        }
        a.appendChild(n)
    }
    o.appendChild(a), document.getElementById("maze_container").appendChild(o)
}
var mazeWidth = 40,
    mazeHeight = mazeWidth;

function init() {
    createBlankMaze(), paint()
}

function paint() {
    var e = 1,
        t = 1;
    for (addRoute(e, t, !1, "rgb(240, 0, 0)"), n = 1; n < mazeWidth * mazeHeight - 1; n += 1) {
        "true" == document.getElementById("cell_" + e + "_" + t).getAttribute("occupied") && addRoute(e, t, !0, "rgb(240, 120, 0)"), t == mazeWidth ? (e += 1, t = 1) : t += 1
    }
}

function addRoute(e, o, a, n) {
    for (var r, l, d = ["right", "bottom", "left", "top"], m = {
            right: mazeWidth,
            bottom: mazeHeight,
            left: 0,
            top: 0
        }, c = [], h = [], g = e, b = o, u = document.getElementById("cell_" + g + "_" + b), s = 0, p = 0, f = 3 * mazeWidth * mazeHeight; s < mazeWidth * mazeHeight - 1 && !((p += 1) >= f);) {
        for (c = [], i = 0; i < d.length; i += 1) {
            switch (d[i]) {
                case "right":
                    l = document.getElementById("cell_" + g + "_" + (b + 1));
                    break;
                case "left":
                    l = document.getElementById("cell_" + g + "_" + (b - 1));
                    break;
                case "bottom":
                    l = document.getElementById("cell_" + (g + 1) + "_" + b);
                    break;
                case "top":
                    l = document.getElementById("cell_" + (g - 1) + "_" + b)
            }
            if (null != l && "true" != l.getAttribute("occupied"))
                for (t = 0; t < m[d[i]]; t += 1) c.push(d[i])
        }
        if (0 != c.length) {
            switch (r = c[Math.floor(Math.random() * Math.floor(c.length))], 0 == a ? u.style["border-" + r] = "none" : "right" == r && b == mazeWidth - 1 && g == mazeHeight || "bottom" == r && b == mazeWidth && g == mazeHeight - 1 || (u.style["border-" + r] = "none"), r) {
                case "right":
                    b += 1, m.left += 1, m.right -= 1;
                    break;
                case "bottom":
                    g += 1, m.top += 1, m.bottom -= 1;
                    break;
                case "left":
                    b -= 1, m.left -= 1, m.right += 1;
                    break;
                case "top":
                    g -= 1, m.top -= 1, m.bottom += 1
            }
            switch (h.push([g, b]), u = document.getElementById("cell_" + g + "_" + b), r) {
                case "right":
                    u.style["border-left"] = "none";
                    break;
                case "bottom":
                    u.style["border-top"] = "none";
                    break;
                case "left":
                    u.style["border-right"] = "none";
                    break;
                case "top":
                    u.style["border-bottom"] = "none"
            }
            if (g == mazeHeight && b == mazeWidth) break;
            u.setAttribute("occupied", "true"), r, s += 1
        } else {
            if (1 == a) return !1;
            h.splice(h.length - 1, 1), g = h[h.length - 1][0], b = h[h.length - 1][1], u = document.getElementById("cell_" + g + "_" + b)
        }
    }
}
window.addEventListener("load", init);