$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 5,
        max: 1000,
        values: [ 10, 800 ],
        slide: function( event, ui ) {
            $('#min-price').text($( "#slider-range" ).slider( "values", 0 ));
            $('#max-price').text($( "#slider-range" ).slider( "values", 1 ));
        }
    });
    $('#min-price').text($( "#slider-range" ).slider( "values", 0 ));
    $('#max-price').text($( "#slider-range" ).slider( "values", 1 ));

} );
// $(function () {
//     $( "#slider-range" ).slider({
//         change: function( event, ui ) {
//             window.location.reload();
//         }
//     });
// });