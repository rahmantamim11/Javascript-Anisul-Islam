// Break

for (var i = 1; i <= 100 ; i++) {
    if (i === 10) {
        break;
    }
    console.log(" " + i);
}

// Continue

for (var i = 1; i <= 100 ; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(" " + i);
}
