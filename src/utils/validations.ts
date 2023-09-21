import { Validator } from "../types/common";
import {
  HAS_NO_CONSECUTIVE_LETTERS,
  LOWER_A_ASCII,
  LOWER_Z_ASCII,
  NUMBER_REGEX,
  REQUIRED_NUMBER,
  REQUIRED_SPECIAL_CHAR,
  REQUIRED_UPPERCASE_LETTER,
  SPECIAL_CHAR_REGEX,
  UPPERCASE_REGEX,
  UPPER_A_ASCII,
  UPPER_Z_ASCII,
} from "./constants";

export const applyRules =
  (rules: Array<Validator>) =>
  (value: string): Array<string> =>
    rules.reduce((errors: Array<string>, currentRule: Validator) => {
      const error = currentRule(value);
      return error ? [...errors, error] : errors;
    }, []);

const regexRule = (regex: RegExp, error: string) => (value: string) =>
  regex.test(value) ? undefined : error;

export const containsSpecialChar = regexRule(
  SPECIAL_CHAR_REGEX,
  REQUIRED_SPECIAL_CHAR
);

export const containsNumber = regexRule(NUMBER_REGEX, REQUIRED_NUMBER);

export const containsUppercase = regexRule(
  UPPERCASE_REGEX,
  REQUIRED_UPPERCASE_LETTER
);

const isAsciiLetter = (asciiCode: number): boolean =>
  (asciiCode >= UPPER_A_ASCII && asciiCode <= UPPER_Z_ASCII) ||
  (asciiCode >= LOWER_A_ASCII && asciiCode <= LOWER_Z_ASCII);

export const containsNoConsecutiveLetters: Validator = (value = "") => {
  let isConsecutive = false;
  for (let i = 0; i < value.length; i++) {
    const ascii = value.charCodeAt(i);
    const nextAscii = value.charCodeAt(i + 1);

    if (
      isAsciiLetter(ascii) &&
      isAsciiLetter(nextAscii) &&
      nextAscii === ascii + 1
    ) {
      isConsecutive = true;
      break;
    }
  }

  return isConsecutive ? HAS_NO_CONSECUTIVE_LETTERS : undefined;
};

export const passwordRules = [
  containsSpecialChar,
  containsNumber,
  containsUppercase,
  containsNoConsecutiveLetters,
];
