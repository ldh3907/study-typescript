export const makePerson = (name: string, age: number) => {
  return { name, age };
};

export const testMakePerson = () => {
  console.log(makePerson("lty", 17), makePerson("ldh", 18));
};
