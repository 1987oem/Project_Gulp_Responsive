$(function () {
    $("#my-menu").mmenu({
        extensions: ["theme-black", "effect-menu-slide", "pagedim-black", "shadow-page", "fullscreen", "fx-menu-slide"],
        navbar: {
            title: '<img src="img/logo.svg" alt="Make Up">'
        },
        offCanvas: {
            position: 'right'
        }
    });

    //   Get the API
    var api = $("#my-menu").data( "mmenu" );

    //   Hook into methods
    api.bind( "open:finish", function() {
        $(".hamburger").addClass("is-active");
    });
    api.bind( "close:finish", function() {
        $(".hamburger").removeClass("is-active");
    });
});
