import * as React from "react";
import ContactForm from "../../components/ContactForm";

// Page for gatsby to render with ContactForm statically open (not in a modal)
// Allows netlify to recognize the form
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<ContactForm />);
  }
}