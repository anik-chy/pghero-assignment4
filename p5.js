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

console.log(gemsToDiamond(100,5,1));