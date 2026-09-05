(function () {
    var stage = document.getElementById('squares');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var squares = [];
    var baseY = window.scrollY || 0;
    var seed = 122215142231115;
    function rand() {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return seed / 4294967296;
    }

    function updateParallax() {
        var y = (window.scrollY || 0) - baseY;
        for (var i = 0; i < squares.length; i++) {
            squares[i].el.style.setProperty('--par', (-y * squares[i].depth).toFixed(1) + 'px');
        }
        ticking = false;
    }

    var ticking = false;
    function onScroll() {
        if (reduceMotion || ticking) return;
        ticking = true;
        requestAnimationFrame(updateParallax);
    }

    function buildSquares() {
        stage.innerHTML = '';
        squares = [];
        var count = Math.max(18, Math.min(34, Math.round(window.innerWidth * window.innerHeight / 52000)));
        for (var i = 0; i < count; i++) {
            var el = document.createElement('div');
            el.className = 'sq';
            var size = 48 + Math.pow(rand(), 1.6) * 200;
            var depth = rand();
            var light = 232 - depth * 14 + rand() * 8;
            var hi = 0.45 + depth * 0.35;
            var lo = 0.08 + depth * 0.16;

            el.style.width = size + 'px';
            el.style.height = size + 'px';
            el.style.left = (rand() * 110 - 5) + 'vw';
            el.style.top = (rand() * 130 - 15) + '%';
            el.style.setProperty('--rot', ((rand() * 2 - 1) * 12).toFixed(2) + 'deg');
            el.style.background = 'rgb(' + (light | 0) + ',' + ((light - 2) | 0) + ',' + ((light - 9) | 0) + ')';
            el.style.borderRadius = (2 + rand() * 10) + 'px';
            el.style.zIndex = Math.round(depth * 10);
            el.style.boxShadow =
                'inset 1px 1px 1px rgba(255,255,255,' + hi.toFixed(2) + '),' +
                'inset -2px -2px 4px rgba(0,0,0,' + lo.toFixed(2) + '),' +
                (4 + depth * 10).toFixed(0) + 'px ' + (8 + depth * 14).toFixed(0) + 'px ' + (6 + depth * 22).toFixed(0) + 'px rgba(40,38,32,' + (0.05 + depth * 0.09).toFixed(2) + '),' +
                '1px 2px 5px rgba(40,38,32,.06)';
            stage.appendChild(el);
            squares.push({ el: el, depth: 0.04 + depth * 0.22 });
        }
        updateParallax();
    }

    buildSquares();
    window.addEventListener('load', function () {
        baseY = window.scrollY || 0;
        updateParallax();
    });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () {
        if (!reduceMotion) buildSquares();
    });
})();
