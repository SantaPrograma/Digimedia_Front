
import React from 'react';
import Image from 'next/image';
import './services.css'
import icono1 from '@/public/image-home/icon1.svg'
import icono2 from '@/public/image-home/icon2.svg'
import icono3 from '@/public/image-home/icon3.svg'
import icono4 from '@/public/image-home/icon4.svg'

function services(){
    return(
        <section id="services">
            <div className="services-main">
                <div className="services-text">
                    <h2>NUESTROS SERVICIOS</h2>
                    <p>Digimedia es una empresa de marketing digital, que se enfoca en potenciar tu empredimiento a nivel online. Ademas, le brinda a tu empredimiento estrategias que ayuden a cumplir los objetivos de manera eficaz. Somos un grupo de personas comprometidas con el desarollo de cada marca que nos contacta.</p>
                </div>
                <div className="services-4">
                    <div className="services">
                        <div className="service">
                            <Image src={icono1} alt="" />
                            <h3>Diseño y Desarrollo Web</h3>
                            <p>"Creamos sitios atractivos y funcionales que represetan tu marca"</p>
                        </div>
                        <div className="service">
                            <Image src={icono2} alt="" />
                            <h3>Gestión de Redes Sociales</h3>
                            <p>"Aumenta tu presencia online y conectamos con tu audiencia"</p>
                        </div>
                        <div className="service">
                            <Image src={icono3} alt="" />
                            <h3>Branding y Diseño</h3>
                            <p>"Construimos una identidad visual fuerte y memorable"</p>
                        </div>
                        <div className="service">
                            <Image src={icono4} alt="" />
                            <h3>Gestión de Redes Sociales</h3>
                            <p>"Aumenta tu presencia en redes sociales y con marketing digital""</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default services;
