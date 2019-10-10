import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';
import Modal from '../../../components/UI/Modal/Modal';
import Input from '../../../components/UI/Forms/Input/Input';
import Message from '../../../components/UI/Message/Message';
import { StyledForm } from '../../../hoc/layout/elements';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  padding: 0 3rem;
`;

const IssueSchema = Yup.object().shape({
    issue: Yup.string()
      .required('This field is required.')
      .min(4, 'More info please...')
  });
  


const NewIssue = ({newIssue, loading, }) => {
    const [isOpened, setisOpened] = useState(false)
    return (
        <>
          <Button color="main" contain onClick={() => setisOpened(true)}>
            ADD ISSUE
          </Button>
          <Modal opened={isOpened} close={() => setisOpened(false)}>
            <Heading noMargin size="h1" color="white">
              ADD NEW ISSUE
            </Heading>
            <Heading bold size="h4" color="white">
              DESCRIPTION:
            </Heading>
            <Formik
              initialValues={{
                bugs: '',
              }}
              validationSchema={IssueSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // send our todo
                const res = await newIssue(values);
                setSubmitting(false);
                if (res) {
                  setisOpened(false);
                }
                resetForm();
              }}
            >
              {({ isSubmitting, isValid }) => (
                <StyledForm>
                  <Field
                    type="textarea"
                    name="bugs"
                    placeholder="New issue..."
                    component={Input}
                  />
                  <ButtonsWrapper>
                    <Button
                      contain
                      color="main"
                      type="submit"
                      disabled={!isValid || isSubmitting}
                      loading={loading ? 'Adding...' : null}
                    >
                      Add issue
                    </Button>
                    <Button color="main" contain onClick={() => setisOpened(false)}>
                      Cancel
                    </Button>
                  </ButtonsWrapper>
                  <MessageWrapper>
                    {/* <Message error show={error}>
                      {error}
                    </Message> */}
                  </MessageWrapper>
                </StyledForm>
              )}
            </Formik>
          </Modal>
        </>
      );
    };
  
  export default NewIssue;