function mindGame(number)
{
    /*This function takes an positive number
    then multiply the number by 3, then add 10, then devided by 2
    then subtract by 5 and return the result */
    if(typeof number !=='number' || number < 1)
    {
        return 'Invalid Input!!';
    }
    else
    {
        return ((((number*3)+10)/2)-5);
    }
}

console.log(mindGame(0))