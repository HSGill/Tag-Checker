/**
 * AUTHOR : Harry Gill
 * CREATED : 15-02-2020
*  Description: Using Stack Data Structure to check opening and closing tags in an HTML document
 * Programming Language : Javascript
 * @function isValid
 * @param {string} code
 *  
 */
var isValid = function (code) {
    let stack = []; 
    for (let i = 0; i < code.length; i++) {
        if (code.charAt(i) == '<' && (code.charAt(i + 1) != '/')) {
            let closeIndex = code.indexOf('>', i + 1)
            if (closeIndex < 0) {
                return false;
            }
            else { // pushes valid TagName to our stack 
                let openingTag = code.substring(i + 1, closeIndex)
                if (openingTag == openingTag.toUpperCase() && (openingTag != '*' && openingTag != '<*' && openingTag != '' && openingTag != '<')) {
                    stack.push(openingTag);
                }
            }
        }
        else {
            if (code.charAt(i + 1) == '/') {
                let closeIndex = code.indexOf('>', i + 1)
                if (closeIndex < 0) {
                    return false;
                }
                else { //Checks whether closing tag equals opening tag. If true then remove last element from the stack. 
                    let closingTag = code.substring(i + 2, closeIndex)
                    if (stack.length != 0 && stack[stack.length - 1] === closingTag) {
                        stack.pop();
                    }
                    else {
                        if (closingTag == closingTag.toUpperCase() && (closingTag != '*' || '<')) {
                            if (stack.length == 0)return "Expected #" + " found </" + closingTag + ">";
                            return "Expected <" + stack[0] + ">" + " found </" + closingTag + ">";
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
