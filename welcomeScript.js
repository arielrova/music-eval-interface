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
        var testData = {};
        var testid = $(".formToCollect:visible").attr("name");
        $(".collect:visible").each(function(i) {
            var name = ($(this).attr("name"));
            var value = ($(this).val());

            testData[name] = value;

            console.log($(this).attr("name"));
            console.log($(this).val());
        });
        setTestData(testData, testid);
    });

});