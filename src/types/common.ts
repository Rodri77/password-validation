export type ValidationError = string | undefined;

export type Validator = (value: string) => ValidationError;
