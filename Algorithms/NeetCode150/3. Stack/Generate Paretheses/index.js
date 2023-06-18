const generateParenthesis = function (n) {
    const result = [];
    const generate = (left, right, str) => {
        if (left === n && right === n) {
            result.push(str);
            return;
        }
        if (left < n) {
            generate(left + 1, right, str + '(');
        }
        if (right < left) {
            generate(left, right + 1, str + ')');
        }
    };
    generate(0, 0, '');

    return result;
};
