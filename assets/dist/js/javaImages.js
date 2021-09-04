var images= document.getElementsByClassName("java_script");
for(var i=0;i<images.length;i++)
{
    images[i].addEventListener("click",function(){
        var node = document.createTextNode("kk");
        images[i].appendChild(node);

        var para = document.createElement("p");
        var node = document.createTextNode("This is new.");
        para.appendChild(node);

        // images[i] = document.getElementById("div1");
        images[i].appendChild(para);
    })
}