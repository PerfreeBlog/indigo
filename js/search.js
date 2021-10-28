(function () {

    var G = window || this,
        even = G.BLOG.even,
        $ = G.BLOG.$,
        searchIco = $('#search'),
        searchWrap = $('#search-wrap'),
        keyInput = $('#key'),
        back = $('#back');


    var noop = G.BLOG.noop;
    var root = $('html');

    var Control = {
        show: function () {
            G.innerWidth < 760 ? root.classList.add('lock-size') : noop;
        },
        hide: function () {
            G.innerWidth < 760 ? root.classList.remove('lock-size') : noop;
        }
    };





    searchIco.addEventListener(even, function () {
        searchWrap.classList.toggle('in');
        keyInput.value = '';
        searchWrap.classList.contains('in') ? keyInput.focus() : keyInput.blur();
    });

    back.addEventListener(even, function () {
        searchWrap.classList.remove('in');
        Control.hide();
    });

    document.addEventListener(even, function (e) {
        if (e.target.id !== 'key' && even === 'click') {
            Control.hide();
        }
    });



}).call(this);

//回车事件绑定
$('#key').bind('keyup', function(event) {
    if (event.keyCode == "13") {
        window.location.href = "/article/search?title=" + $("#key").val()

    }
});