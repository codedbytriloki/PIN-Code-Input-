const inputs = document.querySelectorAll(".input");

inputs.forEach((input , index) => {

  input.addEventListener('input', () => {
  input.value = input.value.replace(/[^0-9]/g,'');
})

  input.addEventListener('input', () => {
    if(input.value.length === 1){
     if(index < inputs.length-1){
        inputs[index+1].focus();
      }
    }
  })

  input.addEventListener('keydown', (e) => {
    if(e.key === 'Backspace' && input.value === ''){
      if(index > 0){
        inputs[index-1].focus();
      }
    }
  })

})
function resetFun(){
  inputs.forEach(input => 
    input.value = ""
  );
  inputs[0].focus();
}

function IndexFirst(){
  inputs.forEach((input,index) => {
    if(index === 0){
      inputs[0].focus();
    }
  })
}
IndexFirst();