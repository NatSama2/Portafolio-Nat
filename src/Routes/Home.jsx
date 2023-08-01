import React from "react";
import styles from "../styles/home.module.css";
import Navbars from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbars />
      <section id={styles.sectionBanner}>

        <div className={styles.imgsBanner}>
        <div className={styles.yoBanner}>
          <img src="src/assets/yo-banner.png"></img>
        </div>
        <div className={styles.banner}>
          <img src="src/assets/baner.png" alt="Banner" />
        </div>
        </div>

        <div className={styles.pBanner}>
        <p>
          Título: Viaje a las maravillas de la naturaleza Había una vez un grupo
          de intrépidos aventureros que decidió emprender un viaje único y
          fascinante a través de las maravillas de la naturaleza. Su objetivo
          era explorar los rincones más remotos y espectaculares del mundo
          natural, aquellos lugares que muy pocos habían tenido la oportunidad
          de presenciar. El viaje comenzó en la exuberante selva amazónica, un
          lugar lleno de vida y misterio. Allí, se encontraron con una
          biodiversidad impresionante: coloridas aves tropicales revoloteaban
          entre los árboles, monos juguetones saltaban de rama en rama y
          mariposas de todos los tamaños y colores revoloteaban a su alrededor.
          Los sonidos de la selva los envolvían en una sinfonía de vida y
          naturaleza. Luego, se aventuraron a explorar las majestuosas montañas
          de los Andes. Escalaron altas cumbres cubiertas de nieve y admiraron
          valles verdes y lagos cristalinos en lo profundo de las montañas. La
          imponencia de la naturaleza los hizo sentir pequeños e insignificantes
          frente a tanta grandeza. El siguiente destino los llevó a las cálidas
          y paradisíacas playas del Caribe. Allí, se sumergieron en aguas
          cristalinas y descubrieron arrecifes de coral repletos de peces
          tropicales de colores deslumbrantes. Nadaron junto a tortugas marinas
          y se maravillaron con la diversidad de la vida marina que se escondía
          bajo la superficie. El viaje continuó hacia las vastas llanuras
          africanas, donde tuvieron la oportunidad de observar la majestuosidad
          de la fauna salvaje en su hábitat natural. Avistaron elefantes,
          leones, jirafas y rinocerontes en su entorno natural, lo que les
          permitió entender la importancia de la conservación de estas especies
          tan emblemáticas. Posteriormente, se dirigieron a los gélidos paisajes
          del Ártico, donde experimentaron la belleza y dureza del hielo y la
          nieve. Presenciaron el espectáculo de las auroras boreales, una danza
          de luces en el cielo que parecía sacada de un sueño. Finalmente, el
          grupo de aventureros llegó a los misteriosos bosques de bambú de Asia.
          Allí, se sumergieron en la tranquilidad de estos bosques ancestrales y
          compartieron momentos de reflexión y paz interior. El viaje a través
          de las maravillas de la naturaleza cambió la vida de estos intrépidos
          exploradores para siempre. Aprendieron a apreciar y valorar la
          importancia de proteger y conservar el mundo natural que los rodea.
          Comprendieron que la naturaleza es un tesoro invaluable y que cada uno
          tiene la responsabilidad de cuidarla y preservarla para las
          generaciones futuras. Y así, con el corazón lleno de gratitud y
          maravilla, los aventureros regresaron a sus hogares, llevando consigo
          los recuerdos inolvidables de un viaje que les enseñó que la verdadera
          riqueza está en la belleza y la magia de la naturaleza
        </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
