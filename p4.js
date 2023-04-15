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

console.log(findingBadData([ -4, -9, -5, -33, 'a']));