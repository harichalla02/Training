function countVowels(str) 
{
    let count = 0;
    for (let i = 0; i < str.length; i++) 
        {
            if ("aeiouAEIOU".includes(str[i])) 
                {
                    count++;
                }
        }
    console.log("Number of vowels:", count);
}
countVowels("Hello World");