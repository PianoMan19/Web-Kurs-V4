var input = document.getElementById("input")
var calculator = document.getElementById("calculator")
var displayDot=true;

calculator.addEventListener("click",displaySymbol)

function displaySymbol(e)
{
    var key = (String)(e.target.getAttribute("id"));
    if(key != "=" && key != "c" && key != "calculator" && key != "input")
    {   if(key===".")
        {
            if(displayDot===true)
            {
                input.innerText=input.innerText+key;
                displayDot=false;
            }
        }
        else
        {
            input.innerText=input.innerText+key;
        }

        if(key==="/" || key==="*" || key==="+" || key==="-")
        {
            displayDot=true;
        }
    }
    else if(key==="c")
    { 
       input.innerText=input.innerText.slice(0,input.innerText.length-1);
    }
    else
    {   var numberArray=[];
        var operationsArray=[];
        var advantage=[];
        var inputValue = input.innerText;
        var i=0;
        var num=0;
        var ope=0;

        for(i;i<inputValue.length;i++)
        {
            if(inputValue[0]==="/" || inputValue[0]==="*" || inputValue[0]==="+" || inputValue[0]==="-")
            {
                input.innerText="Error"
            }
            else if (inputValue[i]!="/" && inputValue[i]!="*" && inputValue[i]!="+" && inputValue[i]!="-")
            {   if(numberArray[num]===undefined)
                {
                    numberArray[num]=inputValue[i];
                }
                else
                {
                    numberArray[num]=numberArray[num]+inputValue[i];
                }
            }
            else num++;

            if (inputValue[i]==="/" || inputValue[i]==="*" || inputValue[i]==="+" || inputValue[i]==="-")
            {
               operationsArray[ope]=inputValue[i];
               ope++;
            }
        }

        i=0;
        k=0;
        var advantage=operationsArray.slice();

        for(i;i<advantage.length;i++)
        {
            if(advantage[i]==="/" || advantage[i]==="*")
            {
                var pom = advantage[i];
                advantage[i]=advantage[k];
                advantage[k]=pom;
                k++;
            }
        }

        i=0;
        var result;
        var visited=[];

        for(;i<numberArray.length;i++)
        {
            visited.push();
            visited[i]=false;
        }

        i=0;
       
        for(;i<advantage.length;i++)
        {
           k=operationsArray.indexOf(advantage[i]);
           if(advantage[i]==="/")
           {   if(parseFloat(numberArray[k+1])===0) 
               {
                   input.innerText="Error";
                   return;
               }
               result=parseFloat(numberArray[k])/parseFloat(numberArray[k+1]);
           }
           if(advantage[i]==="*")
           {
               result=parseFloat(numberArray[k])*parseFloat(numberArray[k+1]);
           }
           if(advantage[i]==="+")
           {
               result=parseFloat(numberArray[k])+parseFloat(numberArray[k+1]);
           }
           if(advantage[i]==="-")
           {
               result=parseFloat(numberArray[k])-parseFloat(numberArray[k+1]);
           }
           visited[k]=true;
           visited[k+1]=true;

           var pomo=k;
           for(;pomo<numberArray.length;pomo++)
           {
               if(visited[pomo]===true)
               numberArray[pomo]=result;
           }

           pomo=k;
           for(;pomo>=0;pomo--)
           {
               if(visited[pomo]===true)
               numberArray[pomo]=result;
           }
           console.log(numberArray);
        }
        
        if(result!=undefined)
        {
            input.innerText=result;
        }
    }
}
