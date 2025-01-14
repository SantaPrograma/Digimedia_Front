export default function Description({ title, text }) {
  return (
    <section className="bg-[#973cd1] text-white p-4">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-justify">{text}</p>
    </section>
  );
}
