/*  Discriminated Unions :
 */

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  flyingSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimation(animal: Animal) {
  let speed;
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
