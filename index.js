console.log("JS is running!")

let count = document.getElementById("cnt");

console.log("count before: ", count.innerText);

count.innerText = 0;

console.log("count after: ", count.innerText);

// console.log(count);
const inc = document.getElementById("right");
const dec = document.getElementById("left");
inc.addEventListener("click", ()=>{
    let text = Number(count.innerText);
    count.innerText = text+1;
})
dec.addEventListener("click", ()=>{
    let text = Number(count.innerText);
    if(text<=0) count.innerText = 0; 
    else count.innerText = text-1;
})
