import { Form } from "react-final-form";

import PasswordField from "./components/PasswordField";
import { passwordRules } from "./utils/validations";

import "./App.css";

function App() {
  return (
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="field-header">
            <label>Password Component</label>
          </div>
          <PasswordField options={passwordRules} />
        </form>
      )}
    />
  );
}

export default App;
