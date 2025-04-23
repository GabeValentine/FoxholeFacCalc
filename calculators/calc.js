
export function calculateMulti(recipe, values, numQueues) {
    const cyclesPerMin = 60 / (recipe.cycle || 60);
    numQueues = Math.max(numQueues, 1);

    // No inputs, no outputs
    if (!values.length) {
        return { results: [], duration: 0 };
    }

    // Compute how many cycles the given amount of input will run for
    // A missing or zero value for an input will be treated as if it is piped.
    var results = recipe.inputs.map(( input, index ) => {
        const value = values[index];
        if (!value)
            return null;

        const amtPerMin = input.amount * cyclesPerMin;
        const duration = value / amtPerMin;

        const cycles = Math.floor(duration * 60 / recipe.cycle);
        return {
            name: input.name,
            duration: cycles * recipe.cycle / (3600 * numQueues), // seconds -> hours / queues
            amount: input.amount * cycles,
            cycles: cycles
        };
    });

    // Filter out null results (i.e. piped inputs)
    results = results.filter(v => v);

    // Find the input with the lowest runtime
    var minResult = results.reduce((a, b) => a.duration <= b.duration ? a : b, { duration: Infinity });
    // If all inputs have the same amount of runtime, the recipe is balanced
    var allEqual = results.reduce((state, result) => state && (minResult.duration === result.duration), true);

    return {
        results,
        duration: minResult.duration !== Infinity ? minResult.duration : 0.0,
        amount: (minResult.cycles || 0) * (recipe.amount || 1),
        // The bottleneck input is the one with the lowest runtime, unless the recipe is perfectly balanced
        bottleneck: !allEqual && minResult || undefined
    };
}
