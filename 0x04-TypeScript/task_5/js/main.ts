interface MajorCredits {
  credits: number;
  _brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  _brand: "MinorCredits";
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "MajorCredits",
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "MinorCredits",
  };
}

const subject1: MajorCredits = { credits: 3, _brand: "MajorCredits" };
const subject2: MajorCredits = { credits: 4, _brand: "MajorCredits" };
const resultMajor = sumMajorCredits(subject1, subject2);
console.log(resultMajor);

const subject3: MinorCredits = { credits: 2, _brand: "MinorCredits" };
const subject4: MinorCredits = { credits: 1, _brand: "MinorCredits" };
const resultMinor = sumMinorCredits(subject3, subject4);
console.log(resultMinor);
