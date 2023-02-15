import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "reactjs-popup/dist/index.css";
const ContactF = () => {
  const form = useRef();
  const sendEmail = (e) => {
    // console.log(form.current);
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
          toast("Send success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
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

      <Form
        ref={form}
        onSubmit={sendEmail}
        className="mt-4 mb-4 slide-in-fwd-center"
      >
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
