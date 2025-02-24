import { useState } from "react";
import EmailList from "./components/EmailList";
import EmailForm from "./components/EmailForm";

function App() {
  const [emails, setEmails] = useState([]);

  const addEmail = (newEmail) => {
    setEmails([...emails, newEmail]);
  };

  return (
    <div>
      <h1>Email Management System</h1>
      <EmailForm onEmailAdded={addEmail} />
      <EmailList emails={emails} />
    </div>
  );
}

export default App;
