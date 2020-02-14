/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function (code) {
    let stack = [];

    for (let i = 0; i < code.length; i++) {
        if (code.charAt(i) == '<' && (code.charAt(i + 1) != '/')) {
            let closeIndex = code.indexOf('>', i + 1)
            if (closeIndex < 0) {
                return false;
            }
            else {
                let str = code.substring(i + 1, closeIndex)
                if (str == str.toUpperCase() && (str != '*' || '<')) {

                    stack.push(str);
                }

            }
        }
        else {
            if (code.charAt(i + 1) == '/') {

                let closeIndex = code.indexOf('>', i + 1)
                if (closeIndex < 0) {
                    return false;
                }
                else {
                    let str = code.substring(i + 2, closeIndex)

                    if (stack.length != 0 || stack.length - 1 == str) {
                        stack.pop();
                    }
                    else {
                        if (str == str.toUpperCase() && (str != '*' || '<')) {

                            stack.push(str);
                        }

                    }
                }
            }
        }
    }
    if (stack.length == 0) {
        return "Correctly tagged paragraph";
    }
    else {
        return stack;
    }

};
