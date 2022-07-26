import React from 'react'
import './Style.css'
// import me from "../../assets/images/contact-01.webp";
// import HomeIcon from '@material-ui/icons/Home';
// import ContactsIcon from '@material-ui/icons/Contacts';
// import MailIcon from '@material-ui/icons/Mail';



function Contact() {
    return (
        <>
            <div className='container'>
                <div className="background">
                    <div className="container">
                        <div className="screen">
                            <div className="screen-header">
                                <div className="screen-header-left">
                                    <div className="screen-header-button close"></div>
                                    <div className="screen-header-button maximize"></div>
                                    <div className="screen-header-button minimize"></div>
                                </div>
                                <div className="screen-header-right">
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                </div>
                            </div>
                            <div className="screen-body">
                                <div className="screen-body-item left">
                                    <div className="app-title">
                                        <span>CONTACT</span>
                                        <span>ME</span>
                                    </div>
                                    <div className="app-contact">CONTACT INFO : 9860489971</div>
                                </div>
                                <div className="screen-body-item">
                                    <div className="app-form">
                                        <div className="app-form-group">
                                            <input className="app-form-control" placeholder="NAME" value="Nikhil Wairagade" />
                                        </div>
                                        <div className="app-form-group">
                                            <input className="app-form-control" value="nickwairagade@gmail.com" placeholder="EMAIL" />
                                        </div>
                                        <div className="app-form-group">
                                            <input className="app-form-control" value="9860489971" placeholder="CONTACT NO" />
                                        </div>
                                        {/* <div class="app-form-group message">
                                            <input class="app-form-control" placeholder="MESSAGE" />
                                        </div>
                                        <div class="app-form-group buttons">
                                            <button class="app-form-button">CANCEL</button>
                                            <button class="app-form-button">SEND</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact