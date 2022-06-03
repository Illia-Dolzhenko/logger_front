$(document).ready(function () {
    $.getJSON("https://getpantry.cloud/apiv1/pantry/8d96f3aa-feec-4bab-b0dd-64978a6b5751/basket/log", function (data) {
        //$("#container").html(JSON.stringify(data));
        $("#image").attr('src', 'data:image/jpeg;base64,' + data.base64Image);
        $("#date").html(data.date);
        $("#temp").html(data.pressure);
        $("#press").html(data.temperature);
        data.log.forEach(element => {
            $("#log").append('<p>' + element + '</p>');
        });
    });
});