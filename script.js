$(document).ready(function() {
    $("#instructions").hide();
    $("#finish").hide();
    $("#music-player").hide();

    var settings = initSettings();

    var testData = {};

    for (var i = 0; i < settings.testParameters.length; i++) {
        testData[settings.testParameters[i]] = 5;
    }

    var songsToPlay = settings.songs;

    $(function() {
        $('#audio-player').mediaelementplayer({
            alwaysShowControls: true,
            features: ['volume'],
            audioVolume: 'horizontal',
            audioWidth: 450,
            audioHeight: 70,
            iPadUseNativeControls: true,
            iPhoneUseNativeControls: true,
            AndroidUseNativeControls: true
        });
    });

    var generateTestCard = function(testid, headerString) {

        $(function() {
            $("#familiarity-slider").slider({
                value: 5,
                min: 1,
                max: 10,
                step: 1,
                slide: function(event, ui) {
                    $("#familiarity-amount").val(ui.value);
                    testData.familiarity = ui.value;
                }
            });
            $("#familiarity-amount").val($("#familiarity-slider").slider("value"));
        });

        $(function() {
            $("#groove-slider").slider({
                value: 5,
                min: 1,
                max: 10,
                step: 1,
                slide: function(event, ui) {
                    $("#groove-amount").val(ui.value);
                    testData.groove = ui.value;
                }
            });
            $("#groove-amount").val($("#groove-slider").slider("value"));
        });

        $(function() {
            $("#naturalness-slider").slider({
                value: 5,
                min: 1,
                max: 10,
                step: 1,
                slide: function(event, ui) {
                    $("#naturalness-amount").val(ui.value);
                    console.log(ui.value);
                    testData.naturalness = ui.value;
                }
            });
            $("#naturalness-amount").val($("#naturalness-slider").slider("value"));
        });


        $(function() {
            $("#preference-slider").slider({
                value: 5,
                min: 1,
                max: 10,
                step: 1,
                slide: function(event, ui) {
                    $("#preference-amount").val(ui.value);
                    console.log(ui.value);
                    testData.preference = ui.value;
                }
            });
            $("#preference-amount").val($("#preference-slider").slider("value"));
        });
        $("#testcard").append("<div id='" + testid + "'>" +
            "<h1>" + headerString + "</h1>" +
            "<form name='" + testid + "' class='formToCollect'> " +
            "<fieldset> " +
            "<legend>Familiarity</legend> " +
            "<p>I am used to listening to this or similar music</p> " +
            "<input type='text' id='familiarity-amount' readonly style='border:0; color:#f6931f; font-weight:bold;'> " +
            " <label for='familiarity-slider'>Your score:</label> " +
            "<div id='familiarity-slider' name='familiarity-slider' class='collect'></div> " +
            " </fieldset> " +
            "<fieldset> " +
            "   <legend>Groove</legend> " +
            "  <p>I feel like I want to move some part of my body in relation to some aspect of the music</p> " +
            " <input type='text' id='groove-amount' readonly style='border:0; color:#f6931f; font-weight:bold;'> " +
            "<label for='groove-slider'>Your score:</label> " +
            "<div id='groove-slider' name='groove-slider' class='collect'></div> " +
            "</fieldset> " +
            "<fieldset> " +
            "   <legend>Preference</legend> " +
            "  <p>I like it!</p> " +
            " <input type='text' id='preference-amount' readonly style='border:0; color:#f6931f; font-weight:bold;'> " +
            "<label for='preference-slider'>Your score:</label> " +
            "<div id='preference-slider' name='preference-slider' class='collect'></div> " +
            " </fieldset> " +
            " <fieldset> " +
            " <legend>Naturalness</legend> " +
            "<p>This sounds natural, as if played by good musician.</p> " +
            "<input type='text' id='naturalness-amount' readonly style='border:0; color:#f6931f; font-weight:bold;'> " +
            "<label for='naturalness-slider'>Your score:</label> " +
            "<div id='naturalness-slider' name='naturalness-slider' class='collect'></div> " +
            "</fieldset> " +
            "<button type='button' class='submit-button submit-test' id='userData'>Next</button> " +
            "</form> " +
            "</div>");

        $(".submit-test").click(function() {
            // Get name of Form
            var testid = $(".formToCollect:visible").attr("name");
            setTestData(testData, testid);
            testData = {};
            showNext();
        });
    };

    $("#instruction-button").click(function() {
        $("#testcard").show();
        $("#instructions").hide();
        $("#music-player").show();
        showNext();
    });

    $("#userData").click(function() {
        var userData = {};
        $(".collect:visible").each(function(i) {
            var name = ($(this).attr("name"));
            var value = ($(this).val());
            userData[name] = value;
        });
        setUserData(userData);
    });

    var showNext = function() {
        if ($("#testcard").not(':empty')) {
            $("#testcard").empty();
        }
        if (songsToPlay.length !== 0) {
            var next = songsToPlay.shift();
            playSong(String(settings.songDirectory + next));
            nextString = next.split(".");
            nextString = nextString[0];
            next = nextString;
            nextString = nextString.replace("-", " ");
            generateTestCard(next, nextString);
        } else {
            $("#finish").show();
        }
    };

    var playSong = function(song) {
        console.log(song);
        $("#audio-container").remove();
        jQuery("<div>", {
            id: 'audio-container'
        }).appendTo("#music-player");

        jQuery('<audio>', {
            id: 'player',
            src: song,
            type: 'audio/wav',
            controls: 'controls',
        }).appendTo("#audio-container");

        $('audio').mediaelementplayer({
            success: function(mediaElement, domObject) {
                mediaElement.play();
            }
        });
    };
});