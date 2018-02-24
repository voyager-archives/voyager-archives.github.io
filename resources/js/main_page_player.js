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
            { name: 'Meditation Impromptu 01', path: 'http://voyagerarchives.com/resources/music/autoplay_3.mp3', id: 'Meditation Impromptu 01' },
            { name: 'Meditation Impromptu 03', path: 'http://voyagerarchives.com/resources/music/autoplay_4.mp3', id: 'Meditation Impromptu 03' },
            { name: 'Bathed in the Light', path: 'http://voyagerarchives.com/resources/music/autoplay_2.mp3', id: 'Bathed in the Light' }
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