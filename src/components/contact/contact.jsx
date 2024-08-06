import './contact.css';
import './contactMobile.css';

function Contact() {
    return (
        <>
            <section id='contact'>
                <div className="contact_container">
                    <div className="contact_text">
                        <div>
                            <h3>Get In Touch</h3>
                        </div>

                        <div>
                            <h1>Contact me</h1>
                        </div>

                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                    </div>

                    <div className="contact_form">
                        <form action="">
                            <div className="user_form">
                                <div>
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" />
                                </div>

                                <div>
                                    <label htmlFor="name">Last name</label>
                                    <input type="text" />
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" />
                                </div>

                                <div>
                                    <label htmlFor="tel">Phone number</label>
                                    <input type="tel" />
                                </div>
                            </div>
                            <div className="select_form">
                                <div>
                                    <label htmlFor="topic">Choose a topic</label>
                                    <select name="topic" id="topic">
                                        <option value="">Select one...</option>
                                        <option value="Junior">Junior</option>
                                        <option value="Senior">Senior</option>
                                        <option value="Middle">Middle</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" placeholder='Type your message...'></textarea>
                                </div>

                            </div>
                            <div className='checkded'>
                                <input type="checkbox" />
                                <span>I accept the terms</span>
                            </div>
                            <div className="form_btn">
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact;