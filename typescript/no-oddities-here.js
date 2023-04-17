"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noOdds = void 0;
function noOdds(values) {
    var valoresPares = [];
    for (var i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
            valoresPares.push(values[i]);
        }
    }
    return valoresPares;
}
exports.noOdds = noOdds;
console.log(noOdds([1, 2, 3, 4]));
