import React from "react";
import Link from "next/link";

export default function banner() {
    return(
        <section className="hero-index">
            <img src="" alt="" />
            <div className="hero-index-div px-5 py-3 py-lg-1">
                <h1 className="text-light text-1">¿No sabes por donde empezar?</h1>
                <span className="text-2">Impulsa tu marca al siguiente nivel <br /> con nosotros</span>
            </div>
            <Link href="/contactanos" class="btn-contactos text-light">¡Contactanos!</Link>
        </section>
    );
}