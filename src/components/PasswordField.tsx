import { FC } from "react";
import { Field } from "react-final-form";

import { Input } from "antd";

import type { Validator } from "../types/common";
import { applyRules } from "../utils/validations";
import ErrorFields from "./ErrorFields";

interface Props {
  options: Array<Validator>;
}

const PasswordField: FC<Props> = ({ options }) => (
  <Field name="password" validate={applyRules(options)}>
    {({ input, meta }) => (
      <div className="field">
        <div className="field-input">
          <Input placeholder="Password" {...input} />
        </div>
        {(!meta.pristine || meta.touched) && (
          <ErrorFields errors={meta.error} />
        )}
      </div>
    )}
  </Field>
);

export default PasswordField;
