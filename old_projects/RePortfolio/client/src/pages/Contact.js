import React, {Component} from 'react';
import './Pages.css';

export class Contact extends Component {
    render(){
        return(
            <div id="main-contact">
                {/* <Not functional, I may nix this page */}
                <section className="container card mt-5 form-cust">

                    <p>Email: </p>
                    <p>Phone: </p>
                    {/* person@example.com?subject=Contact From Portfolio */}
                    <a className='btn btn-user-message mb-3 form-cust' href=''>Send Email</a>

                    {/* <form action='mailto:' method='post'
                    enctype='text/plain'>

                        <button type="submit" id="user-message-send" className="btn btn-user-message mb-3 form-cust">Send Email</button>

                    </form> */}
                </section>

            </div>
        );
    };
};
