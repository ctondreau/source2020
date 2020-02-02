// Write a for loop to print the numbers 0-9 out on the console
// for(let i=0;i<10;i++){
//     console.log(i); 
// }

// Write a while loop to print the numbers 0-9 out on the console
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }


//3. Modify your for loop to only print the odd numbers 0-9
//4. Modify your while loop to only print the even numbers 0-9

//5. Write a for loop to print out the numbers 1-100 ONLY if they are even
//   AND also divisible by 7


//6. Write a for loop to print out the numbers 1-50 if they are even OR
// if they are divisible by 7


//7. Write a switch case for a 'day' variable that prints out something
// based off of what day of the week it is
// i.e. if its monday print "good luck" or wednesday print "hump day" or friday print "party"

//8. Modify the switch case to take user input from the terminal for the day variable
// const prompt = require('prompt-sync')();
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

//9. 
// let me = {
//     name: "Clay Tondreau",
//     family: {
//         mother: "Linda",
//         father: "Chip",
//     }
// };

// console.log(me.name)
// console.log(me.family)

// function product1(x,y){
//     return x*y;
// }
// console.log(product1(2,3));

// const product2 = function(x,y){
//     return x*y;
// }
// console.log(product2(2,3));

// const product3 = (x,y) => x*y ;
// console.log(product3(2,3));

// const attendance = [
//     {firstname : "Clay" , lastname : "Tondreau", grade: 'A'},
//     {firstname : 'Tucker' , lastname : 'Wilson', grade: 'F'},
//     {firstname : 'Eliza' , lastname : 'Tobin', grade: 'B'},
//     {firstname : 'Sofia' , lastname : 'Ackerman', grade: 'C'},
//     {firstname : 'Thomas' , lastname : 'Beddow', grade: 'D'},
//     {firstname : 'William' , lastname : 'Helmrath', grade: 'A'},
//     {firstname : 'Jazlene' , lastname : 'Guevarra', grade: 'A'},
// ]

// const newAttendance = attendance.map(person=>{
//     return {firstname: person.firstname, grade: person.grade};
// });

//console.log(newAttendance)

class Rectangle {
    constructor(newHeight,newWidth){
        this.setHeight = newHeight;
        this.width = newWidth;
    }
    calcArea(){
        return this.height*this.width;
    }
    set setHeight(newHeight){
        if(newHeight<0){
            // You could throw an error here, but I'll just set it to 0
            this.height = 0;
        }else{
            this.height=newHeight;
        }
    }
}

const square = new Rectangle(10,10);
console.log(square.height); // 10
console.log(square.calcArea());// 100
square.setHeight = -10;
console.log(square.height);// 0