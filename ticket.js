var age = 2

if(age > 60 ){
    console.log("Ticket Price = 15")
}
else if(age >= 18  && age < 60){
    console.log("Ticket price = 20")
}
else if(age >= 12  && age < 18){
    console.log("Ticket price = 10")
}
else if(age > 0  && age < 12){
    console.log("Ticket price = 5")
}
else{
    console.log("INVALID INFORMATION")
}