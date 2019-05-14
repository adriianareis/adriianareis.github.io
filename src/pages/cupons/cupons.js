$("body").on("click", "img", e => {
    var img = e.target;
    if (img.dataset.open === "false" || img.dataset.open === undefined) {
        img.dataset.open = "true";
        $('#cupons img:not([data-open="true"])').css("filter", "blur(10px)");
        $("div.overlay")[0].dataset.open = true;
    } else {
        $('#cupons img:not([data-open="true"])').css("filter", "blur(0px)");
        img.dataset.open = "false";
        $("div.overlay")[0].dataset.open = false;
    }
});