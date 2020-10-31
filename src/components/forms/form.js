import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "styled-bootstrap-grid";
import Select, { components } from "react-select";
import { useForm, Controller } from "react-hook-form";

// Components
import { FlexContainer } from "../containers/flex-container";
import { DropdownIcon } from "../icons/dropdown-icon";

// Utils
import { convertToKebabCase } from "../utils/convert-to-kebab";
import { encodeForm } from "../utils/encode-form";

const EnquiryFormContainer = styled.div`
  width: 100%;
  padding: 60px 0;

  & h2 {
    margin: 0 0 25px 0;
  }

  & form {
    & .field {
      & input {
        width: 100%;
        margin: 0 0 20px 0;
        padding: 7px 0;

        border: 0;
        border-bottom: 1px solid #323232;
      }

      & textarea {
        width: calc(100% - 16px);
        max-width: calc(100% - 16px);
        min-width: calc(100% - 16px);

        margin: 5px 0 25px 0;
        padding: 7px;

        border: 1px solid #323232;
      }
    }

    & label.message-title {
      margin: 6px 0;
      position: relative;
      display: block;
    }

    & .disclaimer {
      margin: 0 0 25px 0;
    }

    & button {
      border: 1px solid #323232;
      padding: 7px;

      transition: 150ms all ease;

      &:hover {
        color: #fff;
        background-color: #323232;
      }
    }

    & input.custom-file-input {
      color: transparent;
      border-bottom: 1px solid transparent;
    }
    & input.custom-file-input::-webkit-file-upload-button {
      visibility: hidden;
    }
    & input.custom-file-input::before {
      content: "Choose File";
      color: #323232;
      display: inline-block;
      background: transparent;
      border: 1px solid #323232;
      border-radius: 0;
      padding: 5px 10px;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      text-shadow: none;
    }
    & input.custom-file-input:hover::before {
      border-color: #323232;
    }
    & input.custom-file-input:active::before {
      background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
    }

    & .gdpr-container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;

      & .gdpr-checkbox {
        width: 16px;
        height: 16px;

        position: relative;

        margin: 0 10px 0 0;
      }
      & .gdpr-checkbox label {
        width: 14px;
        height: 14px;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #323232;
      }
      & .gdpr-checkbox label:after {
        content: "";
        width: 9px;
        height: 5px;
        position: absolute;
        top: 2px;
        left: 2px;
        border: 1px solid #323232;
        border-top: none;
        border-right: none;
        background: transparent;
        opacity: 0;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      & .gdpr-checkbox label:hover::after {
        opacity: 1;
      }
      & .gdpr-checkbox input[type="checkbox"] {
        width: 16px;
        height: 16px;

        visibility: hidden;
      }
      & .gdpr-checkbox input[type="checkbox"]:checked + label:after {
        opacity: 1;
      }
    }
  }
`;

const Textbox = styled.div`
  max-width: 500px;
  columns: ${(props) => props.textColumns};
  column-gap: 30px;

  & p:first-of-type {
    margin-top: 0;
  }

  & p:last-of-type {
    margin-bottom: 0;
  }
`;

const OptionsContainer = styled.div`
  width: 100%;
  margin: 0 0 20px 0;

  & .enquiry-options__control {
    border: 0;
    // 1px solid #323232;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    padding: 7px 0;

    &:hover {
      border-color: inherit;
    }
  }

  & .enquiry-options__single-value {
    color: inherit;
  }

  & .enquiry-options__single-value {
    margin-left: 0;
  }

  & .enquiry-options__value-container {
    padding: 0;
  }

  & .css-tlfecz-indicatorContainer {
    color: inherit;
    padding: 0;
  }

  & .enquiry-options__indicator {
    padding: 0;
  }

  & .enquiry-options__placeholder {
    color: inherit;
    padding-left: 0;

    margin-left: 0;
    margin-right: 0;
  }

  & .enquiry-options__indicator-separator {
    display: none;
  }

  & .enquiry-options__menu {
    border-radius: 0;

    & .enquiry-options__menu-list {
      padding: 0;
    }

    & .enquiry-options__option--is-focused {
      background-color: #f5f5f5;
    }

    & .enquiry-options__option--is-selected {
      background-color: #fff;
      color: inherit;
    }
  }

  & .css-b8ldur-Input {
    margin: 0;
  }
`;

