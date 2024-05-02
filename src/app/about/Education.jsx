import styleEducation from './Education.module.css'

function Education() {

  return (
    <>
        <div className="container">
            <div className={`${styleEducation.timelineE}`}>

                <div className={`${styleEducation.container_education} ${styleEducation.left_container}`}>
                    <div className={`${styleEducation.img_education}`}>
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className={`${styleEducation.text_box}`}>
                        <h2>Specialized Technician.</h2>
                        <small>2022 - 2024</small>
                        <p>
                            Preparation for the diploma of Specialized Technician in Full Stack Digital Development.
                        </p>
                        <span className={`${styleEducation.left_container_arrow}`}></span>
                    </div>
                </div>

                <div className={`${styleEducation.container_education} ${styleEducation.rigth_container}`}>
                    <div className={`${styleEducation.img_education}`}>
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className={`${styleEducation.text_box}`}>
                        <h2>Bachelor's Degree.</h2>
                        <small>2021 - 2022</small>
                        <p>
                            I obtained a baccalaureate in the Department of Physics.
                        </p>
                        <span className={`${styleEducation.rigth_container_arrow}`}></span>
                    </div>
                </div>

                <div className={`${styleEducation.container_education} ${styleEducation.left_container}`}>
                    <div className={`${styleEducation.img_education}`}>
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className={`${styleEducation.text_box}`}>
                        <h2>TV movies.</h2>
                        <small>2023 - 2023</small>
                        <p>
                            It's a website for watching movies and TV series, 
                            and downloading films and series, with a control panel, 
                            built using Laravel, HTML, CSS, Bootstrap, JavaScript, and jQuery.
                        </p>
                        <span className={`${styleEducation.left_container_arrow}`}></span>
                    </div>
                </div>

                <div className={`${styleEducation.container_education} ${styleEducation.rigth_container}`}>
                    <div className={`${styleEducation.img_education}`}>
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className={`${styleEducation.text_box}`}>
                        <h2>Chat IBI27A (AI).</h2>
                        <small>2023 - 2023</small>
                        <p>
                            It's an artificial intelligence website that includes 
                            a chatbot, ChatGPT, and a chat that generates images 
                            using artificial intelligence with React Js and an API.
                        </p>
                        <span className={`${styleEducation.rigth_container_arrow}`}></span>
                    </div>
                </div>

                <div className={`${styleEducation.container_education} ${styleEducation.left_container}`}>
                    <div className={`${styleEducation.img_education}`}>
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className={`${styleEducation.text_box}`}>
                        <h2>God of War.</h2>
                        <small>2022 - 2022</small>
                        <p>
                            It's a custom 'God of War' website, created using HTML, 
                            CSS, Bootstrap, and JavaScript.
                        </p>
                        <span className={`${styleEducation.left_container_arrow}`}></span>
                    </div>
                </div>

                <div className={`${styleEducation.container_education} ${styleEducation.rigth_container}`}>
                    <div className={`${styleEducation.img_education}`}>
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className={`${styleEducation.text_box}`}>
                        <h2>TIME AND DATE.</h2>
                        <small>2022 - 2022</small>
                        <p>
                            It's a website to view TIME and date, created using HTML, 
                            CSS, Bootstrap, JavaScript, and jQuery.
                        </p>
                        <span className={`${styleEducation.rigth_container_arrow}`}></span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Education;