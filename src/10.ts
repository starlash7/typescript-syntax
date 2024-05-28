type TProfile2 = {
  name: string;
  age: number;
  isRich?: boolean;
};

type TJob = {
  job: string;
};

type TJobProfile = TProfile2 & TJob;

// type TJobProfile = TProfile2 & {
//   job: string;
// };

const threeProfile: TJobProfile = {
  name: "h662",
  age: 29,
  isRich: true,
  job: "Programmer",
};

console.log(threeProfile);
