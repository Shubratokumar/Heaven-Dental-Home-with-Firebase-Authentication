import React from 'react';
import profile from '../../../src/Assets/Images/ProfilePhoto.jpg';
import "./About.css";
import { BiHappy } from 'react-icons/bi';

const About = () => {
    return (
        <div className='about'>
            <div className="container mt-4 p-3">
                <h1 className="text-primary text-center my-4 ">About Me</h1>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-lg-6">
                        <div className='shadow-lg p-3 mb-5 bg-body rounded '>
                            <div className='d-flex justify-content-center'>
                                <img className='profile-img' src={profile} alt="" />
                            </div>
                            <hr />
                            <h3 className='text-center oranged'> Shubrato Kumar Gharami</h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                            <p className='justified fs-5 fst-italic'> " Hi! This is Shubrato Kumar. You can know me as a tech enthusiastic. Though i'm new to in this field, but I enjoyed much while exploring new technologies. I want to see myself as a Full Stack Developer within this year. Truth to be told I have a fascination on Front End Development. I just love it. I'm always trying to do such things what will take me closer to my goal. That's all about my goals, nothing more than that. " </p>
                            <BiHappy className='text-warning fs-5'></BiHappy>
                            <BiHappy className='text-warning fs-5'></BiHappy>
                            <BiHappy className='text-warning fs-5'></BiHappy>
                            <hr />
                            <p className='text-end fst-italic oranged'>-- Shubrato Kumar</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;