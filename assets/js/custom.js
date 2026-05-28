function toggleInfo() {
    var panel = document.getElementById('extraInfo');
    var btn   = document.getElementById('toggleBtn');
    var open  = panel.style.display === 'block';

    if (open) {
        panel.style.display = 'none';
        btn.textContent     = 'Show Training Times';
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('active');
    } else {
        panel.style.display = 'block';
        btn.textContent     = 'Hide Training Times';
        btn.setAttribute('aria-expanded', 'true');
        btn.classList.add('active');
    }
}


window.onload = function () {
    var words = [
        { text: 'THE',    color: '#000000' },
        { text: 'CLUB',   color: '#000000' },
        { text: 'THAT',   color: '#ffffff' },
        { text: 'NEVER',  color: '#ffffff' },
        { text: 'STOPS.', color: '#66a5e4' }
    ];

    var h2 = document.querySelector('#banner h2');
    if (!h2) return;
    h2.innerHTML = '';

    var i = 0;

    function showNextWord() {
        if (i < words.length) {
            var span = document.createElement('span');
            span.textContent = words[i].text + ' ';
            span.style.color      = words[i].color;
            span.style.opacity    = '0';
            span.style.transition = 'opacity 0.5s ease';
            h2.appendChild(span);
            setTimeout(function () { span.style.opacity = '1'; }, 50);
            i++;
            setTimeout(showNextWord, 800);
        }
    }
    showNextWord();
};