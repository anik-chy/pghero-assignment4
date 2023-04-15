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

console.log(evenOdd('chatgpt'));