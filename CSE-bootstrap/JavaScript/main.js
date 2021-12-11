function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    display(data.profile);
})

function display(Cse){
    //cards area'
    var rdata=document.querySelector(" .row")
        for(var k=1;k<Cse.length;k++){
        console.log(Cse)


    //  card
    var cad=document.createElement("div")
        cad.classList.add("card")
        cad.appendChild(cad)

     // img 
     var pic=document.createElement("img")
         pic.src=Cse[k].img
         pic.appendChild(pic)

     var sname=document.createElement("h1")
         sname.textContent=Cse[k].name;
         cad.appendChild(sname)

         console.log(pic)
    }   
}


