var footerTemplate = `
<a href="/about.html">About</a>
<!-- <a href="/FAQ.html">FAQ</a> -->
<a href="/news.html">News</a>
<!-- <a href="/terms.html">Terms</a> -->
<a href="/privacy.html">Privacy</a>
<!-- <a href="/cookies.html">Cookies</a> -->
<div>Portions of this content are copyright 2017 by individual Voyager Archives contributors. Content available under a Creative Commons license.</div>
<div>Website created and maintained by <a href="https://github.com/Emrix">Matt Ricks</a>.</div>
<div>Last updated on <%updatedDate%></div>
<style>
#playlist,
audio {
    background: #666;
    width: 400px;
    padding: 20px;
}

.active a {
    color: #5DB0E6;
    text-decoration: none;
}

li a {
    color: #eeeedd;
    background: #333;
    padding: 5px;
    display: block;
}

li a:hover {
    text-decoration: none;
}
</style>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>
window.Formaweb = window.Formaweb || {};

window.Formaweb.Player = function() {
    'use strict';

    var audio;
    var playlist;
    var len;
    var current;

    init();

    function init() {
        current = 0;
        audio = $('audio')[0];

        playlist = [
            { name: 'Sapphire Isle', path: 'http://voyagerarchives.com/resources/music/autoplay_1.mp3', id: 'Sapphire Isle' },
            { name: 'Bathed in the Light', path: 'http://voyagerarchives.com/resources/music/autoplay_2.mp3', id: 'Bathed in the Light' },
            { name: 'Meditation Impromptu 01', path: 'http://voyagerarchives.com/resources/music/autoplay_3.mp3', id: 'Meditation Impromptu 01' },
            { name: 'Meditation Impromptu 03', path: 'http://voyagerarchives.com/resources/music/autoplay_4.mp3', id: 'Meditation Impromptu 03t' }
        ];

        len = playlist.length - 1;

        // audio.volume = 0.10;
        run(playlist[0], audio);

        audio.addEventListener('ended', function(e) {
            next();
            run(playlist[current], audio);
        });

        $('.audio.next').on('click', function() {
            next();
            run(playlist[current], audio);

            return false;
        });

        $('.audio.prev').on('click', function() {
            prev();
            run(playlist[current], audio);

            return false;
        });

        $('.audio.play').on('click', function() {
            var music_id = $(this).attr('data-music-id');

            if (music_id != undefined) {
                playById(music_id);
            }

            return false;
        });
    }

    function run(music, player) {
        $('.audio.name').text(music.name);
        player.src = music.path;

        audio.load();
        audio.play();
    }

    function next() {
        current++;
        if (current > len) current = 0;
    }

    function prev() {
        current--;
        if (current < 0) current = 0;
    }

    function playById(id) {
        var playlist_id = undefined;

        $.each(playlist, function(index, value) {
            if (value.id == id) {
                playlist_id = index;
            }
        });

        if (playlist_id != undefined) {
            current = playlist_id;
            run(playlist[current], audio);
        }
    }

}

$(document).ready(function() {
    var player = window.Formaweb.Player();
});
</script>
<div id="player">
    <a href="#" class="audio prev">Prev</a>
    <audio controls>
        Your browser does not support HTML 5 Player.
    </audio>
    <a href="#" class="audio next">Next</a>
    <br><span class="audio name">loading...</span>
</div>
<div id="music">
    <h4>Music</h4>
    <ul>
        <li><a href="#" class="audio play" data-music-id="Sapphire Isle">Sapphire Isle</a></li>
        <li><a href="#" class="audio play" data-music-id="Bathed in the Light">Bathed in the Light</a></li>
        <li><a href="#" class="audio play" data-music-id="Meditation Impromptu 01">Meditation Impromptu 01</a></li>
        <li><a href="#" class="audio play" data-music-id="Meditation Impromptu 03">Meditation Impromptu 03</a></li>
    </ul>
</div>
`;