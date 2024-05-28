interface IProfile {
  name: string;
  age: number;
  isRich?: boolean;
}

let yourProfile: IProfile = {
  name: "h662",
  age: 20,
  isRich: true,
};

console.log(yourProfile);

let otherProfile: IProfile = {
  name: "h663",
  age: 99,
};

console.log(otherProfile);
