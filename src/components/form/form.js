import React from "react";
import { FormGroup, Label, Input, Textarea } from "./form.css";

const Form = () => (
  <FormGroup
    name="contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />

    <h3>Contact us for a free consultation!</h3>
    <Label htmlFor="name">
      * Name
      <Input type="text" name="name" id="name" required />
    </Label>

    <Label htmlFor="phone">
      * Phone
      <Input type="tel" name="phone" id="phone" required />
    </Label>

    <Label htmlFor="email">
      * Email
      <Input type="email" name="email" id="email" required />
    </Label>
    <Label htmlFor="location">
      * Location
      <Input type="text" name="location" id="location" required />
    </Label>

    <Label htmlFor="message">
      * Message
      <Textarea name="message" id="message" rows="6" required />
    </Label>

    <Input type="submit" value="Send Message" className="special" />

    <Input type="reset" value="Clear" />
  </FormGroup>
);

export default Form;
