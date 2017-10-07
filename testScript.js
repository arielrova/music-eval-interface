$(document).ready(function() {

    $(".submit-test").click(function() {
        var testData = {};
        var testid = $(".formToCollect").attr("name");
        $(".collect").each(function(i) {
            var name = ($(this).attr("name"));
            var value = ($(this).val());

            testData[name] = value;

            console.log($(this).attr("name"));
            console.log($(this).val());
        });
        console.log(testData);
        setTestData(testData, testid);
    });
});


