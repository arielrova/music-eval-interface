var initSettings = function() {
    var settings = {};

    // Enter the number of songs to be tested
    settings.songDirectory = "music_examples/";
    // 15 examples
    settings.songs = [
        "Funk_Funk5ms.mp3",
        "Funk_Funk20ms.mp3",
        "Funk_Funk40ms.mp3",
        "Funk_Jazz5ms.mp3",
        "Funk_Jazz20ms.mp3",
        "Funk_Jazz40ms.mp3",
        "FunkyOrig.mp3",
        "Jazz_Funk5ms.mp3",
        "Jazz_Funk20ms.mp3",
        "Jazz_Funk40ms.mp3",
        "Jazz_Jazz5ms.mp3",
        "Jazz_Jazz20ms.mp3",
        "Jazz_Jazz40ms.mp3",
        "Jazz_Jazz80ms.mp3",
        "JazzOrig.mp3",
    ];

    settings.songs = shuffleArray(settings.songs);
    settings.songs.unshift("training-3.mp3");
    settings.songs.unshift("training-2.mp3");
    settings.songs.unshift("training-1.mp3");

    settings.musicCount = settings.songs.length;

    // Enter the name of the parameters you want to test for
    settings.testParameters = [
        "preference", "naturalness", "groove", "familiarity"
    ];

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    return settings;
};