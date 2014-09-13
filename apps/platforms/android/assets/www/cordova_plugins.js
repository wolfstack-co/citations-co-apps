cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.devgeeks.Canvas2ImagePlugin/www/Canvas2ImagePlugin.js",
        "id": "org.devgeeks.Canvas2ImagePlugin.Canvas2ImagePlugin",
        "clobbers": [
            "window.canvas2ImagePlugin"
        ]
    },
    {
        "file": "plugins/co.wolfstack.share/www/share.js",
        "id": "co.wolfstack.share.Share",
        "clobbers": [
            "window.navigator.share"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.devgeeks.Canvas2ImagePlugin": "0.5.1",
    "co.wolfstack.share": "0.1.1"
}
// BOTTOM OF METADATA
});