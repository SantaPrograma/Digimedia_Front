// Componentes
import Servicios from '../components/Servicios';
import Contactanos from '../components/Contactanos';
import Description from '../components/Description';
import Main from '../components/Main';

// Imágenes
import imgMain from '@/public/servicios/desarrollo/img-main.png';
import iconLeft from '@/public/servicios/desarrollo/icon-left.svg';
import iconRight from '@/public/servicios/desarrollo/icon-right.svg';
import icon1 from '@/public/servicios/desarrollo/icon1.svg';
import icon2 from '@/public/servicios/desarrollo/icon2.svg';
import icon3 from '@/public/servicios/desarrollo/icon3.svg';
import icon4 from '@/public/servicios/desarrollo/icon4.svg';

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
      <Main
        title="DISEÑO Y DESARROLLO WEB"
        subtitle="¡Transforma tu presencia online!"
        text="Ofrecemos diseño y desarrollo web para ayudar a tu negocio a destacar en línea. Creamos sitios atractivos y funcionales que reflejan tu marca y mejoran la experiencia del usuario."
        image={imgMain}
      />

      <Description
        title="Diseño y Desarrollo Web"
        text="Ofrecemos diseño y desarrollo web para ayudar a tu negocio a destacar en línea. Creamos sitios atractivos y funcionales que reflejan tu marca y mejoran la experiencia del usuario."
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
