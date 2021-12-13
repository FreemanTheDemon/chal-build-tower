const buildTower = (height) => {
    let result = [];
    let blocks = 1;
    let base = height * 2 - 1;
    for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < blocks; j++) {
            row += '*'
        }
        for (let k = 0; k < (base - blocks) / 2; k++) {
            row = ' ' + row + ' ';
        }
        blocks += 2;
        result.push(row);
    }
    return result;
}

console.log(buildTower(30));