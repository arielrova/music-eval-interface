var initSettings = function() {
    var settings = {};

    // Enter the number of songs to be tested
    settings.musicCount = 6;
    settings.songDirectory = "music_examples/";
    settings.songs = [
    	"training-1.wav",
        "training-2.wav",
        "training-3.wav",
        "real-1.wav",
        "real-2.wav",
        "real-3.wav"
    ];

    // Enter the name of the parameters you want to test for

    settings.testParameters = [
        "preference", "naturalness", "groove", "familiarity"
    ];

    return settings;
};