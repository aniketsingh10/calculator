
// store the given input in the string
let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{

    // to evaluate the result if '=' is clicked
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }

    // to clear the input
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }

    // else store the value in the string
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})