/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let result = 0
    let start = 0
    let end = height.length-1
    const heightTuple = height.map((h,index)=>{return [index,h]})
    while(start< end){
        result = Math.max(result,getArea(heightTuple[start],heightTuple[end]))
        
        // move the shorter one to get the new area
        if(height[start]<=height[end]){
            start++
        }else{
            end--
        }
    }
    return result
    
};


/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var getArea = function(a,b){
    let width = Math.abs(a[0]-b[0])
    let height = Math.min(a[1],b[1])
    return width * height  
}
    