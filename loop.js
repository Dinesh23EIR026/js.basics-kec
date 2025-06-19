for (let i = 0; i < 10; i++) {
    console.log(i, "\t")
}
let a = 0;
while (a < 10) {
    if (a == 5) {
        a++
        continue;
        
    }
    if (a === 8) {
        break;
    }
    console.log(a)
    a++;
}