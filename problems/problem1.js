
let a=prompt("Enter frist number");
a=Number(a);
let b=prompt("Enter any other number number : \n");
b=Number(b);

if(a==100 || b==100)
{
    if(a==100)
    {
        console.log("Frist number is 100");
    }
    else
    {
        console.log("Second Number is 100");
    }
}
else if((a+b)==100)
{
    console.log("Sum of frist and second number is 100");
}
else
{
    console.log("None of number is 100 and also their sum is also not 100");
}

//  same problem 2nd approach

contIsEqualto100=(c,d)=> c===100 || d===100 || (c+d)===100;
console.log(contIsEqualto100(0,100));
console.log(contIsEqualto100(100,0));
console.log(contIsEqualto100(100,0));
