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
      <Input type="text" name="name" id="name" placeholder="Name" required />
    </Label>

    <Label htmlFor="phone">
      <Input type="tel" name="phone" id="phone" placeholder="Phone" required />
    </Label>

    <Label htmlFor="email">
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
    </Label>
    <Label htmlFor="location">
      <Input
        type="text"
        name="location"
        id="location"
        placeholder="Location"
        required
      />
    </Label>

    <Label htmlFor="message">
      <Textarea
        name="message"
        id="message"
        placeholder="Message"
        rows="6"
        required
      />
    </Label>

    <Input type="submit" value="Send Message" className="special" />

    <Input type="reset" value="Clear" />
  </FormGroup>
);

export default Form;
