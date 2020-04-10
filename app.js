"use strict";
/*  Discriminated Unions :
 */
function moveAnimation(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.flyingSpeed;
    }
    console.log("Moving at Speed: " + speed);
}
moveAnimation({ type: "bird", flyingSpeed: 10 });
