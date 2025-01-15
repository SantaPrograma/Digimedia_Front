// Componentes
import Servicios from '../components/Servicios';
import Contactanos from '../components/Contactanos';
import Description from '../components/Description';
import Main from '../components/Main';

// Imágenes
import imgMain from '@/public/servicios/marketing/img-main.png';
import iconLeft from '@/public/servicios/marketing/icon-left.svg';
import iconRight from '@/public/servicios/marketing/icon-right.svg';
import icon1 from '@/public/servicios/marketing/icon1.svg';
import icon2 from '@/public/servicios/marketing/icon2.svg';
import icon3 from '@/public/servicios/marketing/icon3.svg';
import icon4 from '@/public/servicios/marketing/icon4.svg';

export default function Page() {
  const servicios = [
    {
      title: 'ANÁLISIS Y BENCHMARKING',
      text: 'Evaluamos tu marca frente a la competencia para identificar oportunidades de mejora y crear estrategias más efectivas.',
      icon: icon1,
    },
    {
      title: 'PLANIFICACIÓN ESTRATÉGICA',
      text: 'Aquí se diseñan estrategias personalizadas con objetivos claros, segmentación precisa y tácticas eficaces para alcanzar tus metas de negocio.',
      icon: icon2,
    },
    {
      title: 'PUBLICIDAD DIGITAL',
      text: 'Desarrollamos campañas digitales de alto impacto para aumentar la visibilidad, captar audiencias y maximizar conversiones.',
      icon: icon3,
    },
    {
      title: 'MONITOREO Y REPORTING',
      text: 'Implementamos un monitoreo continuo de tus campañas, recopilando y analizando métricas clave. Presentamos informes detallados que facilitan la toma de decisiones basadas en datos.',
      icon: icon4,
    },
  ];

  return (
    <>
      <Main
        title="MARKETING Y GESTIÓN DIGITAL"
        subtitle="¡Impulsa tu marca al éxito digital!"
        text="Creamos campañas que no solo se ven, sino que se sienten. Potenciamos tu presencia online con tácticas personalizadas, llevándote al siguiente nivel con resultados medibles y un impacto real. Tu éxito digital comienza aquí."
        image={imgMain}
      />

      <Description
        title="Marketing y Gestión Digital"
        text="El marketing y la gestión digital son tus aliados para potenciar el éxito de tu marca en el mundo digital. Te ayudarán a destacar en línea, alcanzar a una audiencia más amplia, captar clientes potenciales y fortalecer la relación con tus clientes. Todo esto se traduce en un impulso signiﬁcativo para aumentar las ventas y el crecimiento de tu negocio."
      />

      <Servicios servicios={servicios} />

      <Contactanos
        text="Aumenta tus ventas con marketing digital"
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </>
  );
}
