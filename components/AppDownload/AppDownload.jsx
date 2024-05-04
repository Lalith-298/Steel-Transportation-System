import React from 'react'
import './AppDownload.css'
// import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <>
       <div class="contact-container">
        <form action="https://api.web3forms.com/submit" method="POST" class="contact-left">
            <div class="contact-left-title">
                <h2>Get In Touch</h2>
                <hr/>
            </div>
            <input type="hidden" name="access_key" value="e381e2ff-39e4-42ba-896b-03613a687c48"/>

            <input type="text" name="name" placeholder="Your Name" class="contact-inputs" required/>
            <input type="email" name="email" placeholder="Your Email" class="contact-inputs" required/>
            <input type="number" name="phone" placeholder="Phone Number"  class="contact-inputs" required/>
            <textarea name="message" placeholder="Your Message" class="contact-inputs" required></textarea>
            <button type="submit">Submit <img src="https://th.bing.com/th/id/R.79a8ecc8e0064345cf64683ccca3c418?rik=uXA7J48cGGZCAA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7Ta%2f6eR%2f7Ta6eRqLc.png&ehk=%2bS6BzWU7Cohv2P0Y8gD%2bdsomiRTl%2fyF3xsGbi7Rlbkk%3d&risl=&pid=ImgRaw&r=0" alt="img"/></button>
        </form>
    </div>
        </>
    )
}

export default AppDownload
