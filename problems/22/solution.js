/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = []
    // close : close parenthesis remains
    // open: open parnthsis remains
    // tmp: current parenthisis
    const backTracking = (close,open,tmp)=>{
        console.log(close, open,tmp)
        if(close === 0 && open ===0){
            result.push(tmp)
            return 
        }
        
        // valid condition
        if(close>=open && open >= 0 && close >= 0) {
            // add open parenthese
            backTracking(close, open-1, tmp+"(")
            
            // add close parenthese
            backTracking(close-1, open, tmp+")")
        }       
    }
    
    backTracking(n,n,"")
    return result
};