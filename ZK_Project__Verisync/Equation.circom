template Equation() {
    signal input x;
    signal input result;

    signal x_squared <== x * x;
    signal intermediate <== x + x_squared;
    signal final_result <== intermediate + 7;

    result === final_result;
}

component main = Equation();
