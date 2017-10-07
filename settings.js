var initSettings = function() {
    var settings = {};

    // Enter the number of songs to be tested
    settings.musicCount = 3;

    // Enter the name of the parameters you want to test for

    settings.testParameters = [
        "preference", "naturalness", "groove", "familiarity"
    ];

    return settings;
};