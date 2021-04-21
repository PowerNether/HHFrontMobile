$(document).ready(function () {
    if ($(window).width() <= 768) {
        $('#tophead>.c-page').prepend($('header>.c-page>.logo'));
        var toggle = $("<span class='toggle-menu' />")
        $('#tophead>.c-page').append(toggle);
        var search = $("<span class='mobile-search' />")
        $('#tophead>.c-page').append(search);
        var menu = $("<div class='mobile-menu' />")
            .append("<div class='mobile-list'></div>")
        $('#tophead>.c-page').append(menu);

        $(".mobile-menu").append($("<span class='toggle-menu active' />"))
        $("#tophead>.c-page>.menu").clone().appendTo($(".mobile-menu"))
        $("#tophead>.c-page>.region").clone().appendTo($(".mobile-menu"))
        $(".mobile-list").append("<div class='mobile-categ'></div>")
        $(".mobile-list").append("<div class='mobile-items'></div>")
        $("header>.c-page>nav>ul>li").clone().appendTo($('.mobile-categ'));
    } else {
        $('header>.c-page').prepend($('#tophead>.c-page>.logo'));
        if ($("#tophead>.c-page").find(".mobile-menu").length > 0) {
            $('#tophead>.c-page').remove(".mobile-menu");
            $('#tophead>.c-page').remove(".mobile-search");
        }
    }
});
$(window).resize(function () {
    if ($(window).width() <= 768) {
        $('#tophead>.c-page').prepend($('header>.c-page>.logo'));
        if ($("#tophead>.c-page").find(".mobile-menu").length > 0) {
            return true
        } else {
            var toggle = $("<span class='toggle-menu' />")
            $('#tophead>.c-page').append(toggle);
            var search = $("<span class='mobile-search' />")
            $('#tophead>.c-page').append(search);
            var menu = $("<div class='mobile-menu' />")
                .append("<div class='mobile-list'></div>")
            $('#tophead>.c-page').append(menu);

            $(".mobile-menu").append($("<span class='toggle-menu active' />"))
            $("#tophead>.c-page>.menu").clone().appendTo($(".mobile-menu"))
            $("#tophead>.c-page>.region").clone().appendTo($(".mobile-menu"))
            $(".mobile-list").append("<div class='mobile-categ'></div>")
            $(".mobile-list").append("<div class='mobile-items'></div>")
            $("header>.c-page>nav>ul>li").clone().appendTo($('.mobile-categ'));
        }
    } else {
        $('header>.c-page').prepend($('#tophead>.c-page>.logo'));
        $(".mobile-menu").remove()
        $(".toggle-menu").remove();
        $(".mobile-search").remove();
    }
});
$(document).on("click", ".toggle-menu", function () {
    $(".mobile-menu").slideToggle()
})