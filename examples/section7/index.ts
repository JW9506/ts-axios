function padLeft(value: string, padding: string | number) {
  switch (typeof padding) {
    case "number":
      return Array(padding + 1).join(" ") + value;
    case "string":
      return padding + value;
    default:
      throw new Error(`Expected string or number, got ${padding}`);
  }
}

console.log(padLeft("abc", "111"));
console.log(padLeft("abc", 3));

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  return {
    fly() {},
    layEggs() {},
    swim() {}
  };
}

const pet = getSmallPet();
pet.layEggs;
(pet as Bird).fly();
(pet as Fish).swim();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function padLeftV2(value: string, padding: string | number) {
  function isNumber(x: any): x is number {
    return typeof x === "number";
  }
  function isString(x: any): x is string {
    return typeof x === "string";
  }
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`got ${padding}`);
}

console.log(padLeftV2("abc", "111"));
console.log(padLeftV2("abc", 3));
