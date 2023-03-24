function convert(){
    unit = document.getElementById("mySelect").value;
    val = Number(document.getElementById("digit").value);
    var u= 0;
    if(!val)
        u = "Enter Temperature";
    else{
        unit == 'c' ? u = `${Math.floor((val - 32) / 1.8)}°C`: null
        unit == 'f' ? u = `${(val * 1.8) + 32}°F`: null
    }
    document.getElementById("temp").innerHTML = u;
}
