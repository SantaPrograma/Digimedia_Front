import React from 'react';
import Image from 'next/image';
import logo from '@/public/Img-nosotros/infoNosotros.webp';
import logo1 from '@/public/Img-nosotros/NOSOTROS_1680_1050.webp';

const Nosotros = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[400px] overflow-hidden">
                {/* Background Image */}
                <Image
                    src={logo1}
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                    priority
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#7B22B3] bg-opacity-50"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-8 h-8 bg-white rounded-full opacity-80"></div>
                            <div className="w-8 h-8 bg-white rounded-full -ml-2 opacity-80"></div>
                        </div>
                        <h1 className="text-5xl font-bold text-white tracking-wider shadow-lg">
                            ¿QUIÉNES SOMOS?
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Sobre Nosotros */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-1 bg-purple-600"></div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Sobre Nosotros
                        </h2>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
                        Digimedia es una empresa de marketing digital, que se enfoca en potenciar tu emprendimiento a nivel online. Además, le brinda a tu emprendimiento estrategias que ayuden a cumplir los objetivos de manera eficaz. Somos un grupo de personas comprometidas con el desarrollo de cada marca que nos contacta.
                    </p>
                </div>

                {/* Vision y Mision */}
                <div className="relative grid md:grid-cols-2 gap-16 mb-20">
                    {/* Vision */}
                    <div className="bg-white">
                        <h3 className="text-2xl font-bold mb-6">
                            NUESTRA <span className="text-purple-600">VISION</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Liderar la transformación digital de las PYME en el Perú; estableciendo vínculos sólidos entre nuestros clientes y sus respectivas audiencias.
                        </p>
                    </div>

                    {/* Vertical Line */}
                    <div className="hidden md:block w-px bg-purple-600 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2" />

                    {/* Mision */}
                    <div className="bg-white">
                        <h3 className="text-2xl font-bold mb-6">
                            NUESTRA <span className="text-purple-600">MISION</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ser aliado de los emprendimientos en su posicionamiento digital; mediante la generación de contenido estratégico que garantice el cumplimiento de los objetivos planteados.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <Image
                        src={logo}
                        alt="Información adicional"
                        className="w-full max-w-3xl h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Nosotros;