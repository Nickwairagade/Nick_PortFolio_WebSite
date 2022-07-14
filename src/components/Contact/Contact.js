import React from 'react'
import './Style.css'
import me from "../../assets/images/contact-01.webp";
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import MailIcon from '@material-ui/icons/Mail';



function Contact() {
    return (
        <>
            <div className='container'>
                <div className='row contact'>
                    <div className='col-md-7 col-sm-12'>
                        <h4>Contact Us</h4>
                        <div className='row'>
                            <div className='col-1'>
                                <HomeIcon />
                            </div>
                            <div className='col-11'>
                                <span><p>Narendra Nagar Nagpur</p></span>
                            </div>
                            <div className='col-1'>
                                <ContactsIcon />
                            </div>
                            <div className='col-11'>
                                <p>9998889998</p>
                            </div>
                            <div className='col-1'>
                                <MailIcon />
                            </div>
                            <div className='col-11'>nickwairagade@gmail.com</div>
                        </div>
                    </div>
                    <div className='col-md-5 col-sm-12'>
                        <img src={me} alt="" />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Contact