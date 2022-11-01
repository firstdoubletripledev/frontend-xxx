import { connected } from 'process';
import React from 'react';
import { RiGooglePlayFill, RiStarSFill } from "react-icons/ri";


const Footer = () => {
    return (
        <footer className='res-pt6 res-pb6 white-color'>
            <section className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <h3 className=''>Stay Up to Date</h3>
                        <p className=' mt1'>Subscribe to our weekly newsletter for updates</p>
                    </div>
                    <div className='col-sm-12 col-md-6 dis-f ai-c'>
                        <div className='justify-s gap20 w10'>
                            <input className='email-input flex1' type="input" placeholder='Email' />
                            <button className='btn primary-bg br-0'>Submit</button>
                        </div>
                    </div>
                </div>
                <div className='res-mt3' style={{ border: '1px solid #C3C2C1' }}></div>
                <div className='res-mt3'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-6'>
                                    <h5 className=''>Company</h5>
                                    <p>About</p>
                                    <p>FAQ</p>
                                    <p>Blog</p>
                                    <p>Countries</p>
                                </div>
                                <div className='col-sm-12 col-md-6'>
                                    <h5 className=''>Information</h5>
                                    <p>Lorem Ipsum</p>
                                    <p>Request demo</p>
                                    <p>Support</p>
                                    <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 tc'>
                            <div className='justify fd-c gap20 h10'>
                                <div className='justify gap10'>
                                    <div className='social-icon'>
                                        <RiGooglePlayFill fontSize={'18px'} />
                                    </div>
                                    <div className='social-icon'>
                                        <RiGooglePlayFill fontSize={'18px'} />
                                    </div>
                                    <div className='social-icon'>
                                        <RiGooglePlayFill fontSize={'18px'} />
                                    </div>
                                    <div className='social-icon'>
                                        <RiGooglePlayFill fontSize={'18px'} />
                                    </div>
                                    <div className='social-icon'>
                                        <RiGooglePlayFill fontSize={'18px'} />
                                    </div>
                                </div>
                                <div className=''>Copyright 2022 @ Flash Technologies, All rights reserved.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </footer>
    )
};

export default Footer; 