var db = dict;

window.onload = () => {
    // var str = "arigatou"
    var inputArea = document.getElementById("input");
    var outputArea = document.getElementById("output");
    var re = new RegExp(Object.keys(db).join("|"),"gi");

    

    inputArea.addEventListener('input', ()=>{
        let string = input.value.toLowerCase();

        var result = string.replace(re, function(matched){
            return db[matched];
        });
        
        outputArea.value = result;
        
    }, false);

}