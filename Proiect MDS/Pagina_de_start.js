function Facebook(){

    window.open("https://www.facebook.com/login/"); 
}

function Twitter(){

    window.open("https://twitter.com/login"); 

}


function Google(){

    window.open("https://aboutme.google.com/u/0/?referer=gplus"); 
    
}
var nr=3;
var Array = [

    [
        "Wia2014",
        "abc@yahoo.com",
        "elefanti1234"

],
    [
        "Alf12",
        "abc23@yahoo.com",
        "girafe1234"

],
    [
        "A",
         "a",
        "s"

    ]

];

function Sign_Up(){
    
    var user_name=document.getElementById('C1').value;
    var mail=document.getElementById('C2').value;
    var pass=document.getElementById('C3').value;
    var pass2=document.getElementById('C4').value;
    
    if(pass!=pass2) {alert('Ati reintrodus parola gresit'); 
    nr++;
    Array.push([user_name,mail,pass]);}
    else {
    alert('Datele au fost inregistrate cu succes, apasati ok pentru a continua!') 
    location.href = "Home.html";
    }
}

    var ok=0;    
function Log_In(){
    var mail=document.getElementById('C5').value;
    var pass=document.getElementById('C6').value;
    for(var i=0;i<nr;i++)
        {
            
            if(mail==Array[i][1]&&pass==Array[i][2]) 
            {location.href = "Home.html";ok=1}
           

        }
        
          if(ok==0){  alert('Datele au fost introduse gresit sau contul este inexistent!');
    }
}



