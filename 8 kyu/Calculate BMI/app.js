// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



function bmi(w,h) {
    let bmi = w/(h*h)
   
       if (bmi <= 18.5){
         greeting = "Underweight"
       }
       else if ( bmi <= 25){
         greeting = "Normal"
       }
       else if ( bmi <= 30){
         greeting = "Overweight"
       }
           else{
         greeting = "Obese"
       }
       return greeting
   }