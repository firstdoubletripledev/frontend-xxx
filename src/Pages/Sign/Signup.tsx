import React from 'react';
import Layout from '../../components/Layout';

import './Sign.scss';
import { BsArrowUp, BsArrowDown, BsChevronDown, BsChevronCompactUp, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SiApple } from "react-icons/si";
import { RiGooglePlayFill, RiStarSFill } from "react-icons/ri";

const Signup = () => {
    return <Layout className="home" >
        <section className='create-account normal-bg'>
            <div className='dis-f ai-c jc-s'>
                <div className='flex6' style={{ background: '/assets/imgaes/sign/create-account.png', backgroundSize: 'cover' }}>
                    <div className='justify w10 h10 res-p3'>
                        <h1 className='mauto'>
                            Create your account & send payment with now fee
                        </h1>
                    </div>
                </div>
                <div className='flex5 mo-flex6 white-bg'>
                    <div className='dis-f ai-c jc-e fd-c'>
                        <h1 className=''>Create an account</h1>
                        <p className='grey-color'>Let’s get started with your 30 days free trial</p>
                        <div className='mt2'>
                            <div className='w10'>
                                <span className='small-font'>Send From</span>
                            </div>
                            <div className='which-country'>
                                <div className='dis-f gap10'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Layout>;
};

export default Signup;