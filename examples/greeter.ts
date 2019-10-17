class User {
  fullName: string;
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person): string {
  const str = `${person.firstName}`;
  return str;
}

const user = {
  firstName: "Jayden",
  lastName: "Wong"
};

console.log(greeter(user));
console.log();
console.log();

const U = new User("Jayden", "Wong");
console.log(U.fullName);
