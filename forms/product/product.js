//5


let nums = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
function product(num1,num2) {
    let products = num1*num2
    return products
}

for (i=0; i < nums.length-1; i++)
    console.log(product(nums[i],nums[i+1]))
