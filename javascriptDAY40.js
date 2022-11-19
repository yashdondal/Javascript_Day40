/* ========(use case1: greates number)=============*/
let max=999;
let min=100;
 let number1=Math.floor(Math.random() * (max - min + 1) + min);
 let number2=Math.floor(Math.random() * (max - min + 1) + min);
 let number3=Math.floor(Math.random() * (max - min + 1) + min);

  console.log(number1,number2,number3);
  if (number1 > number2)
  {
      if(number1 > number3)
      {
          console.log("First number is largest among all");
      }
      else
      {
          console.log("Third number is largest among all");
      }
  }
  else if (number2 > number3)
  {
      console.log("the Second numbers is largest among all");
  }
  else
  {
      console.log("the Third number is greatest among all");
  }

