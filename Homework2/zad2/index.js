var XOtable = document.getElementById("XO_table");
var cijiPotez = false;

XOtable.addEventListener("click", potez);
 
function potez(e)
{   var uspjesan = false;
    var krajIgre = false ;

    if(e.target.innerText != "X" && e.target.innerText != "O"){
    if(cijiPotez.valueOf() === false)
    { 
        e.target.innerText = "X";
        e.target.setAttribute("class","blocks2");
        document.getElementById("Player").innerText = "It's Player 2's turn";
        //cijiPotez = !cijiPotez;  //stavi na kraj
    }
    else
    {
        e.target.innerText = "O";
        e.target.setAttribute("class","blocks2");
        document.getElementById("Player").innerText = "It's Player 1's turn";
        //cijiPotez = !cijiPotez;

    }
    uspjesan =true;
    }
    else{
        alert("Nemoguce promjeniti vrijednost polja iz X u O ili obratno. Igrajte ponovo.");
    }
    
    var kordinata = e.target.getAttribute("id");
    var horizontala = parseInt(kordinata/3,10);
    var vertikala = parseInt(kordinata%3,10);

    if((document.getElementById((String)(0)).innerText == document.getElementById((String)(4)).innerText) &&
        (document.getElementById((String)(4)).innerText == document.getElementById((String)(8)).innerText) &&
        document.getElementById((String)(0)).innerText!="1")
        {
            if(cijiPotez==false)//X
            {
                alert("Player 1 won the game!");
                krajIgre = true;
                location.reload();
            }
                                               //sta ako je id 5
            else
            {
                alert("Player 2 won the game!");
                krajIgre = true;
                location.reload();
            }
        }

        if((document.getElementById((String)(2)).innerText == document.getElementById((String)(4)).innerText) &&
        (document.getElementById((String)(4)).innerText == document.getElementById((String)(6)).innerText) &&
        document.getElementById((String)(2)).innerText!="1")
        {
            if(cijiPotez==false)//X
            {
                alert("Player 1 won the game!");
                krajIgre = true;
                location.reload();
            }
                                               //sta ako je id 5
            else
            {
                alert("Player 2 won the game!");
                krajIgre = true;
                location.reload();
            }
        }

        
        if((document.getElementById((String)(3*horizontala)).innerText == document.getElementById((String)(3*horizontala+1)).innerText) &&
        (document.getElementById((String)(3*horizontala+1)).innerText == document.getElementById((String)(3*horizontala+2)).innerText) &&
        (document.getElementById((String)(3*horizontala)).innerText!="1"))
        {
            if(cijiPotez==false)//X
            {
               alert("Player 1 won the game!");
               krajIgre = true;
               location.reload();
            }
            else
            {
               alert("Player 2 won the game!");
               krajIgre = true;
               location.reload();
            }
        }

        if((document.getElementById((String)(vertikala)).innerText == document.getElementById((String)(3+vertikala)).innerText) &&
        (document.getElementById((String)(3+vertikala)).innerText == document.getElementById((String)(6+vertikala)).innerText) &&
        document.getElementById((String)(vertikala)).innerText!="1")
        {
            if(cijiPotez==false)//X
            {
                alert("Player 1 won the game!");
                krajIgre = true;
                location.reload();
            }
            else
            {
                alert("Player 2 won the game!");
                krajIgre = true;
                location.reload();
            }
        }

        if(krajIgre==false){
        for(var i =0;i<9;i++)
        {
            if(document.getElementById((String)(i)).innerText=="X" || document.getElementById((String)(i)).innerText=="O" )
            {   if(i==8) 
                {
                    alert("It's a draw.");
                    location.reload();
                }
                continue;
            }
            else
            {
                break;
            }
            
        }
        }

        if(uspjesan==true){
        cijiPotez = !cijiPotez;}

    

}