import React, { Fragment, useRef, useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Formik, FormikValues, FormikHelpers } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { CustomButton } from "./button";

const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const emailUserId = import.meta.env.VITE_EMAIL_USER_ID;
const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

interface FormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  address: string;
  comments: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .max(60, "Maximum 60 characters allowed"),
  company: Yup.string()
    .required("Company name is required")
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name cannot exceed 100 characters")
    .matches(
      /^[a-zA-Z0-9\s.,&()-]+$/,
      "Company name contains invalid characters"
    ),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9\s()+-]+$/, "Phone number contains invalid characters")
    .min(7, "Phone number must be at least 7 digits")
    .max(15, "Phone number cannot exceed 15 digits"),
  address: Yup.string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters")
    .max(100, "Address cannot exceed 100 characters")
    .matches(/^[a-zA-Z0-9\s.,#'-]+$/, "Address contains invalid characters"),
  comments: Yup.string()
    .required("Comment is required")
    .min(10, "Comment must be at least 10 characters")
    .max(500, "Comment cannot exceed 500 characters")
    .matches(
      /^[a-zA-Z0-9\s.,!?'"()-]+$/,
      "Comment contains invalid characters"
    ),
});

export const QuoteForm: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    company: "",
    phone: "",
    address: "",
    comments: "",
  };

  const handleSubmit = (
    values: FormikValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    const formData = { ...values, "g-recaptcha-response": captchaValue };

    emailjs
      .send(emailServiceId, emailTemplateId, formData, emailUserId)
      .then(() => {
        toast(
          "Send your email correctly, we will contact you as soon as possible.",
          {
            type: "success",
          }
        );

        resetForm();
        setSubmitting(false);
        recaptchaRef.current?.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast(
          "An error occurred while sending the email, please try again later.",
          {
            type: "error",
          }
        );
        resetForm();
        setSubmitting(false);
        recaptchaRef.current?.reset();
      });
  };

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const hanldeCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  return (
    <Fragment>
      <Container>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            isSubmitting,
            errors,
            touched,
            handleSubmit,
            values,
            handleChange,
            handleBlur,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3 bluewave-text">
                <Form.Group as={Col} md="6">
                  <Form.Label>NAME</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your name"
                    isInvalid={touched.name && !!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>EMAIL</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3 bluewave-text">
                <Form.Group as={Col} md="6">
                  <Form.Label>COMPANY</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your company name"
                    isInvalid={touched.company && !!errors.company}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.company}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>PHONE NUMBER</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                    isInvalid={touched.phone && !!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3 bluewave-text">
                <Form.Group as={Col} md="12">
                  <Form.Label>ADDRESS</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your address"
                    isInvalid={touched.address && !!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3 bluewave-text">
                <Form.Group as={Col} md="12">
                  <Form.Label>ADDITIONAL COMMENTS</Form.Label>
                  <Form.Control
                    rows={3}
                    as="textarea"
                    type="text"
                    name="comments"
                    onBlur={handleBlur}
                    value={values.comments}
                    onChange={handleChange}
                    placeholder="Enter your additional comments"
                    isInvalid={touched.comments && !!errors.comments}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.comments}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="text-center">
                <Col
                  xs={12}
                  className="d-flex justify-content-center align-items-center mb-3"
                >
                  {/* <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={recaptchaSiteKey}
                    onChange={hanldeCaptchaChange}
                  /> */}
                </Col>

                <Col
                  xs={12}
                  className="d-flex justify-content-center align-items-center mt-2"
                >
                  <CustomButton
                    type="submit"
                    buttonSize="lg"
                    disabled={isSubmitting}
                    label={isSubmitting ? "Sending..." : "Send"}
                  />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>

      <ToastContainer position="bottom-left" theme="colored" autoClose={5000} />
    </Fragment>
  );
};
