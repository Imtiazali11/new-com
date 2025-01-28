import React from 'react'

function Page() {
  return (
    <div>
      <section className='contact-form'>
        <h1 className='fade-in'>Contact us</h1>
        <form>
            <input type="text" placeholder='Enter your name' required/>
            <input type="email" placeholder='Enter your Email' required />
            <input type="text" placeholder='Enter your Number' />
            <textarea placeholder='Message here' rows={5} required></textarea>
            <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Page;
