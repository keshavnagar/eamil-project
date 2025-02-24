import { useState, useEffect } from "react";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/emails")
      .then((res) => res.json())
      .then((data) => setEmails(data))
      .catch((err) => console.error("Error fetching emails:", err));
  }, []);

  // Delete function
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/emails/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove deleted email from state
        setEmails(emails.filter((email) => email.id !== id));
        console.log("Email deleted successfully");
      } else {
        console.error("Failed to delete email");
      }
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  };

  return (
    <div>
      <h2>Email List</h2>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>
            <strong>From:</strong> {email.fromAddress} <br />
            <strong>Subject:</strong> {email.subject} <br />
            <strong>Date:</strong> {new Date(email.dateReceived).toLocaleString()} <br />
            <button onClick={() => handleDelete(email.id)}>❌ Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
