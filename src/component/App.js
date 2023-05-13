const App = () => {

    function addFunc(){
        const num1 = document.getElementById('num1');
        const num2 = document.getElementById('num2');
        if(num1.value.trim() ==='' || num2.value.trim() ===''){
            let errorMsg = document.getElementById('errorMsg');
            errorMsg.innerHTML = `Error :  Num1 cannot be empty`
            errorMsg.style.color = "red";
            document.getElementById('result').style.display = "none";
        }
        else{
            let result = Number.parseInt(num1.value)+Number.parseInt(num2.value)
            let resultMsg = document.getElementById('result');
            resultMsg.innerHTML = `Result = ${result}`;
            let errorMsg = document.getElementById('errorMsg');
            errorMsg.innerHTML = `Success : Your result is shown above!`;
            errorMsg.style.color = "green";
            document.getElementById('result').style.display = "block";
        }
    }
    function subFunc(){
        const num1 = document.getElementById('num1');
        const num2 = document.getElementById('num2');
        if(num1.value.trim() ==='' || num2.value.trim() ===''){
            let errorMsg = document.getElementById('errorMsg');
            errorMsg.innerHTML = `Error :  Num1 cannot be empty`
            errorMsg.style.color = "red";
            document.getElementById('result').style.display = "none";
        }
        else{
            let result = Number.parseInt(num1.value)-Number.parseInt(num2.value)
            let resultMsg = document.getElementById('result');
            resultMsg.innerHTML = `Result = ${result}`;
            let errorMsg = document.getElementById('errorMsg');
            errorMsg.innerHTML = `Success : Your result is shown above!`
            errorMsg.style.color = "green";
            document.getElementById('result').style.display = "block";
        }
    }
    function mulFunc(){
        const num1 = document.getElementById('num1');
        const num2 = document.getElementById('num2');
        if(num1.value.trim() ==='' || num2.value.trim() ===''){
            let errorMsg = document.getElementById('errorMsg');
            errorMsg.innerHTML = `Error :  Num1 cannot be empty`
            errorMsg.style.color = "red";
            document.getElementById('result').style.display = "none";
        }
        else{
            let result = Number.parseInt(num1.value)*Number.parseInt(num2.value)
            let resultMsg = document.getElementById('result');
            resultMsg.innerHTML = `Result = ${result}`;
            let errorMsg = document.getElementById('errorMsg');
            errorMsg.innerHTML = `Success : Your result is shown above!`
            errorMsg.style.color = "green";
            document.getElementById('result').style.display = "block";
        }
    }
    function divFunc(){
        const num1 = document.getElementById('num1');
        const num2 = document.getElementById('num2');
        if(num1.value.trim() ==='' || num2.value.trim() ===''){
            let errorMsg = document.getElementById('errorMsg');
            errorMsg.innerHTML = `Error :  Num1 cannot be empty`
            errorMsg.style.color = "red";
            document.getElementById('result').style.display = "none";
        }
        else{
            let result = Number.parseInt(num1.value)/Number.parseInt(num2.value)
            let resultMsg = document.getElementById('result');
            resultMsg.innerHTML = `Result = ${result}`;
            let errorMsg = document.getElementById('errorMsg');
            errorMsg.innerHTML = `Success : Your result is shown above!`
            errorMsg.style.color = "green";
            document.getElementById('result').style.display = "block";
        }
    }
  return (
    <div id="container">
      <p class="heading">React Calculator</p>
      <input type="text" placeholder="Num 1" id="num1" />
      <br />
      <input type="text" placeholder="Num 2" id="num2" />
      <br />
      <div>
        <button onClick={addFunc} class="btn" id="add">
          +
        </button>
        <button onClick={subFunc} class="btn btn2" id="sub">
          -
        </button>
        <button onClick={mulFunc} class="btn btn2" id="mul">
          *
        </button>
        <button onClick={divFunc} class="btn btn2" id="div">
          /
        </button>
      </div>
      <br />
      <p id="result"></p>
      <p id="errorMsg"></p>
    </div>
  );
};

export default App;
