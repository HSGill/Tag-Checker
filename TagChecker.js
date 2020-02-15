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
                if (str == str.toUpperCase() && (str != '*' && str != '<*' && str != '' && str != '<')) {

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

                    if (stack.length != 0 && stack[stack.length - 1] === str) {
                        stack.pop();
                    }
                    else {
                        if (str == str.toUpperCase() && (str != '*' || '<')) {
                            if (stack.length == 0)return "Expected #" + " found </" + str + ">";
                            return "Expected <" + stack[0] + ">" + " found </" + str + ">";
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
        return "Expected </" + stack[0] + ">" + " found #";
    }

};
console.log(isValid('The following text<C><B>is centred and in boldface</B></C>'));
console.log(isValid('<B>This <\g>is <B>boldface</B> in <<*> a</B> <\6> <<d>sentence'));
console.log(isValid('<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>'));
console.log(isValid('<B>This should be in boldface, but there is an extra closing tag</B></C>'));
console.log(isValid('<B><C>This should be centred and in boldface, but there is a missing closing tag</C>'));
