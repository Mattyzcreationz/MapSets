//Qeustion #1
//What dose the following code Return?  
new Set([1,1,2,2,3,4])

Set {1, 2, 3, 4}

/*Question #2
What dose the following code return*/
 [...new Set("referee")].join("") 
"ref"

 /*Question #3 
What does the Map m look like after running the following code?*/
  let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
false

/*## **hasDuplicate**

Write a function called hasDuplicate which accepts an array and returns 
true or false if that array contains a duplicate
 */
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

function hasDuplicate(arr) {
    let uniqueElements = new Set();

    for (let elem of arr) {
        if (uniqueElements.has(elem)) {
            return true; 
        } else {
            uniqueElements.add(elem);
        }
    }

    // If the loop completes without finding a duplicate, return false
    return false;
}



/*VowelCount  
Write a function called vowelCount which accepts a string and returns a map 
where the keys are numbers and the values are the count of the vowels in the string.*/
function vowelCount(str) {
    str = str.toLowerCase();

    let vowelMap = new Map();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str) {
        if (vowels.includes(char)) {
            if (vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1);
            } else {
                vowelMap.set(char, 1);
            }
        }
    }

    return vowelMap;
}
vowelCount('awesome') 
vowelCount('Colt') 

