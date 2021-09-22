$( document ).ready(function() {
    showAllBreeds();
});

function showAllBreeds(){
    $.getJSON( "https://dog.ceo/api/breeds/list/all", function( data ) {
        $.each( data, function( key, value ) {
            $.each(data["message"], function( breed, regions ) {
                document.getElementById("breeds").innerHTML += "<p id='"+breed+"' style='cursor:pointer;' onclick='ViewImages(`"+breed+"`)'>"+breed+"<image id='img"+breed+"'><ul id='region"+breed+"'></ul>";
                if(regions.length > 0){  
                    document.getElementById("region"+breed).innerHTML = "<li>"+regions+"</li>";
                }
              });
        });
    });
}

function ViewImages(breed){
    $.getJSON( "https://dog.ceo/api/breed/"+breed+"/images/random", function( data ) {
       document.getElementById("img"+breed).src = data["message"];
    });
}