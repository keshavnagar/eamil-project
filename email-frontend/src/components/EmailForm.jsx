import { useState } from "react";

const EmailForm = ({ onEmailAdded }) => {
  const [formData, setFormData] = useState({
    fromAddress: "",
    dateReceived: "",
    subject: "",
    attachmentFileName: "",
    emailConfigId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newEmail = await response.json();
        onEmailAdded(newEmail);
        setFormData({
          fromAddress: "",
          dateReceived: "",
          subject: "",
          attachmentFileName: "",
          emailConfigId: "",
        });
        console.log("Email added successfully");
      } else {
        console.error("Failed to add email");
      }
    } catch (error) {
      console.error("Error adding email:", error);
    }
  };

  return (
    <div>
      <h2>Add New Email</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fromAddress" placeholder="From Address" value={formData.fromAddress} onChange={handleChange} required />
        <input type="datetime-local" name="dateReceived" value={formData.dateReceived} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <input type="text" name="attachmentFileName" placeholder="Attachment File Name" value={formData.attachmentFileName} onChange={handleChange} />
        <input type="text" name="emailConfigId" placeholder="Email Config ID" value={formData.emailConfigId} onChange={handleChange} required />
        <button type="submit">📩 Add Email</button>
      </form>
    </div>
  );
};

export default EmailForm;
