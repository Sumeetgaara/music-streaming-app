var connection = new signalR.HubConnectionBuilder().withUrl("/musicHub").build();
var baseurl = "https://w.soundcloud.com/player/?url=";
var endurl = "&amp;auto_play=true&single_active=false";

connection.on("StartMusic", function (link) {
    var finalUrl = baseurl + link + endurl;
    document.getElementById('musicframe1').src = finalUrl;
});

connection.start().then(function () {
   
}).catch(function (err) {
    return console.error(err.toString());
});