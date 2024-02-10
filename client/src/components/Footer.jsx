import {Footer} from 'flowbite-react';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import {BsFacebook, BsEnvelope, BsGithub, BsLinkedin} from 'react-icons/bs';

export default function FooterComponent() {
  return (
    <Footer container className='border border-t-8 border-red-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex   md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to="/">
                        <img src={Logo} alt="logo" className="w-40 h-auto" />
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                            <Footer.Link href='http://www.rabinkumarbaniya.com.np'
                            target='blank'
                            rel='noopener noreferrer'
                            >
                            Portfolio
                            </Footer.Link>
                            <Footer.Link href='/about'
                            target='blank'
                            rel='noopener noreferrer'
                            >
                            Rabba's Blog
                            </Footer.Link>
                         </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow' />
                             <Footer.LinkGroup col>
                                <Footer.Link href='https://github.com/RabinKumarBaniya'
                                target='blank'
                                rel='noopener noreferrer'
                            >
                            Github
                            </Footer.Link>
                            <Footer.Link href='#'>
                            News Portal
                            </Footer.Link>
                            </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                            <Footer.Link href='#'>
                                Privacy Policy
                                </Footer.Link>
                                <Footer.Link href='#'>
                                Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Rabba's Blog" year={new Date().getFullYear()} />
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='https://www.facebook.com/RabinKrBaniya/' icon={BsFacebook} />
                    <Footer.Icon href='mailto:rabinkrbaniya09@gmail.com'  icon={BsEnvelope} />
                    <Footer.Icon href='https://github.com/RabinKumarBaniya' icon={BsGithub} />
                    <Footer.Icon href='https://www.linkedin.com/in/rabin-kumar-baniya-156b45237' icon={BsLinkedin} />
                </div>
            </div>
        </div>
    </Footer>
  );
}
