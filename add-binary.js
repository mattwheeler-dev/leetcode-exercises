const addBinary = (a, b) => {
    const lenA = a.length;
    const lenB = b.length;
    let answer = '';
    let carry = 0;
    if (lenA > lenB) {
        for (i = 0; i < lenA - lenB; i++) {
            b = '0' + b;
        }
    } else if (lenA < lenB) {
        for (i = 0; i < lenB - lenA; i++) {
            a = '0' + a;
        }
    }
    for (let i = (a.length - 1); i >= 0; i--) {
        if (a[i] === '0' && b[i] === '0' && carry === 0) {
            answer = "0" + answer;
        } else if (a[i] === '0' && b[i] === '0' && carry === 1) {
            answer = "1" + answer;
            carry = 0;
        } else if (a[i] === '0' && b[i] === '1' && carry === 1) {
            answer = "0" + answer;
            carry = 1;
        } else if (a[i] === '1' && b[i] === '0' && carry === 1) {
            answer = "0" + answer;
            carry = 1;
        } else if (a[i] === '1' && b[i] === '0' && carry === 0) {
            answer = "1" + answer;
            carry = 0;
        } else if (a[i] === '1' && b[i] === '1' && carry === 1) {
            answer = "1" + answer;
            carry = 1;
        } else if (a[i] === '1' && b[i] === '1' && carry === 0) {
            answer = "0" + answer;
            carry = 1;
        } else if (a[i] === '0' && b[i] === '1' && carry === 0) {
            answer = "1" + answer;
            carry = 0;
        }
    }
if (carry === 1) {
    answer = '1' + answer;
}
return answer;
};
