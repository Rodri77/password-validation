import { Validator } from "../types/common";
import {
  NUMBER_REGEX,
  REQUIRED_NUMBER,
  REQUIRED_SPECIAL_CHAR,
  REQUIRED_UPPERCASE_LETTER,
  SPECIAL_CHAR_REGEX,
  UPPERCASE_REGEX,
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

export const passwordRules = [
  regexRule(SPECIAL_CHAR_REGEX, REQUIRED_SPECIAL_CHAR),
  regexRule(NUMBER_REGEX, REQUIRED_NUMBER),
  regexRule(UPPERCASE_REGEX, REQUIRED_UPPERCASE_LETTER),
];
