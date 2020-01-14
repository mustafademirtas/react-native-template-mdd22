import React from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {withNavigation, NavigationInjectedProps} from 'react-navigation';
import {Icon} from 'react-native-elements';
import {
  SampleButton,
  SampleTextInput,
  SampleActivityIndicator,
} from '../../../../components';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password.'),
});

interface Props extends NavigationInjectedProps {}

const SignInForm: React.FC<Props> = props => {
  const {navigation} = props;
  return (
    <Formik
      initialValues={{email: 'qwe@qwe.com', password: '123456'}}
      onSubmit={(values, actions) => {
        console.log(JSON.stringify(values));
        setTimeout(() => {
          actions.setSubmitting(false);
          navigation.navigate('App');
        }, 3000);
      }}
      validationSchema={validationSchema}>
      {({
        handleChange,
        handleBlur,
        touched,
        errors,
        isSubmitting,
        handleSubmit,
        values,
      }) => (
        <React.Fragment>
          <View style={styles.inputHolderStyle}>
            <SampleTextInput
              placeholder="xyz@qwe.com"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              label={'Email'}
              testID={'Test_SignInEmailInput'}
              errorMessage={
                touched.email && errors.email ? errors.email : undefined
              }
              leftIcon={<Icon name="face" size={24} color="black" />}
            />
          </View>

          <View style={styles.inputHolderStyle}>
            <SampleTextInput
              placeholder="password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              label={'Password'}
              testID={'Test_SignInPasswordInput'}
              errorMessage={
                touched.password && errors.password
                  ? errors.password
                  : undefined
              }
              leftIcon={<Icon name="security" size={24} color="black" />}
              secureTextEntry
            />
          </View>

          {isSubmitting ? (
            <SampleActivityIndicator />
          ) : (
            <SampleButton
              title="Submit"
              onPress={handleSubmit}
              testID={'Test_SignInButton'}
            />
          )}
        </React.Fragment>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputHolderStyle: {
    marginVertical: 5,
  },
});

export default withNavigation(SignInForm);
