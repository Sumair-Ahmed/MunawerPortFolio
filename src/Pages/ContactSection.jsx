import React , {useState} from 'react'
import ContactSectionData from "../Data/ContactSectionData.json"
import ThemeChange from '../componet/ThemeChange';
import ContactCard from '../componet/ContactCard';
import SecondLoading from '../componet/SecondLoading';
import ContactForm from '../componet/ContactForm';
function ContactSection() {
    const [spinner, setSpinner] = useState(true);
    return (
        <>    
            <SecondLoading setSpinner={setSpinner} spinner={spinner} />
        <section className={"contact section " + ((spinner === true) ? 'Hide' : '')}>
            <div className="container">
                <div className="row">
                    <div className='section-title padd-15'>
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <h3 className='contact-title padd-15'>Have You Any Question ?</h3>
                <h4 className='contact-sub-title padd-15'>I'M AT YOUR SERVICES</h4>
                <div className='row'>
                        <ContactCard list={ContactSectionData.Infomration} />
                </div>
                <h3 className='contact-title padd-15'>SEND ME AN EMAIL</h3>
                <h4 className='contact-sub-title padd-15'>I'M VERY RESPOSIVE TO MESSAGES</h4>
                <div className='row'>
                    <ContactForm />
                </div>
            </div>
            <ThemeChange />
        </section>
        </>
    )
}

export default ContactSection