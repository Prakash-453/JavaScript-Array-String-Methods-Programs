1) Reverse a String 

const inputString = "hello world";
Output: "dlrowolleh"

PROGRAM:
const inputString = "hello world"
rev_str=''
for(i=inputString.length-1;i>=0;i--)
{
    rev_str=rev_str+inputString[i]
}
console.log(rev_str)

Output : 
dlrow olleh

2) Find the Longest Word in a Sentence 

const inputSentence = "This is a sentence with words of varying lengths"; 
Output: "sentence"

PROGRAM:
const inputSentence = "This is a sentence with words of varying lengths"; 
str=inputSentence.split(' ')
longest_word=''
for(i=0;i<str.length;i++)
{
    // console.log(str[i].length,str[i])
    if(str[i].length>longest_word.length)
    {
        longest_word=str[i]
    }
}
console.log(longest_word)

Output:
sentence

3: Count the Occurrences of a Word in a Sentence ?

const inputSentence = "This sentence repeats the word 'this' twice"; 
Output: 2

const inputSentence = "This sentence repeats the word 'this' twice";
word = "this";
res = 0;
words = inputSentence.toLowerCase().split(' ')
for (i of words) 
{
    words1=i.replace(/[^a-zA-Z0-9]/g)
    if(word==words1)
    {
        res++
    }
}
console.log(res)

OUTPUT
   2
4) Capitalize the First Letter of Each Word  ?

const inputSentence = "this is a sentence with words to capitalize"; 
Output: "This Is A Sentence With Words To Capitalize"

PROGRAM
const inputSentence = "this is a sentence with words to capitalize";
words = inputSentence.split(" ");
array=words.map(words=>words.charAt(0).toUpperCase()+words.slice(1))
console.log(array.join(' '))

OUTPUT
This Is A Sentence With Words To Capitalize

5: Remove Duplicate Elements from an Array ?

const inputArray = [1, 2, 3, 2, 4, 1];
Output: [1, 2, 3, 4]

PROGRAM
const inputArray = [1, 2, 3, 2, 4, 1];
unique=[]
for(i of inputArray)
{
    if(!unique.includes(i))
    {
        unique.push(i)
    }
}
console.log(unique)
Output:
[ 1, 2, 3, 4 ]


6: Check if a String is a Palindrome ?

const inputString = "racecar"; 
Output: true

PROGRAM:
const inputString = "racecar"; 
rev=''
for(i of inputString)
{
    rev=i+rev
}
console.log((rev==inputString))

OUTPUT
true



