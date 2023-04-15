function isLGSeven(number)
{
    /* This function takes an integer and calculates the difference from 7.
    If the difference is less than 7 then it returns the subtraction result
    otherwise returnes the double of the input value. */
    const seven = 7;
    if(typeof number !=='number')
    {
        return 'Invalid Input!!';
    }
    else{
        if((number - seven)<seven)
        {
            return (number - seven);
        }
        else
        {
            return (number*2);
        }
    }
}

console.log(isLGSeven(15))