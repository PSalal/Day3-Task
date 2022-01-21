/*sfunction Word(str)
    {
        var sen = str.split(" ");
        var maxlength = 0;
        
        for(var i = 0; i < sen.length; i++)
        {
            if(sen[i].length > length)
            {
                length = sen[i].length
            }
        }
        return length;
    }

    
Word("web development tutorial");
*/

const str = 'Web development Tutorial';
const Word = (str)=>
{
    const strArray = str.split(" ");
    const sortStr = strArray.sort((strA , strB)=>
    {
        return strA.length - strB.length
    });
    return sortStr[sortStr.length-1];
}
console.log(Word(str));