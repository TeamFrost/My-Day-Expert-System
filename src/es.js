const backChain = function (goal, assertions) {
    // Select the first rule.
    let ruleIndex = 0;
    // Start with a single assertion of the goal.
    assertions = assertions || [goal];

    // If there is an assertion with the current goal as its attribute, select it.
    let assertion = assertions.filter(assertion => assertion.attribute === goal.attribute && assertion.value);
    assertion = assertion.length ? assertion[0] : null;

    if (!assertion) {
        while (!assertion && ruleIndex < kb.length) {
            const rule = kb[ruleIndex];

            if (rule.conclusion.attribute === goal.attribute) {
                let premiseIndex = 0;
                let allPremisesTrue = false;
                let premise = rule.premises[premiseIndex];
                let isPremiseAssertionTrue = true;

                while (!allPremisesTrue && isPremiseAssertionTrue) {
                    // Satisfy the current premise as the next goal.
                    trueAssertion = backChain(premise, assertions);

                    // Add the assertion to the assertion list.
                    trueAssertion && !assertions.some(assertion => assertion.attribute === trueAssertion.attribute && assertion.value === trueAssertion.value) && assertions.push(trueAssertion);

                    // Is the trueAssertion equal to the premise?
                    isPremiseAssertionTrue = JSON.stringify(premise) === JSON.stringify(trueAssertion);
                    if (isPremiseAssertionTrue) {
                        // If there are more premises to satisfy, continue to the next one.
                        if (++premiseIndex < rule.premises.length) {
                            premise = rule.premises[premiseIndex];
                        }
                        else {
                            // All premises are satisfied, the current rule triggers.
                            allPremisesTrue = true;
                        }
                    }
                }

                if (allPremisesTrue) {
                    // Trigger the current rule and include its conclusion as a true assertion.
                    assertion = rule.conclusion;
                }
            }

            // Select the next rule.
            ruleIndex++;
        }

        if (!assertion) {
            // We can't deduce a value for this goal. If the goal is not the original query, prompt the user for a value.
            if (!assertions.filter(a => a.attribute === goal.attribute && !a.value).length) {
                // Prompt user for goal.
                const value = readline.question(`What is the value for ${goal.attribute}? `);
                assertion = { attribute: goal.attribute, value }; // Enter new assertion for the type and value specified by the user.
            }
        }
    }

    return assertion;
};

let goal = { attribute: "result" };
assertion = backChain(goal);

if (assertion) {
    console.log(assertion.value);
    console.log("We hope that our answer was accurate as possible, but feel free to change things a bit to fit you schedule if needed :D")
}
else {
    console.log(`You cannot answer enough questions to determine ${goal.attribute}.`);
}