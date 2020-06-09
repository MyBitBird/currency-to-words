export const oneDigit = (digit) => {
    switch (digit) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      case 7:
        return "seven";
      case 8:
        return "eight";
      case 9:
        return "nine";
      default:
        return "";
    }
  };

  export const twoDigits = (twoDigitNumber) => {
    switch (twoDigitNumber) {
      case 10:
        return "ten";
      case 11:
        return "eleven";
      case 12:
        return "twelve";
      case 13:
        return "thirteen";
      case 14:
        return "fourteen";
      case 15:
        return "fifteen";
      case 16:
        return "sixteen";
      case 17:
        return "seventeen";
      case 18:
        return "eighteen";
      case 19:
        return "nineteen";
      case 20:
        return "twenty";
      case 30:
        return "thirty";
      case 40:
        return "forty";
      case 50:
        return "fifty";
      case 60:
        return "sixty";
      case 70:
        return "seventy";
      case 80:
        return "eighty";
      case 90:
        return "ninety";
      default:
        //for numbers like 21
        const firstPart = twoDigitNumber % 10;
        const secondPart = twoDigitNumber - firstPart;

        return `${twoDigits(secondPart)}-${oneDigit(firstPart)}`;
    }
  };


  export const threeDigits = (threeDigits) => {
    const firstPart = oneDigit(Math.floor(threeDigits / 100)) + " hundred ";
    const secondPart = threeDigits % 100;
    return (
      firstPart +
      (secondPart > 9 ? twoDigits(secondPart) : oneDigit(secondPart))
    ); //for numbers like 101
  };

  export default
  {
      oneDigit , twoDigits , threeDigits
  }