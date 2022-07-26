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
                <div class="background">
                    <div class="container">
                        <div class="screen">
                            <div class="screen-header">
                                <div class="screen-header-left">
                                    <div class="screen-header-button close"></div>
                                    <div class="screen-header-button maximize"></div>
                                    <div class="screen-header-button minimize"></div>
                                </div>
                                <div class="screen-header-right">
                                    <div class="screen-header-ellipsis"></div>
                                    <div class="screen-header-ellipsis"></div>
                                    <div class="screen-header-ellipsis"></div>
                                </div>
                            </div>
                            <div class="screen-body">
                                <div class="screen-body-item left">
                                    <div class="app-title">
                                        <span>CONTACT</span>
                                        <span>US</span>
                                    </div>
                                    <div class="app-contact">CONTACT INFO : 9860489971</div>
                                </div>
                                <div class="screen-body-item">
                                    <div class="app-form">
                                        <div class="app-form-group">
                                            <input class="app-form-control" placeholder="NAME" value="Nikhil Wairagade" />
                                        </div>
                                        <div class="app-form-group">
                                            <input class="app-form-control" value="nickwairagade@gmail.com" placeholder="EMAIL" />
                                        </div>
                                        <div class="app-form-group">
                                            <input class="app-form-control" value="9860489971" placeholder="CONTACT NO" />
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