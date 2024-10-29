# ZK_Project_VeriSync
Assesment for Verisync Lab ZK Research Engineer
# ZKProof Project

## Overview
This project focuses on implementing a zero-knowledge (ZK) proof system to demonstrate the knowledge of a solution for the equation \(x^2 + x + 7 = 9\) without revealing the value of \(x\). The project utilizes the **snarkjs** framework and the **Circom** programming language to design and verify ZK circuits.

## Core Concepts
- **Objective**: Prove knowledge of \(x\) such that \(x^2 + x + 7 = 9\) without disclosing \(x\).
- **ZK Protocol Chosen**: Groth16 due to its efficient proof size and fast verification times.

## Installations

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** (Node Package Manager)

### Steps to Setup

1. **Clone the Repository**   
   ```bash
   git clone <repository-url>
   cd ZK_Project_VeriSync
2. **Install Dependencies**
   ```bash
   npm install
3. **Compile the circuit **
   ```bash
   circom Equation.circom --r1cs --wasm --sym

4. ** Trusted setup **
   ```bash
   snarkjs powersoftau new bn128 12 pot_final.ptau
   snarkjs groth16 setup Equation.r1cs pot_final.ptau Equation_0000.zkey
   snarkjs zkey contribute Equation_0000.zkey Equation_final.zkey --name="First contribution" -v
   snarkjs zkey export verificationkey Equation_final.zkey verification_key.json

5. **Generate the witness **
   ```bash
   node Equation_js/generate_witness.js Equation_js/Equation.wasm input.json witness.wtns

6. ** Generate the proof **
   ```bash
   snarkjs groth16 prove Equation_final.zkey witness.wtns proof.json public.json

7. ** Verify the proof **
   ```bash
   snarkjs groth16 verify verification_key.json public.json proof.json


  📝 Findings
Inputs Used: The input value for 𝑥
x was set to 3.
Generated Proof: The proof was generated successfully.
Verification Outputs: The verification confirmed that the proof is valid.
Challenges Faced:
Module Dependencies: Encountered issues with module dependencies, resolved by reinstalling snarkjs.
Input Format: Ensured the correct input format for the proof generation.

📝 Findings
Inputs Used: The input value for 𝑥
x was set to 3.
Generated Proof: The proof was generated successfully.
Verification Outputs: The verification confirmed that the proof is valid.

Challenges Faced:
Module Dependencies: Encountered issues with module dependencies, resolved by reinstalling snarkjs.
Input Format: Ensured the correct input format for the proof generation.

⚖️ Trade-offs in ZK Protocols
Summary of Trade-offs
Aspect	Groth16	Plonk	STARKs
Proof Generation Time	Moderate to long (dependent on setup)	Fast (due to polynomial commitment)	Longer due to hash computations
Proof Size	Small (around 100 bytes)	Small to moderate	Larger (depending on depth of circuit)
Verification Time	Very fast (a few milliseconds)	Fast, but dependent on the implementation	Moderate (but scalable)

🎯 Conclusion
The project successfully showcases the capabilities of zero-knowledge proofs, particularly through the Groth16 protocol. The implementation emphasizes the potential of ZK technology for privacy-preserving computations across various applications.

🔮 Future Work
Explore Other ZK Protocols: Investigate Plonk and STARKs for further comparisons.
Optimize Proof Generation: Focus on reducing proof size and generation time.

📚 References
snarkjs Documentation
Circom Documentation
