import './Contact.css';
import CenteredHeader from '../components/CenteredHeader';

const Contact = () => {
    return <>
        <div className='nav-placeholder'></div>

        <div className='wrapper contact'>
            <CenteredHeader title="Here's a contact form" subTitle="Have any concerns?">
                <h3>I can't give my contact information in this public space to avoid spam. But you can fill up this form and it will directly mail it to me. Let's go!</h3>

                <form name="contact" method="POST" data-netlify="true">
                    <div>
                        <input type="text" name='name' placeholder='Your name' />
                        <input type="text" name='email' placeholder='Your e-mail' />
                    </div>
                    
                    <textarea name="message" placeholder='Your message'></textarea>

                    <button type="submit">Send</button>                   
                </form>

            </CenteredHeader>
        </div>
    </>;
}

export default Contact;