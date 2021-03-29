

var btn = document.getElementById("button");


var input = document.getElementById("input");

btn.addEventListener("click", function click(){
    tabla(input.value);
});


function tabla (num) {
    document.body.innerHTML = "";
    var vector=[0,1,2,3,4,5,6,7,8,9,10];
    for (let index = 0; index <= 10; index++) {
        var ecuacion=num*index;
        document.body.innerHTML += num+"*"+index+": "+(ecuacion) + "<br>";
        vector[index]=ecuacion;
    }
    WriteFile(vector[10]);
}

function WriteFile(vector){
    const fs= require('fs');
    for(let index=0;index<=10;index++){
        fs.writeFile('tabla.txt', vector[index], (error) =>{
            if(error){
                throw(error);
            }
        });
    
    }

    /*var fso  = CreateObject("Scripting.FileSystemObject");
    var fh = fso.CreateTextFile("C:\\Test.txt", true);
    var error = new File(["Mi cadena de texto"], "error.txt");
    for(let i=0;i<=10;i++){
        fh.WriteLine(vector[i]+"<br>");
    }    
    fh.Close(); */
}