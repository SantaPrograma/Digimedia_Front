import React from 'react';

export default function Page() {
    return (
        <div className="sobre-nosotros">
            <div className="contenido">
                <h2 className="titulo">Sobre Nosotros</h2>
                <p className="descripcion">
                    Digimedia es una empresa de marketing digital, que se enfoca en potenciar tu emprendimiento a nivel online. Además, le brinda a tu emprendimiento estrategias que ayuden a cumplir los objetivos de manera eficaz. Somos un grupo de personas comprometidas con el desarrollo de cada marca que nos contacta.
                </p>

                <div className="vision-mision">
                    <div className="vision">
                        <h3 className="subtitulo">NUESTRA <span className="destacado">VISION</span></h3>
                        <p className="texto">
                            Liderar la transformación digital de las PYME en el Perú; estableciendo vínculos sólidos entre nuestros clientes y sus respectivas audiencias.
                        </p>
                    </div>

                    <div className="mision">
                        <h3 className="subtitulo">NUESTRA <span className="destacado">MISION</span></h3>
                        <p className="texto">
                            Ser aliado de los emprendimientos en su posicionamiento digital; mediante la generación de contenido estratégico que garantice el cumplimiento de los objetivos planteados.
                        </p>
                    </div>
                </div>
            </div>

            <div className="imagen">
                <img
                    src='./imagenes-nosotros/infoNosotros.webp'
                    alt="Equipo-trabajando"
                    className="imagen-equipo"
                />
            </div>
        </div>
    );
};
