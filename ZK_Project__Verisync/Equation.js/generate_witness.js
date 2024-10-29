const snarkjs = require("snarkjs");
const fs = require("fs");

async function generateWitness() {
    const input = JSON.parse(fs.readFileSync("input.json"));
    const wasmPath = "./Equation_js/Equation.wasm";  // adjust if needed
    const witnessOutput = "witness.wtns";
    
    await snarkjs.wtns.calculate(wasmPath, input, witnessOutput);
    console.log("Witness file generated at:", witnessOutput);
}

generateWitness().catch((err) => {
    console.error("Error generating witness:", err);
});
