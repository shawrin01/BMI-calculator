const height =  (document.getElementById('height')) ;
 const weight = (document.getElementById('weight'));

 function bmi()
 {
  const oldBMI = document.getElementById('old');
   if(oldBMI){
    oldBMI.remove()
   }
   const ans = document.createElement('h2');
   ans.id = 'old';
   const formula = Number(weight.value)/(Number(height.value)**2);
   ans.textContent = 'Your BMI:' + formula.toFixed(2);
   document.body.appendChild(ans);

   const status = document.createElement('h3');

   status.id = 'oldSt';
   oldStatus = document.getElementById('oldSt')

   if(oldStatus){
    oldStatus.remove();
   }
   if(formula<18.6){
    status.appendChild(document.createTextNode('You are underweight!'))
   }
   else if(formula>=18.6 && formula<=24.9){
    status.appendChild(document.createTextNode('You have perfect BMI'))
   }
   else{
    status.appendChild(document.createTextNode('You gained overweight!'))

   }
   document.body.appendChild(status);

   
 }