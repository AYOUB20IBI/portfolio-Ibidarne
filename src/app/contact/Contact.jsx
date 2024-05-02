
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";
import { useEffect, useState } from "react";
import LoadingPage from "./../loadingPage/LoadingPage";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarked,
  faPhone,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
function Contact() {
  const [isLoading, setIsLoading] = useState(true);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState({
  ErrorName: '',
  ErrorEmail: '',
  ErrorSubject: '',
  ErrorMessage: ''
});

const handelSend = (e) => {
  e.preventDefault();
  setLoading(true);
  const service_id = "service_0wmq8uw";
  const template_id = "template_vk47j6c";
  const publicKey = "oPFC3k0ZEj7O6ahjC";

  let error = false;

  if (name.trim() === "") {
    setErrors(prevState => ({ ...prevState, ErrorName: "Please Enter Your Name" }));
    error = true;
  } else {
    setErrors(prevState => ({ ...prevState, ErrorName: "" }));
  }

  if (email.trim() === "") {
    setErrors(prevState => ({ ...prevState, ErrorEmail: "Please Enter Your Email" }));
    error = true;
  } else {
    setErrors(prevState => ({ ...prevState, ErrorEmail: "" }));
  }

  if (subject.trim() === "") {
    setErrors(prevState => ({ ...prevState, ErrorSubject: "Please Enter Your Subject" }));
    error = true;
  } else {
    setErrors(prevState => ({ ...prevState, ErrorSubject: "" }));
  }

  if (message.trim() === "") {
    setErrors(prevState => ({ ...prevState, ErrorMessage: "Please Enter Your Message" }));
    error = true;
  } else {
    setErrors(prevState => ({ ...prevState, ErrorMessage: "" }));
  }

  if (!error) {
    const templateParams = {
      from_name: name,
      subject: subject,
      from_email: email,
      message: message,
      to_name: "IBIDARNE AYOUB",
    };

    emailjs
      .send(service_id, template_id, templateParams, publicKey)
      .then((response) => {
        if (response.status === 200) {
          console.log("Email sent Successfully", response);
          Swal.fire({
            icon: 'success',
            text: 'Email sent Successfully'
          });
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("FAILED...", error);
        Swal.fire({
          icon: 'error',
          text: 'Email not sent Successfully'
        });
        setLoading(false);
      });
  } else {
    Swal.fire({
      icon: 'error',
      text: 'Email not sent Successfully'
    });
    setLoading(false);
  }
};


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    document.title = "IBIDARNE | Contact";
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <section className="ftco-section">
          <div className="container">
            <div className="title_section_contact">
              <h1>
                Contact <span>Us</span>
              </h1>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="row mb-5">
                    <div className="col-md-4">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center ">
                          <span>
                            <FontAwesomeIcon icon={faMapMarked} />
                          </span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Address : </span>
                            <span className="type_writer_span"> Casablanca</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span>
                            <FontAwesomeIcon icon={faPhone} />
                          </span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Phone : </span>{" "}
                            <a href="tel://1234567920">
                              <span className="type_writer_span">
                                 +212 677687809
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span>
                            <FontAwesomeIcon icon={faPaperPlane} />
                          </span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Email : </span>{" "}
                            <a href="mailto:info@yoursite.com">
                              <span className="type_writer_span text-lowercase">
                                ayoubibidarne2@gmail.com
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row no-gutters" id="section__send_email">
                    <div className="col-md-12">
                      <div className="contact-wrap  p-md-5 p-4">
                        <form
                          id="contactForm"
                          name="contactForm"
                          className="contactForm"
                          onSubmit={handelSend}
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="name">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Full Name"
                                  onChange={(e) => setName(e.target.value)}
                                />
                                <span>
                                  {errors.ErrorName &&
                                    <p className="text-danger">{errors.ErrorName}</p>
                                  }
                                </span>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="email">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email Address"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                <span>
                                  {errors.ErrorEmail &&
                                    <p className="text-danger">{errors.ErrorEmail}</p>
                                  }
                                </span>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="subject">
                                  Subject
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  onChange={(e) => setSubject(e.target.value)}
                                />
                                <span>
                                  {errors.ErrorSubject &&
                                    <p className="text-danger">{errors.ErrorSubject}</p>
                                  }
                                </span>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="#">
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  cols="30"
                                  rows="4"
                                  placeholder="Message"
                                  onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <span>
                                  {errors.ErrorMessage &&
                                    <p className="text-danger">{errors.ErrorMessage}</p>
                                  }
                                </span>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <button className="button">
                                  <span className="button_lg">
                                    <span className="button_sl"></span>
                                    <span className="button_text">
                                      {loading === true ? (
                                        <span
                                          className="spinner-border spinner-border-sm"
                                          role="status"
                                          aria-hidden="true"
                                        ></span>
                                      ) : (
                                        <span>
                                          <FontAwesomeIcon icon={faShare} />{" "}
                                          Send Message
                                        </span>
                                      )}
                                    </span>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Contact;
