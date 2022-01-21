 
 /*
 str = "Web development tutorial";
 const arr = str.split(" ");
 arr.sort();
console.log(arr[0]);
*/




const str = 'Web development Tutorial';
const Word = (str)=>
{
    const strArray = str.split(" ");
    const sortStr = strArray.sort((strA , strB)=>
    {
        return strB.length - strA.length
    });
    return sortStr[0];
}
console.log(Word(str));

