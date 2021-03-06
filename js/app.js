$(function() {
    $("#ub-header").load("ub-header.html");
    $("#navbar").load("navbar.html");
    $("#container-title").load("container-title.html");
    $("#footer").load("footer.html");
    $("#news-list").bootstrapNews({
        newsPerPage: 5,
        navigation: true,
        autoplay: true,
        direction: 'up', // up or down
        animationSpeed: 'normal',
        newsTickerInterval: 4000, //4 secs
        pauseOnHover: true,
        onStop: null,
        onPause: null,
        onReset: null,
        onPrev: null,
        onNext: null,
        onToDo: null
    });
    highlight_menu_item();
});

function highlight_menu_item() {
    if ($('#main-navbar ul li').length > 0) {
        $('#main-navbar ul li').removeClass('active');
        var splitLink = location.pathname.split("/");
        var page = splitLink[splitLink.length - 1];
        if (page == "" || page == null) {
            page = "index.html";
        }
        var a = $('a[href="' + page + '"]');
        a.closest('li').addClass('active');
    } else {
        setTimeout(highlight_menu_item, 50);
    }
}
$(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
    event.preventDefault();
    return $(this).ekkoLightbox({
        left_arrow_class: "",
        right_arrow_class: ""
    });
});
