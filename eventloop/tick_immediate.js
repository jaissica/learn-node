let count = 0;
setImmediate(() => {
    console.log(`Run Immediately = ${count}`);
});

process.nextTick(() => {
    count++;
    console.log(`nextTick = ${count}`);
});
console.log(`main = ${count}`);
