<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calculator</title>
</head>
<body>
    <div class="container">
        <h1>calculator</h1>
        <input type="text"  id="display" disabled/>
        <br>
        <br>
        <div class="buttons">
        <button>7</button>
        <button>8</button>
        <button>6</button>
        <button>5</button>
        <button>4</button>
        <button>3</button>
        <button>2</button>
        <button>1</button>
        <button>+</button>
        <button>/</button>
        <button>*</button>
        <button>=</button>
        <button>0</button>
        <button>.</button>
<button id="clear">c</button>
</div>
    </div>
    <script>
        var display= document.getElementById("display");
        var buttons =document.querySelectorAll('button');
        var  expression =" ";
        buttons.forEach(button => {
            button.addEventListener("click",()=> {
                if (button.id === 'clear') {
                 expression='';
                    display.value ='';

                }else if(button.textContent === '='){
                    try{
                        display.value =eval(expression);
                        expression =display.value;
                    }catch{
                        display.value ='Error';
                        expression = '';
                    }
                }else{
                    expression += button.textContent;
                    display.value =expression;
                }

            })
        });
    </script>
</body>
</html>
