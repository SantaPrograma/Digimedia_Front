import Image from 'next/image';
import opinion from '@/public/image-home/OPINIONES.jpeg'

function testimonios(){
    return(
        <section className="row stretch mx-0 d-fle p-3x aos-init aos-animate" data-aos="fade-up">
            <div className="col-12 col-md-6 box-opiniones px-2 py-3 px-md-5 py-md-5 text-center text-md-start">
                <span className="text-4">TESTIMONIOS</span>
                <h5 className="text-5">NUESTROS CLIENTES</h5>
                <h1 className="text-6 fw-bold">OPINAN</h1>
            </div>
            <div className="col-12 col-md-6 px-0 d-flex">
                <Image src={opinion} width="100%" height="auto" />
            </div>
        </section>
    );
}

export default testimonios;