import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "reactjs-popup/dist/index.css";
const ContactF = () => {
  const form = useRef();
  const [check, setCheck] = useState(true);
  const sendEmail = (e) => {
    console.log(form.current);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sbsny0f",
        "template_l1lgnpl",
        form.current,
        "Ypz0xC47yE-_dGeCV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setCheck(true);
          toast("Send success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  console.log(check);
  return (
    <>
      {check ? (
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      ) : null}

      <Form ref={form} onSubmit={sendEmail} className="mt-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your name"
            name="user_name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            
            required
            type="email"
            placeholder="name@example.com"
            name="user_email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" required />
        </Form.Group>
        <Button className="buttonCss wBtn" type="submit" value="Send">
          {" "}
          Send
        </Button>
      </Form>
    </>
  );
};
export default ContactF;
