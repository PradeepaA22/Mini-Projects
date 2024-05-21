
  let result=document.getElementById("inputtext")

  let display =(number)=>{
      result.value=result.value + number;
    }

   function Result() {
    try {
        result.value = eval(result.value);

    }
    catch (err) {
        result.value = "ERROR";
    }
}
     