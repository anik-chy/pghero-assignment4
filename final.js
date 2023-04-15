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

function evenOdd(str)
{
    /* This function takes an string and check the lenght
    and returns odd or even based on the string lenght
     */
    if(typeof str !=='string')
    {
        return 'Invalid Input!!';
    }
    else
    {
        if((str.length)%2==0)
        {
            return 'even';
        }
        else
        {
            return 'odd';
        }
    }
}

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

function findingBadData(numbers)
{
    /*This function takes an array as input then counts the number of negative numbers and return it. */
    if(Array.isArray(numbers))
    {
        let badNum = 0;
        for(let i=0; i<numbers.length; i++)
        {
            if(typeof numbers[i] !== 'number')
            {
                return 'Invalid Input!!';
            }
            else if(numbers[i]<0)
            {
                badNum++;
            }
        }
        return badNum;
    }
    else
    {
        return 'Invalid Input!!';
    }
}

function gemsToDiamond(num1, num2, num3)
{
    /*This function takes three numbers of gems. Then convert each gems into dimond by multiplying gem power. If the total dimond is grater than 1000*2 then it returns total dimonds minus 2000 otherwise returns the total dimond. */
    if(typeof num1!=='number'|| typeof num2!=='number'|| typeof num3!=='number')
    {
        return 'Invalid Input!!';
    }
    else
    {
        const gemPow1 = 21;
        const gemPow2 = 32;
        const gemPow3 = 43;
        const totalDimondBoundary = 1000*2;

        let tempTotalDimond = (gemPow1*num1)+(gemPow2*num2)+(gemPow3*num3);
        if(tempTotalDimond > totalDimondBoundary)
        {
            return tempTotalDimond - totalDimondBoundary;
        }
        else{
            return tempTotalDimond;
        }
    }
}
