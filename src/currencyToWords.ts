import React from "react";

const CurrencyToWords = (value: string) => {
  const currency = value.replace(" ", "").split(",");

  const convertToWords = (currency: number) => {
    let numericGroup = 1; // thousands , millions
    let result = "";
    try {
      while (currency != 0) {
        let tempResult = "";
        let remain = currency % 1000;

        if (remain < 10) tempResult = oneDigit(remain);
        else if (remain < 100) tempResult = twoDigits(remain);
        else tempResult = threeDigits(remain);

        if (!tempResult)
          //for numbers like 1,000,001 that thousands part is empty
          result = `${tempResult} ${GetNumericGroupTitle(
            numericGroup
          )} ${result}`.trim();

        currency /= 1000;
        numericGroup++;
      }
      return result;
    } catch (e) {
      throw new Error("Exception in parsing");
    }
  };

  const oneDigit = (digit: number) => {
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

  const twoDigits = (twoDigitNumber: number) => {
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

  const threeDigits = (threeDigits: number) => {
    const firstPart = oneDigit(threeDigits / 100) + " hundred ";
    const secondPart = threeDigits % 100;
    return (
      firstPart +
      (secondPart > 9 ? twoDigits(secondPart) : oneDigit(secondPart))
    ); //for numbers like 101
  };

  const GetNumericGroupTitle = (numericGroup: number) => {
    switch (numericGroup) {
      default:
      case 1: //hundreds doesn't need
        return "";
      case 2:
        return "thousand";
      case 3:
        return "million";
    }
  };

  const completeDollarWords = (dollars: string) => {
    if (!dollars) dollars = "zero";
    return dollars + (dollars === "one" ? " dollar" : " dollars");
  };

  const completeCentsWords = (cents: string) => {
    if (!cents) return "";
    return ` and ${cents} ` + (cents === "one" ? "cent" : "cents");
  };

  const dollarInWords = convertToWords(Number.parseInt(currency[0]));
  const centsInWords =
    currency.length == 2
      ? convertToWords(
          Number.parseInt(
            currency[1].length == 1 ? `${currency[1]}0` : currency[1]
          )
        )
      : "";

  return completeDollarWords(dollarInWords) + completeCentsWords(centsInWords);
};

export default currencyToWords;
