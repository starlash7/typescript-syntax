interface IProfile2 {
  name: string;
  age: number;
  isRich?: boolean;
}

interface IJobProfile extends IProfile2 {
  job: string;
}

const fourProfile: IJobProfile = {
  name: "h662",
  age: 29,
  isRich: true,
  job: "Programmer",
};

console.log(fourProfile);
