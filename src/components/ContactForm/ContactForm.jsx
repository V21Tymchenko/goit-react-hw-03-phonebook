import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  LabelForm,
  InputForm,
  FormButton,
  Container,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameId = nanoid();
  telId = nanoid();

  handleInputChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  onSubmitAdd = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit({ name, number });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitAdd}>
        <Container>
          <LabelForm htmlFor={this.nameId}>
            Name
            <InputForm
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.nameId}
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </LabelForm>
          <LabelForm htmlFor={this.telId}>
            Number
            <InputForm
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.telId}
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </LabelForm>
        </Container>
        <Container>
          <FormButton type="submit">Add contact</FormButton>
        </Container>
      </form>
    );
  }
}
export default ContactForm;
