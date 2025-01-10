function processCommands(commands) {
    let result = ''; // Result string
    const history = []; // Track the last 3 commands

    commands.forEach((command) => {
        const [action, char] = command.split(' ');

        if (action === 'Append') {
            result += char; // Add character to result
        } else if (action === 'Delete') {
            result = result.slice(0, -1); // Remove last character
        }

        // Add command to history and ensure it only keeps the last 3 commands
        history.push(command);
        if (history.length > 3) {
            history.shift(); // Remove oldest command if history exceeds 3
        }
    });

    console.log('Result:', result); // Print the final result
    console.log('Last 3 Commands:', history); // Print last 3 commands
}

// Test Case
const commands = [
    'Append A',
    'Append B',
    'Delete',
    'Append C',
    'Delete',
    'Append D',
];
processCommands(commands);
// Output:
// Result: AD
// Last 3 Commands: ['Delete', 'Append C', 'Append D']
