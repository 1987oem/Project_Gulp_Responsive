$(function () {
    $("#my-menu").mmenu({
        extensions: ["theme-black", "effect-menu-slide", "pagedim-black"],
        navbar: {
            title: '<img src="img/logo.svg" alt="Make Up">'
        },
        offCanvas: {
            position: 'right'
        }
    });

    //   Get the API
    var api = $("#my-menu").data("mmenu");
    api.bind( "opened", function() {
        $(".hamburger").addClass("is-active");
    });
    api.bind( "closed", function() {
        $(".hamburger").removeClass("is-active");
    });
});
