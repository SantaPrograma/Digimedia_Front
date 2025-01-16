export default function Pregunta({question, answer}) {

    return (
        <>
            <article  className="border-l-4 pl-4 border-solid border-[#5c1787]">
                <h3 className="font-bold text-[25px]">{question}</h3>
                <p className="text-[18px] mt-4">{answer}</p>
            </article>
        </>
    )
}