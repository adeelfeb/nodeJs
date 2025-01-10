function splitMessage(message, k) {
    const chunks = [];
    let i = 0;

    while (i < message.length) {
        let chunk = message.slice(i, i + k); // Take k characters
        if (chunk.length < k) {
            chunk = chunk.padEnd(k, '_'); // Pad with underscores if less than k
        }
        chunks.push(chunk);
        i += k; // Move to the next chunk
    }

    // Handle case where k > message length
    if (message.length === 0 || k > message.length) {
        return [message.padEnd(k, '_')];
    }

    return chunks;
}




// Test Cases
console.log(splitMessage('hello world', 5)); // ['hello', 'world_']
console.log(splitMessage('programming', 4)); // ['prog', 'ramm', 'ing_']
console.log(splitMessage('short', 10)); // ['short_____']


