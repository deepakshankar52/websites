function multiply() {
    var number;
    var result = "";

    number = Number(document.getElementById("number").value);

    for(var i = 1; i<= 10; i++){
      result = result + "<p>"+number + "*" + i + "=" + number * i+"</p>";
    }

    document.getElementById("result").innerHTML = result;
  }