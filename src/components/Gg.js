import { Form, Button, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";

const Gg = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
      }}
    >
      <InputGroup>
        <FormControl
          type="text"
          placeholder="message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Button variant="primary" type="submit" disabled={!message}>
          Send
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Gg;
