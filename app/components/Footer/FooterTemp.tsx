import React from 'react'

import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

const FooterTemp = () => {
    return (
        <Footer bgDark>
            <div id='color'>
                <div className="w-full">
                    <div className="bg-black grid w-full grid-cols-2 gap-60 px-6 py-8 md:grid-cols-4">
                        <div className='translate-x-12 p-2'>
                            <Footer.Title id='header-color' title="Company" />
                            <Footer.LinkGroup col className='footer-blocks'>
                                    
                                <Footer.Link id='color' href="#">About</Footer.Link>
                                <Footer.Link id='color' href="#">Careers</Footer.Link>
                                <Footer.Link id='color' href="#">Brand Center</Footer.Link>
                                <Footer.Link id='color' href="#">Blog</Footer.Link>

                            </Footer.LinkGroup>
                        </div>
                        <div  className='translate-x-12 p-2'>
                            <Footer.Title title="help center" id='header-color' />
                            <Footer.LinkGroup col className='footer-blocks'>
                                <Footer.Link id='color' href="#">Discord Server</Footer.Link>
                                <Footer.Link id='color' href="#">Twitter</Footer.Link>
                                <Footer.Link id='color' href="#">Facebook</Footer.Link>
                                <Footer.Link id='color' href="#">Contact Us</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div  className='translate-x-12 p-2'>
                            <Footer.Title title="legal" id='header-color'/>
                            <Footer.LinkGroup col className='footer-blocks'>
                                <Footer.Link id='color' href="#">Privacy Policy</Footer.Link>
                                <Footer.Link id='color' href="#">Licensing</Footer.Link>
                                <Footer.Link id='color' href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div  className='translate-x-12 p-2'>
                            <Footer.Title title="download" id='header-color' />
                            <Footer.LinkGroup col className='footer-blocks'>
                                <Footer.Link id='color' href="#">iOS</Footer.Link>
                                <Footer.Link id='color' href="#">Android</Footer.Link>
                                <Footer.Link id='color' href="#">Windows</Footer.Link>
                                <Footer.Link id='color' href="#">MacOS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    <div id='color' className="w-full bg-black px-4 py-6 sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by=" Rayal Park" year={2024} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                        </div>
                    </div>
                </div>
            </div>
        </Footer>
    );
}


export default FooterTemp
