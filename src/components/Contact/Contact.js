import React from 'react';

const Contact = () => {
    return (
        <div id="contact-page" className="container">
    	<div className="bg">
	    	<div className="row">    		
	    		<div className="col-sm-12">    			   			
					<h2 className="title text-center">Contact <strong>Us</strong></h2>    			    				    				
				</div>			 		
			</div>    	
    		<div className="row">  	
	    		<div className="col-sm-8">
	    			<div className="contact-form">
	    				<h2 className="title text-center">Get In Touch</h2>
	    				<div className="status alert alert-success" style={{display: 'none'}}></div>
				    	<form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
				            <div className="form-group col-md-6">
				                <input type="text" name="name" className="form-control" required="required" placeholder="Name"/>
				            </div>
				            <div className="form-group col-md-6">
				                <input type="email" name="email" className="form-control" required="required" placeholder="Email"/>
				            </div>
				            <div className="form-group col-md-12">
				                <input type="text" name="subject" className="form-control" required="required" placeholder="Subject"/>
				            </div>
				            <div className="form-group col-md-12">
				                <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Your Message Here"></textarea>
				            </div>                        
				            <div className="form-group col-md-12">
				                <input type="submit" name="submit" className="btn btn-primary pull-right" value="Submit" />
				            </div>
				        </form>
	    			</div>
	    		</div>
	    		<div className="col-sm-4">
	    			<div className="contact-info">
	    				<h2 className="title text-center">Contact Info</h2>
	    				<address>
	    					<p>E-Shopper Inc.</p>
							<p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
							<p>Newyork USA</p>
							<p>Mobile: +2346 17 38 93</p>
							<p>Fax: 1-714-252-0026</p>
							<p>Email: info@e-shopper.com</p>
	    				</address>
	    				<div className="social-networks">
	    					<h2 className="title text-center">Social Networking</h2>
							<ul>
								<li>
									<a href="#nourl" onClick={e => e.preventDefault()}><i className="fa fa-facebook"></i></a>
								</li>
								<li>
									<a href="#nourl" onClick={e => e.preventDefault()}><i className="fa fa-twitter"></i></a>
								</li>
								<li>
									<a href="#nourl" onClick={e => e.preventDefault()}><i className="fa fa-google-plus"></i></a>
								</li>
								<li>
									<a href="#nourl" onClick={e => e.preventDefault()}><i className="fa fa-youtube"></i></a>
								</li>
							</ul>
	    				</div>
	    			</div>
    			</div>    			
	    	</div>  
    	</div>	
    </div>
    );
};

export default Contact;