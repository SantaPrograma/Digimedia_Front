import Image from 'next/image';
import './testimonios.css'
import opinion from '@/public/image-home/OPINIONES.jpeg'

function testimonios(){
    return(
        <section id='testimonios'>
            <div className="testimonios-main">
                <div className="testimonios-child testimonios-text">
                    <h3>Testimonios</h3>
                    <h3>NUESTROS CLIENTES <span>OPINAN</span></h3>
                </div>
                <div className="testimonios-child testimonios-img">
                    <Image src={opinion} alt="" />
                </div>
            </div>
        </section>
    );
}

export default testimonios;