"use strict";
/*  06 The -keyof- Constraint :
 */
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
// "Value: Max"
