/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let longestLength = 0;

    for (let x=0; x<s.length; x++) {
        console.log(s[x]);
    }

    return longestLength;
};

const string1 = "abcabcbb";

console.log(`lengthOfLongestSubstring ${string1}`,lengthOfLongestSubstring(string1))