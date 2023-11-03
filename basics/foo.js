const args = process.argv;
logs = []
var i = 0
if (args.length > 0) {
    args.forEach((v, i) => console.log(`${v}`));
    args.forEach((v, i) => logs[i]=(`${v}`));
}
else {
    console.log('Args not found');
}
console.log(logs);
