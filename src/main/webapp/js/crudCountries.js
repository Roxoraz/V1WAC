



$(document).ready(function() {
    loadCountries();
});
function loadCountries() {
    $.get("http://localhost:8080/firstapp/restservices/countries", (data) => {

        $(data).each(function(index) {

            index += 1;
            $("#countryCollection").append('<a href="#!"  class="collection-item" data-capital="' + this.capital + '" data-code="' + this.countryCode + '" data-lat="' + this.lat + '"  data-lon="' + this.lon + '" data-name="' + this.name + '" id="country' + index + '">' + this.name + '</a>');
            countryid = "#country" + index;

        });
    });

}


$("#countryCollection").delegate('a', 'click', function() {
    code = $(this).data("code");
    console.log(code);
$.get("http://localhost:8080/firstapp/restservices/countries/"+code, (data) =>{

    $(data).each(function(index) {
        console.log(data);
        $("#codeUpdate").text(this.code);
        $("#iso2Update").val(this.iso2);
        $("#nameUpdate").val(this.name  );
        $("#capitalUpdate").val(this.capital  );
        $("#continentUpdate").val(this.continent  );
        $("#regionUpdate").val(this.region  );
        $("#surfaceUpdate").val(this.surface  );
        $("#populationUpdate").val(this.population  );
        $("#governmentUpdate").val(this.government);
        $("#latUpdate").val(this.lat);
        $("#lngUpdate").val(this.lng);
        Materialize.updateTextFields();
    });


});


});

$("#insertButton").click(function(event) {
    event.preventDefault();
var data = $("#inputForm").serialize();
console.log(data);
    $.ajax({
        url:"firstapp/restservices/countries",
        method:"POST",
        data: data,
        beforeSend: function (xhr) {
                var token = window.sessionStorage.getItem("sessionToken");
                xhr.setRequestHeader( 'Authorization', 'Bearer ' + token);
            },
        succes: function(response){
        console.log(JSON.stringify(response));
    }});
});

$("#updateButton").click(function(event) {
    event.preventDefault();
    var data = $("#updateForm").serialize();
    console.log(data);
    console.log("firstapp/restservices/countries/"+$("#codeUpdate").text());
    $.ajax({
        url: "http://localhost:8080/firstapp/restservices/countries/"+$("#codeUpdate").text(),
        type: "put",
        data: data,
        beforeSend: function (xhr) {
        var token = window.sessionStorage.getItem("sessionToken");
        xhr.setRequestHeader( 'Authorization', 'Bearer ' + token);
    }

    });
});
    $("#deleteButton").click(function(event) {
        event.preventDefault();
        var data = $("#updateForm").serialize();
        console.log(data);
        console.log("firstapp/restservices/countries/"+$("#codeUpdate").text());
        $.ajax({
            url: "firstapp/restservices/countries/"+$("#codeUpdate").text(),
            type: "delete",
            data: data,
            beforeSend: function (xhr) {
        var token = window.sessionStorage.getItem("sessionToken");
        xhr.setRequestHeader( 'Authorization', 'Bearer ' + token);
    }
        });
        $("#countryCollection").empty();
        loadCountries();

});

function searchCountries() {
    $.get("firstapp/restservices/countries/search/"+$("#searchInput").val(), (data) => {
    $("#countryCollection").empty();
        $(data).each(function(index) {

            index += 1;
            $("#countryCollection").append('<a href="#!"  class="collection-item" data-capital="' + this.capital + '" data-code="' + this.countryCode + '" data-lat="' + this.lat + '"  data-lon="' + this.lon + '" data-name="' + this.name + '" id="country' + index + '">' + this.name + '</a>');
            countryid = "#country" + index;

        });
    });

}
$("#searchButton").click(function(event) {
    searchCountries();
});

function getPop() {
    $.get("firstapp/restservices/countries/population", (data) => {
        $("#countryCollection").empty();
        $(data).each(function(index) {

            index += 1;
            $("#countryCollection").append('<a href="#!"  class="collection-item" data-capital="' + this.capital + '" data-code="' + this.countryCode + '" data-lat="' + this.lat + '"  data-lon="' + this.lon + '" data-name="' + this.name + '" id="country' + index + '">' + this.name + '</a>');
            countryid = "#country" + index;

        });
    });

}
$("#populationButton").click(function(event) {
    getPop();
});
function getSur() {
    $.get("firstapp/restservices/countries/surface", (data) => {
        $("#countryCollection").empty();
        $(data).each(function(index) {

            index += 1;
            $("#countryCollection").append('<a href="#!"  class="collection-item" data-capital="' + this.capital + '" data-code="' + this.countryCode + '" data-lat="' + this.lat + '"  data-lon="' + this.lon + '" data-name="' + this.name + '" id="country' + index + '">' + this.name + '</a>');
            countryid = "#country" + index;

        });
    });

}

$("#surfaceButton").click(function(event) {
    getSur();
});
