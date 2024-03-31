let butt = document.getElementById("press");
let headingA = document.getElementById("fib");

let fib = [0, 1];
let index = 1;
butt.onclick = () => {
    fib.push(fib[index] + fib[index - 1])
    index++;
    let lst = fib[index];
    headingA.textContent += ` ${lst}`;
};
