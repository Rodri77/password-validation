import { FC } from "react";

import { CloseCircleFilled } from "@ant-design/icons";

interface Props {
  errors: Array<string>;
}

const ErrorFields: FC<Props> = ({ errors }) => (
  <div className="error-fields">
    {errors?.map(error => (
      <div className="error-field" key={error}>
        <CloseCircleFilled style={{ color: "red", fontSize: "40px" }} />
        <span className="error-message">{error}</span>
      </div>
    ))}
  </div>
);

export default ErrorFields;
