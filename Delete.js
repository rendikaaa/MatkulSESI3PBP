const names = ["Andi", "Budi", "Charlie"]
    names.push("Dhani")
    names.push("Echa", "Gia")
    names.pop()
    names.shift();
    names.unshift("apple")
    console.table(names)
    delete names[1];
    console.log(names)
