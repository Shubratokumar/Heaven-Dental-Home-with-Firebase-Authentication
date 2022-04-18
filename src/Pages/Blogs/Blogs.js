import React from "react";
import './Blogs.css'

const Blogs = () => {
  return (
    <div>
        <div className="container px-4">
        <h2 className='fs-2 text-center q-title'>Question and Answer :</h2>
            <div className="row gx-5 ">
            <div className="col-sm-12 col-lg-4">
                <div className="shadow p-3 mb-5 bg-body rounded">
                <h4 className='fs-3'>Q - 01: What is the difference between authorization and authentication ?</h4>
                <hr />
                <div className="fs-5 fst-italic justified"><span className='answer'>Answer :  </span>
                In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be.
                <br/>
                <span className= 'oranged'>Authentication :</span>
                <ul>
                    <li>Authentication verifies who the user is.</li>
                    <li>Authentication is the first step of a good identity and access management process.</li>
                    <li>Authentication is visible to and partially changeable by the user.</li>
                </ul>
                <span className= 'oranged'>Authorization :</span>
                <ul>
                    <li>Authorization determines what resources a user can access.</li>
                    <li>Authorization always takes place after authentication.</li>
                    <li>Authorization isn’t visible to or changeable by the user.</li>
                </ul>
                </div>                   
                </div>
            </div>
            <div className="col-sm-12 col-lg-4">
                <div className="shadow p-3 mb-5 bg-body rounded">
                <h4 className='fs-3'>Q - 02: Why are you using firebase? What other options do you have to implement authentication?</h4>
                <div className="fs-5 fst-italic justified"><span className='answer'>Answer :  </span>
                <p>Firebase is Google’s mobile application development platform. It has a lot of different products that cover much of what’s needed to build a mobile app.</p>
                </div>
                    
                </div>
            </div>
            <div className="col-sm-12 col-lg-4">
                <div className="shadow p-3 mb-5 bg-body rounded">
                    
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Blogs;
