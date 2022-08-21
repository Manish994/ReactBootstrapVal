import react from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CountrySelect from "react-bootstrap-country-select";

import React from "react";

function Registratin() {
  const [formValue, setFormValue] = react.useState({});
  const [errors, setErrors] = react.useState({});

  const setField = (fieldName, value) => {
    setFormValue((formValue) => ({
      ...formValue,
      [fieldName]: value,
    }));

    if (!!errors[fieldName]) {
      setErrors((errors) => ({
        ...errors,
        [fieldName]: null,
      }));
    }
  };

  const validateForm = () => {
    const { dob, gender, location, seek, bio } = formValue;
    const errors = {};
    if (!dob) errors.dob = "Please sleect date of birth";
    if (!gender) errors.gender = "Please Select Gender";
    if (!location) errors.location = "Please Select Country";
    if (!seek) errors.seek = "Please Select what are your looking for";
    if (!bio) errors.bio = "Please select Bio";
    else if (bio.length < 10) errors.bio = "Bio is too short";
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formErrrors = validateForm();
    if (Object.keys(formErrrors).length > 0) setErrors(formErrrors);
    //  else console.log("Form is submitted");
    else alert("Form Submittted");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={4}>
          <h2>Complete Your Profile</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-4">
              <Form.Control
                type="date"
                placeholder="Enter date of birth"
                isInvalid={!!errors.dob}
                value={formValue.dob}
                onChange={(e) => {
                  setField("dob", e.target.value);
                }}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.dob}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Select
                placeholder="Select Gender"
                value={formValue.gender}
                isInvalid={!!errors.gender}
                onChange={(e) => {
                  setField("gender", e.target.value);
                }}
              >
                <option>Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.gender}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <CountrySelect
                className={!!errors.location && "red-border"}
                id="country"
                autoComplete="off"
                throwInvalidValueError={true}
                required
                valueAs="object"
                value={formValue.location}
                onChange={(e) => {
                  setField("location", e.id);
                }}
              ></CountrySelect>
              <div className="red">{errors.location}</div>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Select
                type="text"
                placeholder="Enter Seeking"
                isInvalid={!!errors.seek}
                value={formValue.seek}
                onChange={(e) => {
                  setField("seek", e.target.value);
                }}
              >
                <option>What are you looing for?</option>
                <option value="1">Dating</option>
                <option value="3">Friendship</option>
                <option value="2">Business Networking</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.seek}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="textarea"
                rows={2}
                type="textarea"
                placeholder="Enter Short Bio"
                isInvalid={!!errors.bio}
                value={formValue.bio}
                onChange={(e) => {
                  setField("bio", e.target.value);
                }}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.bio}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registratin;
