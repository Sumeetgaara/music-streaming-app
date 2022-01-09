var connection = new signalR.HubConnectionBuilder().withUrl("/musicHub").build();
var baseurl = "https://w.soundcloud.com/player/?url=";
var endurl = "&amp;auto_play=true&single_active=false";

//Disable the send button until connection is established.
document.getElementById("btn-music").disabled = true;

connection.on("StartMusic", function (link) {
    var finalUrl = baseurl + link + endurl;
    document.getElementById('musicframe').src = finalUrl;
});

connection.start().then(function () {
    document.getElementById("btn-music").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("btn-music").addEventListener("click", function (event) {
    var link = document.getElementById("songname").value;
    connection.invoke("StartMusic",link).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});