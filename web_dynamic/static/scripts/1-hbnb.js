$(document).ready(function(){
    const amenities = {};
    $("li input[type=checkbox]").change(function(){
        if(this.checked){
            amenities[this.attr("data-name")] = this.attr("data-id");

        }
        else{
            delete amenities[data.attr("data-name")];
        }
        $('.amenities h4').text(amenities.keys.sort().join(", "))
    })
})
