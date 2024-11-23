import React from 'react'

function ErrorMessage({error}) {
  return (
    <div className="contact-error">
        <p className="contact-error-text">{error}</p>
    </div>
  )
}

export default ErrorMessage