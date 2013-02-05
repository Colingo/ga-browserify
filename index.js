var uuid = require("node-uuid")
var window = require("global/window")

var ga = require("./lib/ga")

var _gaq = window._gaq
var _gat = window._gat

module.exports = createTracker

function createTracker(id) {
    var tracker
    _gaq.push(function () {
        tracker = _gat._createTracker(id, uuid())
    })
    return tracker
}
