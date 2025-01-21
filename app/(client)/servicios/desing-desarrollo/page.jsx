// Componentes
import Servicios from '../components/Servicios';
import Contactanos from '../components/Contactanos';
import Description from '../components/Description';
import Main from '../components/Main';
import ModalScroll from '../components/ModalScroll';
import ModalButton from '../components/ModalButton';

// Imágenes
import imgMain from '@/public/servicios/desarrollo/img-main.png';
import iconLeft from '@/public/servicios/desarrollo/icon-left.svg';
import iconRight from '@/public/servicios/desarrollo/icon-right.svg';
import icon1 from '@/public/servicios/desarrollo/icon1.svg';
import icon2 from '@/public/servicios/desarrollo/icon2.svg';
import icon3 from '@/public/servicios/desarrollo/icon3.svg';
import icon4 from '@/public/servicios/desarrollo/icon4.svg';

// Modal
import fondoModalScroll from '@/public/servicios/desarrollo/modal-scroll/fondo.webp';
import fondoModalButton from '@/public/servicios/desarrollo/modal-button/imagen.webp';

export default function Page() {
  const servicios = [
    {
      title: 'DISEÑOS UX Y UI',
      text: 'Creamos experiencias digitales atractivas, intuitivas y centradas en tus usuarios.',
      icon: icon1,
    },
    {
      title: 'DESARROLLO WEB',
      text: 'Construimos sitios web funcionales, modernos y a la medida de tus necesidades.',
      icon: icon2,
    },
    {
      title: 'DOMINIO Y HOSTING',
      text: 'Aseguramos tu presencia en línea con dominios y hosting confiables.',
      icon: icon3,
    },
    {
      title: 'SEO',
      text: 'Impulsamos tu sitio al tope de los resultados de búsqueda con estrategias efectivas.',
      icon: icon4,
    },
  ];

  return (
    <>
      <ModalScroll
        text="¡DESTACA TU NEGOCIO!"
        fondo={fondoModalScroll}
        title="OBTÉN UNA ASESORÍA ¡GRATIS!"
      />

      <ModalButton
        title="Lleva tu negocio al siguiente nivel online"
        fondo={fondoModalButton}
        text="¡Haz tu sitio web realidad, es GRATIS!"
      />

      <Main
        title="DISEÑO Y DESARROLLO WEB"
        subtitle="¡Transforma tu presencia online!"
        text="Ofrecemos diseño y desarrollo web para ayudar a tu negocio a destacar en línea. Creamos sitios atractivos y funcionales que reflejan tu marca y mejoran la experiencia del usuario."
        image={imgMain}
      />

      <Description
        title="Diseño y Desarrollo Web"
        text="Consiste en la habilidad de presentar contenido de manera organizada en una página web con el objetivo de brindar una experiencia óptima al usuario. El diseño se centra en la estética visual, mientras que el desarrollo se dedica a la construcción y programación del sitio web. Ambos aspectos colaboran estrecha- mente para asegurar el éxito del sitio web."
      />

      <Servicios servicios={servicios} />

      <Contactanos
        text="Consolida tu presencia web, diseña con nosotros tu página web"
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </>
  );
}
