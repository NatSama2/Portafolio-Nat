import React from "react";
import styles from "../styles/aboutMe.module.css";
import YoVet from "../assets/YoVet.jpg";
import Navbars from "../Components/Navbar";
import Footer from "../Components/Footer";

function AboutMe() {
  return (
    <>
      <Navbars />

      <section className="section">
        <div>
        <img
          className="wow_imgage wow fadeInLeft animated"
          data-wow-delay="0.2s"
          id={styles.vetImg}
          src={YoVet}
          alt="Leaves"
        />
        </div>
        
        <div>
        <p
          id={styles.pAbout}
          className="wow_imgage wow fadeInLeft animated"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            WebkitAnimationDelay: "0.2s",
            MozAnimationDelay: "0.2s",
            animationDelay: "0.2s",
          }}
        >
          Como desarrolladora, mi principal objetivo es crear productos de alta
          calidad que satisfagan las necesidades del cliente y mejoren la
          experiencia de los usuarios. Disfruto trabajando en equipo y
          manteniéndome actualizada en las últimas tendencias del desarrollo
          web. Además, tengo una gran pasión por el mundo de los juegos de video
          y disfruto explorando cómo llevarlos a cabo en el ámbito de la
          programación.
        </p>
        </div>
      </section>

      <p
        className="wow_imgage wow fadeInRight animated"
        data-wow-delay="0.2s"
        style={{
          visibility: "visible",
          WebkitAnimationDelay: "0.2s",
          MozAnimationDelay: "0.2s",
          animationDelay: "0.2s",
        }}
      >
        Mi experiencia previa como profesional en medicina veterinaria me ha
        brindado habilidades valiosas que aplico al desarrollo web, como la
        adaptabilidad y la capacidad para trabajar en situaciones de alta
        presión. Además, valoro la comunicación efectiva y la colaboración para
        alcanzar objetivos comunes. Gracias a mi trato cercano con personas y mi
        capacidad analítica, puedo comprender las necesidades y expectativas de
        los usuarios y traducirlas en soluciones intuitivas y funcionales.
      </p>
      <figure>
        <img
          className="wow_imgage wow fadeInRight animated"
          data-wow-delay="0.2s"
          src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg"
          width="570px"
          height="180px"
          alt="Leaves"
        />
      </figure>

      <figure>
        <img
          className="wow_imgage wow fadeInLeft animated"
          data-wow-delay="0.2s"
          src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg"
          width="570px"
          height="180px"
          alt="Leaves"
        />
      </figure>
      <p
        className="wow_imgage wow fadeInLeft animated"
        data-wow-delay="0.2s"
        style={{
          visibility: "visible",
          WebkitAnimationDelay: "0.2s",
          MozAnimationDelay: "0.2s",
          animationDelay: "0.2s",
        }}
      >
        Estoy emocionada por poder aportar mis habilidades y conocimientos como
        Front-End Developer en mi próxima oportunidad laboral. Me apasiona el
        diseño y la creación de productos web que impacten positivamente en la
        vida de los usuarios y estoy ansiosa por continuar aprendiendo y
        creciendo en este campo.
      </p>

      <Footer />
    </>
  );
}

export default AboutMe;
