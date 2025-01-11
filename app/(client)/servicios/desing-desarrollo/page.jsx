// Componentes
import Main from '../components/Main';

// Imágenes
import imgMain from '@/public/servicios/desarrollo/img-main.png';

export default function Page() {
  return (
    <>
      <Main
        title="DISEÑO Y DESARROLLO WEB"
        subtitle="¡Transforma tu presencia online!"
        text="Ofrecemos diseño y desarrollo web para ayudar a tu negocio a destacar en línea. Creamos sitios atractivos y funcionales que reflejan tu marca y mejoran la experiencia del usuario."
        image={imgMain}
      />
    </>
  );
}
