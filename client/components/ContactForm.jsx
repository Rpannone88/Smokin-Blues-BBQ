import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useForm } from 'react-hook-form';

export default function ContactForm ({ open, onClose }){
  if(!open) return null

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const formSubmitObj = {
      first: data.first,
      last: data.last,
      email: data.email,
      phone: data.phone,
      message: data.message,
      preferred: data.preferred,
    };
    console.log(formSubmitObj)
  };

  return ReactDom.createPortal(
    <>
    <div className="overlay-styles"/>
      <div className="contact-form">
        <div className="form-title">Contact Us!</div>
        <div
        className="form-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem auctor, sodales felis nec, mattis neque. Aliquam erat volutpat.
          </div>
        <a href="#"
        className="close"
        onClick={onClose}
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-labels">First Name*</label>
          </div>
            <input
            name="first"
            type="text"
            className="form-inputs"
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('first', {
              required: true,
              maxLength: 60,
              message: 'error message',
            })}
            ></input>
          <div>
            {errors.first && errors.first.type === 'required' && (
            <span className="error" role="alert">You must enter a first name!</span>
            )}
          </div>

          <div>
            <label className="form-labels">Last Name</label>
          </div>
            <input
            name="last"
            type="text"
            className="form-inputs"
            {...register('last', {
              required: true,
              maxLength: 60,
              message: 'error message',
            })}
            ></input>
          <div>
            {errors.last && errors.last.type === 'required' && (
            <span className="error" role="alert">You must enter a last name!</span>
            )}
          </div>

          <div>
            <label className="form-labels">Email*</label>
          </div>
            <input
            name="email"
            type="text"
            className="form-inputs"
            {...register('email', {
              required: true,
              maxLength: 60,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            ></input>
          <div>
            {errors.email && errors.email.type === 'required' && (
            <span className="error" role="alert">You must enter an email address</span>
            )}
            {errors.email && errors.email.type === 'maxLength' && (
            <span className="error" role="alert">Max length exceeded</span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
            <span className="error" role="alert">This is not a valid email</span>
            )}
          </div>

          <div>
            <label className="form-labels">Phone*</label>
          </div>
            <input
            name="phone"
            type="text"
            className="form-inputs"
            {...register('phone', {
              required: true,
              maxLength: 10,
              pattern: {
                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                message: 'invalid phone number',
              },
            })}
            ></input>
          <div>
          <div>
            {errors.phone && errors.phone.type === 'required' && (
            <span className="error" role="alert">You must enter a phone number</span>
            )}
            {errors.phone && errors.phone.type === 'pattern' && (
            <span className="error" role="alert">This is not a valid phone number</span>
            )}
          </div>

          <label className="form-labels">Message*</label>
          </div>
            <input
            type="text"
            className="form-inputs"
            type="message"
            {...register('message', {
              required: true,
              maxLength: 1000,
              message: 'error message',
            })}
            ></input>
          <div>
            {errors.message && errors.message.type === 'required' && (
            <span className="error" role="alert">You must enter a message</span>
            )}
            {errors.message && errors.message.type === 'maxLength' && (
            <span className="error" role="alert">Max length exceeded</span>
            )}
          </div>

          <div className="form-labels-footer">note: * indicates required field.</div>
          <div className="form-labels">Preferred Method Of Contact</div>
          <div className="form-labels">
            <input
            type="radio"
            value="Email"
            name="preferred"
            {...register('preferred', {
              value: "email",
            })}
            /> Email
            <input
            type="radio"
            value="Phone"
            name="preferred"
            {...register('preferred', {
              value: "phone",
            })}
            /> Phone
            <input
            type="radio"
            value="Text"
            name="preferred"
            {...register('preferred', {
              value: "text",
            })}
            /> Text
          </div>
          <button className="submit-button" type="submit">Submit</button>
      </form>
      </div>
    </>,
  document.getElementById('portal')
  )
};



