interface Person {
  firstName: string;
  lastName: string;
}

function test(p: Person): void {
  console.log(`${p.firstName}   ${p.lastName}`);
}

test({
  firstName: "test",
  lastName: "test1"
});