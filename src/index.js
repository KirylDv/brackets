module.exports = function check(str, bracketsConfig) {
    if( str.length & 1 ){
        return false;
    }
    str = str.split("");
    let stack = [];
    str.forEach(elem => {
        bracketsConfig.forEach(brackets => {
            if(brackets[0] === brackets[1]){
                if(elem === brackets[0])
                    if(stack[stack.length-1] === brackets[0])
                        stack.pop();
                    else
                        stack.push(elem);
            }
            else if(elem === brackets[1]){
                if(stack.length === 0 || stack[stack.length-1] !== brackets[0]){
                    return false;
                }
                stack.pop();
            }
            else if(elem === brackets[0]){
                stack.push(elem);
            }
        });
    });
    return stack.length === 0;
}
