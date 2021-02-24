// Check selected breaker (ver.1)
var selbr = document.getElementsByName("breaker");
var x;
var amperage = [];

function check_vars(event) {
    console.log(event.target.value);
    x = event.target.value;
    // document.getElementById("abc001").innerHTML = x;
    if (x == "e12") {
        var amperage = [ 630, 800, 1000, 1250, 1600]
        document.getElementById("abc001").innerHTML = x;
    }
    else if (x == "e22") {
        var amperage = [ 800, 1000, 1250, 1600, 2000, 2500]
        document.getElementById("abc001").innerHTML = x;
    }
    else if (x == "e42") {
        var amperage = [ 2000, 2500, 3200, 4000]
        document.getElementById("abc001").innerHTML = x;
    }
    else if (x == "e62") {
        var amperage = [ 4000, 5000, 6300]
        document.getElementById("abc001").innerHTML = x;
    }
    else if (x == "t4") {
        var amperage = [ 160, 320, 400]
        document.getElementById("abc001").innerHTML = x;
    }
    else if (x == "t5") {
        var amperage = [ 400, 630]
        document.getElementById("abc001").innerHTML = x;
    }
    else if (x == "t6") {
        var amperage = [ 4000, 5000, 6300]
        document.getElementById("abc001").innerHTML = x;
    }
    else if (x == "t7") {
        var amperage = [ 630, 800, 1000, 1250, 1600]
        document.getElementById("abc001").innerHTML = x;
    }
    else {
        document.getElementById("abc001").innerHTML = "Select anything!";
    }
    document.getElementById("abc001").innerHTML = amperage;

    console.log(amperage.length);
    for (var j = 0; j < amperage.length; j++) {
        var node = document.createElement("option");                 // Create a <option> node
        var textnode = document.createTextNode(amperage[j]);             // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("menuamperage").appendChild(node);     // Append <li> to <ul> with id="myList"
    }
}

    for (var i = 0; i < selbr.length; i++) {
        selbr[i].addEventListener("change", check_vars);
        document.getElementById("abc001").innerHTML = amperage;
    }
    
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
    document.body.append(div);

    