/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let longestLength = 0;

    for (let x=0; x<s.length; x++) {
        let substringWithNoRepeat = "";
        for (let y=x; y<s.length; y++) {
            if (!substringWithNoRepeat.includes(s[y])) {
                substringWithNoRepeat += s[y];
                if (substringWithNoRepeat.length > longestLength) {
                    longestLength = substringWithNoRepeat.length;
                }
            } else {
                substringWithNoRepeat = "";
            }
        }
    }

    return longestLength;
};

const string1 = "abcabcbb";

console.log(`lengthOfLongestSubstring ${string1}`,lengthOfLongestSubstring(string1))