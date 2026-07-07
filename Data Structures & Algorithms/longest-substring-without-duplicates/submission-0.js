class Solution {
    lengthOfLongestSubstring(s) {
        let maxStr = 0;

        for (let i = 0; i < s.length; i++) {
            let set = new Set();

            for (let j = i; j < s.length; j++) {
                if (set.has(s[j])) {
                    break;
                }

                set.add(s[j]);
                maxStr = Math.max(maxStr, j - i + 1);
            }
        }

        return maxStr;
    }
}