var minWindow = function(s, t) {

    if (t.length > s.length) {
        return "";
    }

    let need = new Map();

    // Count characters required from t
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let have = new Map();

    let left = 0;
    let formed = 0;

    let minLength = Infinity;
    let minStart = 0;

    for (let right = 0; right < s.length; right++) {

        let char = s[right];

        // Add character only if it is needed
        if (need.has(char)) {

            have.set(char, (have.get(char) || 0) + 1);

            // We just fulfilled this character's requirement
            if (have.get(char) === need.get(char)) {
                formed++;
            }
        }

        // Current window contains everything required
        while (formed === need.size) {

            // Check if this window is smaller
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minStart = left;
            }

            let leftChar = s[left];

            if (need.has(leftChar)) {

                have.set(
                    leftChar,
                    have.get(leftChar) - 1
                );

                // We no longer have enough of this character
                if (have.get(leftChar) < need.get(leftChar)) {
                    formed--;
                }
            }

            left++;
        }
    }

    if (minLength === Infinity) {
        return "";
    }

    return s.substring(minStart, minStart + minLength);
};