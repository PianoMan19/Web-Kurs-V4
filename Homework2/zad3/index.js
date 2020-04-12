
var blockArray = document.getElementById("array");
var input = document.getElementById("input");
var add = document.getElementById("add");
var palindrome = document.getElementById("palindrome");

input.addEventListener("change",submitItems);
add.addEventListener("click",addItem);
blockArray.addEventListener("change",Alert);
blockArray.addEventListener("click",removeItem);


function addItem() {

    var div = document.createElement("div");
    div.className = "XO_table";
    
    var input = document.createElement("input");
    input.className = "XO_table2";
    
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "blocks";
    deleteBtn.innerText = "X";

    div.appendChild(input);
    div.appendChild(deleteBtn);
    blockArray.appendChild(div);

    isPalindrome();
  }

function submitItems()
{
    var number = (Number)(input.value);

    for(var i=1 ;i<number;i++)
    {
        addItem();
    }
    
}

function Alert(e)
{   var valueI = (Number)((e.target.value).charCodeAt(0));
    if(!((valueI>=65 && valueI<=90) || (valueI>=97 &&
       valueI<=122) || valueI===32 ))
    {
        alert("Uneseni karakter nije slovo (A-Z,a-z), niti space. Pokusajte ponovo.");
        e.target.value="";
    } 

    isPalindrome();
}

function removeItem(e) {
    if (e.target.classList.contains("blocks")) {
      if (confirm("Are you sure?")) {
        var div = e.target.parentElement;
        blockArray.removeChild(div);
      }
    }
    isPalindrome();
  }

function isPalindrome()
{
    var inputs = blockArray.getElementsByTagName("input");
    var n = inputs.length;
    var middle = parseInt((n/2),10);

    for(var i=0;i<middle;i++)
    { 
        if(inputs[i].value===inputs[n-1-i].value)
        {   
            if(i===middle-1)
            {
                palindrome.innerText = "This array is a palindrome.";
            }
            continue;
        }
        else
        {
            palindrome.innerText = "This array is not a palindrome.";
            break;
        }
    }
}