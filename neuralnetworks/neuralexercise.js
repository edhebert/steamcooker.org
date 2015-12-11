function neuralMath () {
    var x = document.getElementById("hwoptions");
    var selectedHW = x.options[x.selectedIndex].value;

    var y = document.getElementById("foptions");
    var selectedF = y.options[y.selectedIndex].value;

    var z = document.getElementById("woptions");
    var selectedW = z.options[z.selectedIndex].value;

    var a = document.getElementById("hwweights");
    var weightHW = a.options[a.selectedIndex].value;

    var b = document.getElementById("fweights");
    var weightF = b.options[b.selectedIndex].value;

    var c = document.getElementById("wweights");
    var weightW = c.options[c.selectedIndex].value;

    var threshold = 6;

    var weightedHW = selectedHW * weightHW;
    var weightedF = selectedF * weightF;
    var weightedW = selectedW * weightW;

    var weightedtotal = weightedHW + weightedF + weightedW;

    if (weightedtotal < threshold) 
    {
        $('#go').hide();
        $('#dontgo').show();
    }
    else
    {
        $('#dontgo').hide();
        $('#go').show();
    }
}

$(document).ready( function () {
    neuralMath();
});

$("#hwoptions").change(function () {
    var x = document.getElementById("hwoptions");
    var selectedHW = x.options[x.selectedIndex].value;
    if (selectedHW == 0) {
        document.getElementById("homeworkimg").src = "../img/homeworkiconbw.png";
    }
    else
    {
        document.getElementById("homeworkimg").src = "../img/homeworkicon.png";
    }

    neuralMath();
});

$("#foptions").change(function () {
    var y = document.getElementById("foptions");
    var selectedF = y.options[y.selectedIndex].value;
    if (selectedF == 0) {
        document.getElementById("friendimg").src = "../img/friendsiconbw.png";
    }
    else
    {
        document.getElementById("friendimg").src = "../img/friendsicon.png";
    }

    neuralMath();
});

$("#woptions").change(function () {
    var z = document.getElementById("woptions");
    var selectedW = z.options[z.selectedIndex].value;
    if (selectedW == 0) {
        document.getElementById("weatherimg").src = "../img/weathericonbw.png";
    }
    else
    {
        document.getElementById("weatherimg").src = "../img/weathericon.png";
    }

    neuralMath();
});

$("#hwweights").change(function () {
    neuralMath();
});

$("#fweights").change(function () {
    neuralMath();
});

$("#wweights").change(function () {
    neuralMath();
});