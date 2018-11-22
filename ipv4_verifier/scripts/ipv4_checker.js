function split() {
var inputvar = document.getElementById("input1").value;
var split = inputvar.split('.');
var block1var = split[0];
var block2var = split[1];
var block3var = split[2];
var block4var = split[3];
var finalresult = false;
var block1 = 0;
var outputmessage = "";
switch (block1var) {
        case "192":
            block1 = 1;
            if (block2var == "168") {
                    block2 = true;
                    if(block3var >-1 && block3var < 256) {
                            block3 = true;
                            if(-1 < block4var && block4var < 256) {
                                    finalresult = true;
                                }
                        }
                }
            
            break;
        case "172":
            block1 = 2;
            if (15 < block2var && block2var < 32 ) {
                    if(block3var >-1 && block3var < 256) {
                           if(-1 < block4var && block4var < 256) {
                                   finalresult = true;
                               }
                        }
                }
            break;
        case "10":
            block1 = 3;
            if(-1 < block2var && block2var <256)
                {
                    if(-1 < block3var && block3var < 256)
                        {
                            if(-1 < block4var && block4var < 256)
                                {
                                    finalresult = true;
                                }
                        }
                }
            break;
        default:
            block1 = 0;
    }
if(finalresult == true) {
    outputmessage = "This is a Valid IPV4 address.";
}
    else {
        outputmessage = "This was not a valid IPV4 address";
    }

document.getElementById("display").innerHTML = outputmessage;
}