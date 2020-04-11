"use strict";
/*  Another Generic Function :
 */
function countAndDescribe(elements) {
    var descriptionText = "Got no value.";
    if (elements.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (elements.length > 1) {
        descriptionText = 'Got ' + elements.length + ' elements.';
    }
    return [elements, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
// Array(2)
// 0: "Hi there!"
// 1: "Got 9 elements."
// length: 2
