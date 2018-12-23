function reverseArray(a){
    reversed_a = []
    for (i = a.length - 1; i >= 0; i--){
        reversed_a.push(a[i]);
    }
    return reversed_a;
}

function main(){
    arr = [1, 2, 3, 4];
    result = reverseArray(arr);
    console.log(result);
}

main()

console.log("hello")