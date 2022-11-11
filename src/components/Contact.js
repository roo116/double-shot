import React from 'react'

const Contact =() => {

    const emailContactForm = () => {
        console.log(formData)
    }


    return(
        <div id="Contact">
      <form action="email:hillkarl03@gmail.com">
        <label for="name">Name:</label>
        <input type="text" placeholder="Name:" />
        <label>Email:</label>
        <input type="email" placeholder="email" />
        <label for="email">How can we help?</label>
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
)
}

export default Contact;