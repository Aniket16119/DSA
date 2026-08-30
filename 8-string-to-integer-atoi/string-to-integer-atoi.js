var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let num = 0;

    // 1. Skip leading spaces
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // 2. Check sign
    if (s[i] === '+') {
        i++;
    } else if (s[i] === '-') {
        sign = -1;
        i++;
    }

    // 3. Read digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        // 4. Check overflow before adding digit
        if (num > Math.floor((2147483647 - digit) / 10)) {
            return sign === 1 ? 2147483647 : -2147483648;
        }

        num = num * 10 + digit;
        i++;
    }

    return num * sign;
};
