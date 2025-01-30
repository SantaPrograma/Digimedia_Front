import { useState } from "react";

export default function Modal_usuario({ isVisible, onclose, update, id }) {

    if (!isVisible) return null

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(false);

    function changePass() {
        
    }

    function changeName() {

    }


    return (

        <section className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-md flex justify-center items-center px-4">
            <div className="max-w-[400px] w-[400px] bg-white rounded-xl">
                <form className="p-6 flex flex-col gap-6 ">

                    <legend className="font-bold text-lg">Usuarios</legend>

                    <fieldset className="flex flex-col gap-3">
                        <label className="font-medium text-md" htmlFor="name">Nombre</label>
                        <input className="border-solid border-gray-300 border-[0.5px] py-2 px-4 outline-none" type="text" id="name" />
                    </fieldset>

                    <fieldset className="flex flex-col gap-3">
                        <label className="font-medium text-md" htmlFor="email">Correo</label>
                        <input className="border-solid border-gray-300 border-[0.5px] py-2 px-4 outline-none" type="text" id="email" />
                    </fieldset>

                    <fieldset className="flex flex-col w-full gap-3">
                        <label className="font-medium text-md" htmlFor="password">Cambiar Contraseña</label>
                        <div className="flex border-solid border-gray-300 w-full border-[0.5px]">
                            <input className="py-2 px-4 flex-1 outline-none " type="password" id="password" />
                            <button className="border-solid border-l-gray-300 py-2 px-4 border-[0.5px]" onClick={changePass} type="button" hidden={!update}>Cambiar</button>
                        </div>
                    </fieldset>

                    <div className="flex justify-around gap-2 mt-2 ">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-bold" type="button" onClick={changeName}>Aceptar</button>
                        <button className="bg-red-500 text-white py-2 px-4 rounded-lg font-bold" onClick={onclose}>Cancelar</button>
                    </div>

                </form>
            </div>
        </section>

    )
}
