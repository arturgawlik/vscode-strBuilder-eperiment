import { StringBuilder } from "../vscode-source-code/stringBuilder";

const strBuilder = new StringBuilder(11_000_000);
let plainStr = "";

// warm-up (let js engine find fasth-path)
let i = 0;
while (i++ < 100_000) {
  strBuilder.appendASCIICharCode(getRandomCharCode());
}
strBuilder.build();

i = 0;
while (i++ < 100_000) {
  plainStr += getRandomChar();
}

// reset and run test
strBuilder.reset();
plainStr = "";

i = 0;
const builderStart = performance.now();
while (i++ < 10_000_000) {
  strBuilder.appendASCIICharCode(getRandomCharCode());
}
strBuilder.build();
const builderEnd = performance.now();

i = 0;
const plainStrStart = performance.now();
while (i++ < 10_000_000) {
  plainStr += getRandomChar();
}
const plainStrEnd = performance.now();

console.log(`StringBuilder = ${builderEnd - builderStart} ms`);
console.log(`Plain string = ${plainStrEnd - plainStrStart} ms`);

function getRandomCharCode() {
  return Math.floor(Math.random() * (122 - 65 + 1)) + 65;
}
function getRandomChar() {
  return String.fromCharCode(getRandomCharCode());
}
