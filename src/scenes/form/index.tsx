import { Box, Button, Grid, TextField, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../components/Header';
import * as yup from "yup";
import { Formik } from "formik";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  });

  const handleFormSubmit = (values: any) => {
    console.log(values);
  }

  return (
    <Box m="20px">
      <Header title='CREATE USER' subtitle='Create a New User Profile' />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name='firstName'
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name='lastName'
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name='email'
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label="Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name='contact'
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label="Address 1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                  name='address1'
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label="Address 2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address2}
                  name='address2'
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type='submit' color='secondary' variant='contained'>
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

export default Form