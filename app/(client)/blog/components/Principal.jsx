import Image from "next/image"


export default function Enlaces() {
    return (
        <>

            <div>
                <Image
                    src="https://example.com/mi-imagen.jpg"
                    alt="Descripción de la imagen"
                    width={500}
                    height={300}
                />
            </div>

        </>
    )
}

