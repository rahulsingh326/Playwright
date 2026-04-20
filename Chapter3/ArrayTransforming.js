let scores=[40,50,70,80,90];
let grades =scores.map(s=>s>70 ? "pass": "fail");
console.log(grades);
console.log("__________________");

let fil = scores.filter(s => s>=70);
console.log(fil);

let total = scores.reduce((sum, s)=>``)