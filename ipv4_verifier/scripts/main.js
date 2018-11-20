function split(){
var inputvar = document.getElementById("input1").value;
var split = inputvar.split('.');
var block1var = split[0]
var block1 = 0;
switch (block1var)
    {
        case "192":
            block1 = "1";
            break;
        case "172":
            block1 = "2";
            break;
        case "10":
            block1 = "3";
            break;
        default:
            block1 = "Fucking shit";
    }
    
document.getElementById("display").innerHTML = block1;
}