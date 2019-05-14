// document.addEventListener('deviceready', function() {
document.addEventListener('DOMContentLoaded', function() {
    
    var p = window.location.href.split("=")[1];
    if (p) $("#logo").addClass("hidden");
    
    $("#content").load(`src/pages/${p}/${p}.html`);
    
    $('<link>').appendTo('head').attr({
        type: 'text/css', 
        rel: 'stylesheet',
        href: `src/pages/${p}/${p}.css`
    });

    $('<script>').appendTo('head').attr({
        type: 'text/javascript', 
        src: `src/pages/${p}/${p}.js`
    });

});