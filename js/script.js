




var btn=document.getElementById("btn");

/************************************************ */



btn.addEventListener("click",function(){

    var parent=document.getElementById("parent");
    var row=parent.getElementsByClassName("row");
    
    var i;
    for (i = 0; i < row.length; i++) {
        var last=row.length-1;

        row[i].style.display = "block";
        row[i].classList.remove("none");


        if(last){
            btn.classList.add("none");
        }

    }

});




/*
    var row=document.getElementsByClassName("ROW")[0];
    row.classList.remove("none");


    var att = document.createAttribute("style");       // Create a "class" attribute
    att.value = "display: block";   
    row.setAttributeNode(att);                          // Add the class attribute to <h1>





    var x = document.createElement("STYLE");
    var t = document.createTextNode(".none {display: block!important;}");
    x.appendChild(t);

    document.head.appendChild(x);*/