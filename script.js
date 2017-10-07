$(document).ready(function() {
    $("#instructions").hide();
    $("#trainingOne").hide();
    $("#trainingTwo").hide();
    $("#trainingThree").hide();
    $("#realOne").hide();
    $("#realTwo").hide();
    $("#realThree").hide();
    $("#realFour").hide();
    $("#realFive").hide();
    $("#realFive").hide();
    $("#realSix").hide();
    $("#realSeven").hide();
    $("#realEight").hide();
    $("#finish").hide();

    var testData = {};

    var settings = initSettings();
    console.log(settings.testParameters.length);

    for (var i = 0; i < settings.testParameters.length; i++) {
        testData[settings.testParameters[i]] = 5;
    }

    console.log(testData);


    $(function() {
        $("#familiarity-slider").slider({
            value: 5,
            min: 1,
            max: 10,
            step: 1,
            slide: function(event, ui) {
                $("#familiarity-amount").val(ui.value);
                console.log(ui.value);
                testData.familiarity = ui.value;
                console.log(testData);
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
                console.log(ui.value);
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


    $("#userData").click(function() {
        var userData = {};
        $(".collect:visible").each(function(i) {
            var name = ($(this).attr("name"));
            var value = ($(this).val());

            userData[name] = value;
        });
        setUserData(userData);
    });

    $(".submit-test").click(function() {
        // Get name of Form
        var testid = $(".formToCollect:visible").attr("name");
        console.log(testid);
        setTestData($(testData[0]), testid);
        testData = {};
    });

});