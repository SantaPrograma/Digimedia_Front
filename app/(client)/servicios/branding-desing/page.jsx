// Componentes
import Servicios from '../components/Servicios';
import Contactanos from '../components/Contactanos';
import Description from '../components/Description';
import Main from '../components/Main';
import ModalScroll from '../components/ModalScroll';
import ModalButton from '../components/ModalButton';

// Imágenes
import imgMain from '@/public/servicios/branding/img-main.png';
import iconLeft from '@/public/servicios/branding/icon-left.png';
import iconRight from '@/public/servicios/branding/icon-right.png';
import icon1 from '@/public/servicios/branding/icon1.svg';
import icon2 from '@/public/servicios/branding/icon2.svg';
import icon3 from '@/public/servicios/branding/icon3.svg';
import icon4 from '@/public/servicios/branding/icon4.svg';

// Modal
import fondoModalScroll from '@/public/servicios/branding/modal-scroll/fondo.webp';
import fondoModalButton from '@/public/servicios/branding/modal-button/imagen.webp';

export default function Page() {
  const servicios = [
    {
      title: 'DESARROLLO DE BRIEF',
      text: 'El briefing nos permite entender tu empresa para crear y definir tu marca.',
      icon: icon1,
    },
    {
      title: 'IDENTIDAD VISUAL CORPORATIVA',
      text: 'Creemos identidades visuales únicas que reflejan tu esencia y destacan en el mercado.',
      icon: icon2,
    },
    {
      title: 'NAMING, LOGO Y SLOGAN',
      text: 'Creamos elementos clave que representen tu marca y conecten con tu audiencia.',
      icon: icon3,
    },
    {
      title: 'MANUAL DE MARCA',
      text: 'Definimos las reglas que guiarán todas las estrategias de tu marca.',
      icon: icon4,
    },
  ];

  return (
    <>
      <ModalScroll
        text="¡DISEÑA TU CAMINO AL ÉXITO!"
        fondo={fondoModalScroll}
        title="TU PRIMERA CONSULTA ¡ES GRATIS!"
      />

      <ModalButton
        title="¡DISEÑA TU CAMINO HACIA EL ÉXITO!"
        fondo={fondoModalButton}
        text="¡Haz tu sitio web realidad, es GRATIS!"
      />

      <Main
        title="BRANDING Y DISEÑO"
        subtitle="La Voz y la Cara de tu Marca"
        text="Creamos marcas que hablan, emocionan y conectan. Desde una identidad visual memorable hasta mensajes que resuenan profundamente, hacemos que tu empresa sea tan única como inolvidable."
        image={imgMain}
      />

      <Description
        title="Branding y Diseño"
        text="Juntos, crean una experiencia coherente y memorable para los clientes, construyendo una conexión emocional y diferenciando la marca en el mercado. Mientras que el branding establece la identidad, valores y personalidad de la marca, el diseño se encarga de transmitir estos elementos de manera visual a través de elementos como el logo, los colores, la tipografía y el estilo gráﬁco."
      />

      <Servicios servicios={servicios} />

      <Contactanos
        text="Conecta de manera creativa e innovadora con tu audiencia"
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </>
  );
}
