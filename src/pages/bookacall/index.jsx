import { useAppContext } from '../../shared/hooks/ThemeContext';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const element = useRef(null);
  const [investQuestion, setInvestQuestion] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);
  const navigate = useNavigate();
  const _ = useAppContext();

  const handleButtonClick = (value) => {
    setInvestQuestion(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    const newErrors = {};
    setDisabledButton(true);

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter a valid email address';
    } else if (!isValidEmail(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
        setDisabledButton(false);
      element.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    try {
      const response = await axios.post('https://api.creedz.net/api/book-a-call', {
        name: name,
        email: email,
        company: company,
        message: message,
        invest_question: investQuestion
      });

      if (response.data.status === 'ok') {
         navigate('/bookacall/received');
      } else {
        setDisabledButton(false);
        console.error('Unexpected response status:', response.data.status);
      }
    } catch (error) {
      setDisabledButton(false);
      console.error('Error sending email:', error);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

      // Handle 'Enter' key press to trigger form submission
      const handleKeyDown = (e) => {
         if (e.key === 'Enter') {
           handleSubmit();
         }
       };
      
       useEffect(() => {
         // Add keydown event listener when component mounts
         window.addEventListener('keydown', handleKeyDown);
      
         // Remove event listener when component unmounts
         return () => {
           window.removeEventListener('keydown', handleKeyDown);
         };
       }, [name, email, company, message, investQuestion]); // Dependencies to track the input values
   

  return (
      <div className='bookacall__container'>
        <h2 ref={element} className='bookacall__title'>Book an intro call</h2>
        <h3 className="bookacall__title_2">First, a little about yourself.</h3>
        <div className="bookacall__inputs">
          <label className='bookacall__label'>
            <input
                type="text"
                name="name"
                placeholder='Name'
                value={name}
                onChange={handleNameChange}
            />
            {errors.name && <p className="bookacall__error">{errors.name}</p>}
          </label>
          <label className='bookacall__label'>
            <input
                type="email"
                name="email"
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
            />
            {errors.email && <p className="bookacall__error">{errors.email}</p>}
          </label>
          <label className='bookacall__label'>
            <input
                type="text"
                name="company"
                placeholder='Company'
                value={company}
                onChange={handleCompanyChange}
            />
          </label>
        </div>
        <div className='bookacall__comments'>
          <h3 className="bookacall__title_2">Tell us about your business and scope of the project.</h3>
          <label className='bookacall__label'>
          <textarea
              name="message"
              placeholder='Start typing here...'
              value={message}
              onChange={handleCommentsChange}
          ></textarea>
          </label>
        </div>
        <div className='bookacall__questions'>
          <div className='bookacall__buttons-block'>
            <h3 className="bookacall__title_2">Are you prepared to invest in your visual identity?</h3>
            <div className="bookacall__buttons">
              <button
                  type='button'
                  className={`bookacall__button button ${investQuestion === 'yes' ? '_active' : ''}`}
                  onClick={() => handleButtonClick('yes')}
                  onMouseEnter={() => { _.setHoverAnyLink(true) }}
                  onMouseLeave={() => { _.setHoverAnyLink(false) }}
              >
                Yes
              </button>
              <button
                  className={`bookacall__button button ${investQuestion === 'no' ? '_active' : ''}`}
                  onClick={() => handleButtonClick('no')}
                  onMouseEnter={() => { _.setHoverAnyLink(true) }}
                  onMouseLeave={() => { _.setHoverAnyLink(false) }}
              >
                No
              </button>
            </div>
          </div>
        </div>
        <button
            onMouseEnter={() => { _.setHoverAnyLink(true) }}
            onMouseLeave={() => { _.setHoverAnyLink(false) }}
            onClick={handleSubmit}
            className="bookacall__submit button"
            disabled={disabledButton}
        >
          Book my call
        </button>
      </div>
  );
}
