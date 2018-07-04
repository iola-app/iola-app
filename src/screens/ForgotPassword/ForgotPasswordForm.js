import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { Button, Form, Text } from 'native-base';

import TextInputItem from '../../components/Form/TextInputItem';

class ForgotPasswordForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    defaultEmail: PropTypes.string,
  };

  state = { emailDoesNotExist: false };

  render() {
    const { isValid, handleSubmit, defaultEmail } = this.props;
    const { emailDoesNotExist } = this.state;
    const disabled = !(isValid && !emailDoesNotExist || defaultEmail);

    return (
      <Form>
        <TextInputItem
          name="email"
          placeholder="Email"
          secondaryErrorText={emailDoesNotExist && 'Email does not exist'}
          {...this.props}
        />

        <Button onPress={handleSubmit} disabled={disabled} block>
          <Text>Get new password</Text>
        </Button>
      </Form>
    );
  }
}

const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
});

export default withFormik({
  mapPropsToValues: ({ defaultEmail }) => ({ email: defaultEmail }),
  handleSubmit: (values, { props, ...formikBag }) => props.onSubmit(values, formikBag),
  validationSchema,
})(ForgotPasswordForm);
