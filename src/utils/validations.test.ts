import { expect, test } from "vitest";

import {
  containsUppercase,
  containsSpecialChar,
  containsNumber,
  containsNoConsecutiveLetters,
} from "./validations";

test("Contains a special char", () => {
  expect(containsSpecialChar("test@")).toEqual(undefined);
});

test("Does not contain a special char", () => {
  expect(containsSpecialChar("test")).toEqual("Has a special char !@#$%^&*");
});

test("Contains a number", () => {
  expect(containsNumber("test123")).toEqual(undefined);
});

test("Does not contain a number", () => {
  expect(containsNumber("test")).toEqual("Has a number 0-9");
});

test("Contains an uppercase letter", () => {
  expect(containsUppercase("Test")).toEqual(undefined);
});

test("Does not contain an uppercase letter", () => {
  expect(containsUppercase("test")).toEqual("Has an uppercase Letter");
});

test("Contains consecutive letters", () => {
  expect(containsNoConsecutiveLetters("abd123456")).toEqual(
    "Has NO consecutive letters"
  );
});

test("Does not contain consecutive letters", () => {
  expect(containsNoConsecutiveLetters("acebd123456")).toEqual(undefined);
});
