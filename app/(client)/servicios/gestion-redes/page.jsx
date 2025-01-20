// Componentes
import Servicios from '../components/Servicios';
import Contactanos from '../components/Contactanos';
import Description from '../components/Description';
import Main from '../components/Main';

// Imágenes
import imgMain from '@/public/servicios/gestion/img-main.png';
import iconLeft from '@/public/servicios/gestion/icon-left.svg';
import iconRight from '@/public/servicios/gestion/icon-right.svg';
import icon1 from '@/public/servicios/gestion/icon1.svg';
import icon2 from '@/public/servicios/gestion/icon2.svg';
import icon3 from '@/public/servicios/gestion/icon3.svg';
import icon4 from '@/public/servicios/gestion/icon4.svg';

export default function Page() {
  const servicios = [
    {
      title: 'PLANIFICACIÓN Y CRONOGRAMA',
      text: 'Creamos estrategias de redes sociales alineadas con tus objetivos para maximizar el impacto de tu marca.',
      icon: icon1,
    },
    {
      title: 'PRODUCCIÓN DE PAUTAS',
      text: 'Desarrollamos pautas claras para el contenido y la interacción en redes sociales, alineadas con tu marca.',
      icon: icon2,
    },
    {
      title: 'DISEÑO DE PAUTAS',
      text: 'Creamos documentos visuales que definen la identidad, voz y tono de tu marca en redes sociales.',
      icon: icon3,
    },
    {
      title: 'DISEÑO UX Y UI',
      text: 'Diseñamos experiencias digitales centradas en el usuario, combinando estrategias de UX  con interfaces visualmente atractivas y funcionales (UI).',
      icon: icon4,
    },
  ];

  return (
    <>
      <Main
        title="GESTIÓN DE REDES SOCIALES"
        subtitle="¡Gestionamos tu éxito en redes sociales!"
        text="Te ayudamos a construir una voz única para tu marca, interactúa de manera auténtica con tu audiencia y transforma tus seguidores en clientes fieles."
        image={imgMain}
      />

      <Description
        title="Gestión de Redes Sociales"
        text="La gestión de redes sociales es el proceso de administrar y optimizar la presencia de una marca en plataformas como Facebook, Instagram, Twitter, etc. Ayuda a tu marca a crear una voz consistente, interactuar con tu audiencia, aumentar el compromiso y la visibilidad, así como impulsar el tráﬁco y las conversiones hacia tu negocio."
      />

      <Servicios servicios={servicios} />

      <Contactanos
        text="Deja que tus redes estén en otro nivel"
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </>
  );
}