export const EnquiryForm = ({ content, pageType }) => {
  // Form Setup
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    errors,
  } = useForm();

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <DropdownIcon isOpen={props.selectProps.menuIsOpen} />
        </components.DropdownIndicator>
      )
    );
  };

  const dropdownOptions = [
    { value: `value-1`, label: `Label 1` },
    { value: `value-2`, label: `Label 2` },
    { value: `value-3`, label: `Label 3` },
  ];

  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodeForm({
        "form-name": `${enquiryFormTitle}-enquiry`,
        ...data,
      }),
    })
      .then(() => {
        console.log("form submitted!");
        // this.setState({
        // 	formMessage: `THANKS FOR CONTACTING US`,
        // 	subject: "",
        // 	email: "",
        // 	message: "",
        // });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({
        // 	formMessage: `ERROR`,
        // });
      });
  };

  return (
    <EnquiryFormContainer>
      <Row justifyContent="center">
        <Col col={12} md={6} lg={5}>
          <Textbox
            dangerouslySetInnerHTML={{
              __html:
                content.primary.enquiry_form.document.data.form_title.html,
            }}
          />
          <Textbox
            dangerouslySetInnerHTML={{
              __html: content.primary.enquiry_form.document.data.form_text.html,
            }}
          />
        </Col>
        <Col col={12} md={6} lg={5}>
          <form
            name={`enquiry`}
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit(onSubmit)}
            netlify-honeypot="bot-field"
          >
            <div className="field">
              <input type="hidden" name="bot-field" />
              {/* errors will return when field validation fails  */}
              {errors.name && <span>This field is required</span>}
              <input
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                ref={register({ required: true, maxLength: 80 })}
              />
            </div>
            <div className="field">
              {/* errors will return when field validation fails  */}
              {errors.email && <span>This field is required</span>}
              <input
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                ref={register({
                  required: true,
                })}
              />
            </div>
            <div className="field">
              <input
                name="telephone"
                type="tel"
                placeholder="Telephone"
                autoComplete="telephone"
                ref={register}
              />
            </div>

            <OptionsContainer>
              {/* errors will return when field validation fails  */}
              {errors.type && <span>This field is required</span>}
              <Controller
                name="type"
                as={Select}
                options={dropdownOptions.values}
                placeholder={dropdownOptions.values[0].label}
                classNamePrefix="enquiry-options"
                components={{ DropdownIndicator }}
                isSearchable={false}
                control={control}
                rules={{ required: true }}
                defaultValue={dropdownOptions.values[0].value}
              />
            </OptionsContainer>

            <div className="field">
              <label className="message-title">Message</label>
              {/* errors will return when field validation fails  */}
              {errors.message && <span>This field is required</span>}
              <textarea
                name="message"
                rows="10"
                ref={register({ required: true })}
              />
            </div>

            <>
              <div className="field">
                <label className="message-title">Upload Form</label>
                {/*https://github.com/react-hook-form/react-hook-form/blob/master/examples/customValidation.tsx*/}
                {errors.file && errors.file.type === "fileSize" && (
                  <p>File is too large. Please email us here...</p>
                )}
                <input
                  type="file"
                  name="file"
                  accept=".jpg, .jpeg, .pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="custom-file-input"
                  ref={register({
                    validate: {
                      fileSize: (value) => value[0].size < 300000,
                    },
                  })}
                />
              </div>

              <Textbox
                className="disclaimer small-text"
                dangerouslySetInnerHTML={{
                  __html:
                    content.primary.enquiry_form.document.data.file_upload_text
                      .html,
                }}
              />
            </>

            <div className="gdpr-container">
              {/* errors will return when field validation fails  */}
              {errors.gdprcheck && <span>This field is required</span>}

              <div className="gdpr-checkbox">
                <input
                  type="checkbox"
                  value="None"
                  id="gdpr-checkbox"
                  name="gdprcheck"
                  ref={register({
                    required: true,
                  })}
                />
                <label htmlFor="gdpr-checkbox"></label>
              </div>

              <Textbox
                className="disclaimer small-text"
                dangerouslySetInnerHTML={{
                  __html:
                    content.primary.enquiry_form.document.data
                      .form_disclaimer_text.html,
                }}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </Col>
      </Row>
    </EnquiryFormContainer>
  );
};
