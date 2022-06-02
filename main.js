$(document).ready(function () {
    console.log("ready!");
    $.getJSON("https://getpantry.cloud/apiv1/pantry/8d96f3aa-feec-4bab-b0dd-64978a6b5751/basket/log", function (data) {
        //$("#container").html(JSON.stringify(data));
        $("#image").attr('src', 'data:image/jpeg;base64,' + data.base64Image);
        $("#date").html(data.date);
        $("#log").html(data.log);
    });
});