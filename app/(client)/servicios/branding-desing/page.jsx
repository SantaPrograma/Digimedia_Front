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
