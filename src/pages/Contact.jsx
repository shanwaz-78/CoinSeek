import React from 'react'
import { useState } from 'react'
import { TextField } from '@material-ui/core'
import { Tab } from 'bootstrap'
import { CryptoState } from '../cryptoContext'
import { db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { set } from 'firebase/database'


function Contact() {
  const { messageArray, user } = CryptoState()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const messageObj = {
    'name': firstName + ' ' + lastName,
    'email': email,
    'message': message
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const messageRef = doc(db, user.uid, 'Messages')
    try {
      await setDoc(messageRef, {
        messages: messageArray ? [...messageArray, messageObj] : [messageObj]
      },
      { merge: true }
    ),
      alert('Your message has transferred')
    } catch (error) {
      alert('error:', error)
    }
  }

  return (
    <div className='contact-page'>
      <div className='contact-banner'>
        <h4>Contact Us</h4>
        <h1>Send us your views and suggestion</h1>
        <h5>Drop us a line through the form below and we'll get back to you </h5>
      </div>
      <div className='contact-form'>
        <form >
          <div className='name-form'>
            <TextField
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <TextField
            label="Email"
            variant="outlined"
            type='email'
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="send your message"
            variant="outlined"
            type='text-area'
            value={message}
            fullWidth
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleClick} >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
