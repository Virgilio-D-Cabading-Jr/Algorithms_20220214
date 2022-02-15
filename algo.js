/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let longestLength = 0;
    let substringWithNoRepeat = "";
    for (let x=0; x<s.length; x++) {
        if (!substringWithNoRepeat.includes(s[x])) {
            substringWithNoRepeat += s[x];
            if (substringWithNoRepeat.length > longestLength) {
                longestLength = substringWithNoRepeat.length;
            }
        } else {
            substringWithNoRepeat = "";
        }
    }
    return longestLength;
};

const string1 = "abcabcbb";
const string2 = "bbbbb"
const string3 = "pwwkew";

console.log(`lengthOfLongestSubstring ${string1}`,lengthOfLongestSubstring(string1));
console.log(`lengthOfLongestSubstring ${string2}`,lengthOfLongestSubstring(string2));
console.log(`lengthOfLongestSubstring ${string3}`,lengthOfLongestSubstring(string3));