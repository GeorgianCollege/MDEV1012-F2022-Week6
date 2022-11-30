import React from 'react';

function Contact()
{
    return(
        <div>
            <h1 className="mb-5">Contact Us</h1>
            <hr />

            <div className="row">
                <div className="col-md-6">
                <form>
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullname" name="fullname"
                    placeholder="Enter your Full Name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactnumber" className="form-label">Contact Number</label>
                    <input type="tel" className="form-control" id="contactnumber" name="contactnumber" 
                    placeholder="Enter your Contact Number" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="emailaddress" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="emailaddress" name="emailaddress"
                    placeholder="Enter your Email Address" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" name="message" 
                placeholder="enter your message here..."></textarea>
                </div>

                <button id="submitButton" type="submit" className="btn btn-primary me-2">Submit</button>
                <button id="resetButton" type="reset" className="btn btn-warning">Reset</button>
            </form>
            
                </div>
            </div>
        </div>
    )
}

export default Contact;