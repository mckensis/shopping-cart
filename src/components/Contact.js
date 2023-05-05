import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import twitterIcon from '../images/twitter.png';

const Contact = () => {
  return (
    <main className='big-background'>
      <section className="contact-page">
        <section className="details">
          <h2>Contact Us:</h2>
          <ul>
            <li><span>T:</span>0141 123 4567</li>
            <li><span>E:</span>planty@plantyisplenty.com</li>
          </ul>
        </section>
        <section className="social">
          <h2>Find Us:</h2>
          <ul>
            <li>
              <img className="contact" src={facebookIcon} alt="Facebook" title="Facebook" />
            </li>
            <li>
              <img className="contact" src={instagramIcon} alt="" title="Instagram" />
            </li>
            <li>
              <img className="contact" src={twitterIcon} alt="" title="Twitter" />
            </li>
          </ul>
        </section>
      </section>
    </main>
  )
}

export default Contact;