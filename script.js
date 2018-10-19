
        var inputPX = document.getElementById("inputPX"), valPX = -6;
        var inputPY = document.getElementById("inputPY"), valPY = 4;
        var inputBlur = document.getElementById("inputBlur"), valBlur = 10;
        var inputColor = document.getElementById("inputColor"), valColor = "0, 0, 0, ";
        var inputOpa = document.getElementById("inputOpa"), valOpa = 0.733;
        var inputStyle = document.getElementById("inputStyle"), valStyle = 15;
        var shadowEl = document.getElementById("shadowEl");
        var showCode = document.getElementById("show-code"), codeField = document.getElementById("code-field");
        var style = valPX + "px " + valPY + "px " + valBlur + "px rgba(" + valColor + " " + valOpa + ")";
        
        setShadow();
        function setShadow () {
            
            shadowEl.style.textShadow = valPX + "px " + valPY + "px " + valBlur + "px rgba(" + valColor + " " + valOpa + ")";
            codeField.innerHTML = "text-shadow: " + valPX + "px " + valPY + "px " + valBlur + "px rgba(" + valColor + " " + valOpa + ");";
        }
        
        inputPX.addEventListener("input", function() {
            valPX = inputPX.value;
            setShadow();
        })
        
        inputPY.addEventListener("input", function() {
            valPY = inputPY.value;
            console.log(valPY);
            setShadow();
        })
        
        inputBlur.addEventListener("input", function() {
            valBlur = inputBlur.value;
            console.log(valBlur);
            setShadow();
        })
        
        inputColor.addEventListener("input", function() {
            valColor = inputColor.value.toString().replace("#", "");
            console.log(inputColor.value.toString());
            var R = valColor.substr(0, 2);
            var G = valColor.substr(2, 2);
            var B = valColor.substr(4, 2);   
   
            var R = parseInt(R, 16);
            var G = parseInt(G, 16);
            var B = parseInt(B, 16);
   
            valColor = R + ", " + G + ", " + B + ", ";
            
            setShadow();
        })
        
        inputOpa.addEventListener("input", function() {
            valOpa = inputOpa.value;
            console.log(valOpa);
            setShadow();
        })
        
        showCode.addEventListener("click", function () {
            codeField.innerHTML = style;
        })