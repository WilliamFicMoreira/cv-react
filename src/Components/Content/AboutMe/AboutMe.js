import React from "react";
import AboutMeCss from "./AboutMeCss";
import Author from "../../Images/cv-autor.jpg";

const AboutMe = () => {
  return (
    <AboutMeCss>
      <section>
        <h1> Sobre: </h1>
        {/* fazer css letra por letra igual o nome dos personagens no p5r no menu de confidant */}

        {/* descomentar abaixo
        <h2>William Moreira</h2> 

        <div className="Author">
          <img src={Author} alt="foto do autor"></img>
        </div> */}

        <div className="speech top">
            Qui esse commodo sint exercitation ad. Quis minim reprehenderit culpa
            pariatur anim. Velit esse velit mollit proident nulla aute laboris.
            Ullamco fugiat mollit nulla ea deserunt magna ea enim exercitation id
            ex. Non fugiat labore labore culpa. Ex et esse veniam mollit laboris
            exercitation adipisicing. Magna id adipisicing id tempor do eu nisi nisi
            aliquip proident consectetur cillum ea. Amet incididunt laboris dolor
            Lorem aliquip ipsum minim. Officia cupidatat veniam aute anim do dolor
            sint mollit labore anim est consectetur veniam laboris. Pariatur elit
            consequat commodo irure nostrud tempor ipsum veniam. Laboris consectetur
            officia anim deserunt amet quis veniam fugiat nisi. Reprehenderit velit
            ipsum quis Lorem velit dolor qui velit sunt commodo reprehenderit
            excepteur proident. Dolor sunt reprehenderit incididunt nostrud nulla
            velit irure ut ipsum in ea sit nostrud. Culpa proident excepteur
            proident consectetur non sit incididunt deserunt aliqua quis. Velit
            laboris occaecat deserunt nostrud aliquip sunt ipsum. Fugiat culpa
            voluptate aliquip sint velit deserunt aute deserunt sint occaecat. Irure
            ut labore sunt deserunt irure laborum pariatur voluptate reprehenderit
            anim.
        </div>
      </section>
    </AboutMeCss>
  );
};

export default AboutMe;
