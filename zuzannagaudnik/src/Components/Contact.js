import React from 'react';
import "animate.css/animate.min.css";


const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;

    if (!name.value || !email.value || !message.value) {
      return;
    }

    setFormStatus('Submitting...');

    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);    
  };

  return (
    <section name="contact" className="contact">
      <div className="contact__description animate__animated animate__fadeInLeft">
        <h2>Contact</h2>
        <p>If you have questions, write to me.. I'll be happy to answer!</p>
        <div className="contact__img"></div>
      </div>

      <div className="contact__container animate__animated animate__fadeInRight">
        <form onSubmit={onSubmit} action="emailform.php" method="post">
          <div className="contact__form">
            <label className="contact__label" htmlFor="name">
              Name:
            </label>
            <input className="contact__control" type="text" id="name" required />
          </div>

          <div className="contact__form">
            <label className="contact__label" htmlFor="email">
              Email:
            </label>
            <input className="contact__control" type="email" id="email" required />
          </div>

          <div className="contact__form">
            <label className="contact__label" htmlFor="message">
              Message:
            </label>
            <textarea className="contact__control message" id="message" required />
          </div>
          <a
                    className="btn rounded contact__btn"
                    href='/send_message'
                    rel="noopener noreferrer"
                > {formStatus}

                    <span className="text-brown">Submit</span>
                </a>
                <a
                    className="btn_mobile btn--difference contact__btn__mobile"
                    href='/send_message'
                    rel="noopener noreferrer"
                > {formStatus}

                    <span className="text-brown">Submit</span>
                </a>

        </form>
      </div>
    </section>
  );
};

export default Contact;
