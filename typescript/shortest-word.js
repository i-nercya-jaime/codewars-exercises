function findShort(s) {
    var str = s.split(" ");
    var shortest = str[0];
    for (var i = 1; i < str.length; i++) {
        if (str[i].length < shortest.length) {
            shortest = str[i];
        }
    }
    return shortest.length;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
