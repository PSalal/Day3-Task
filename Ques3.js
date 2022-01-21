const numbers = [40, 100, 1, 5, 25, 10];
 numbers.sort(function(a,b)
 {
     return a-b;
 });
 console.log(numbers); 



 const num = [40, 100, 1, 5, 25, 10];
 num.sort(function(a,b)
 {
     return b-a;
 });
 console.log(num); 