import Propuesta from "../Propuesta";

export default function PropuestasSec() {
  const Propuestas = [
    {
      nombre: "Daniela Zarate",
      propuesta:
        "Pienso que nuestras autoridades deberian de tener mas empatia y compromiso con las personas que han confiado su voto en ellos",
    },
    {
      nombre: "Juan Perez",
      propuesta:
        "Que este problema del alumbrado publico deberia de atenderse de manera rapida para una mejor seguridad de los vecinos y personas de todo el barrio",
    },
    {
      nombre: "Maria Polo",
      propuesta:
        "Pienso que la Municipalidad y todos las autoridades deben de resolver este tema de urgencia en la comunidad para que podamos vivir mas tranquilos y seguros",
    },
    {
      nombre: "Santiago Neyra",
      propuesta:
        "Considero que se le debe de dar solucion rapida y temprana a este problema y sobre todo que las autoridades se tomen enserio su trabajo de cumplir con la seguridad que le prometen a las personas",
    },
  ];
  return (
    <>
      <div className="w-11/12 py-5 mx-auto flex flex-col items-center gap-4 lg:py-10 2xl:py-20 lg:gap-10">
        <h2 className="text-left text-subtitle font-semibold w-full">
          PENSAMIENTOS DE LOS VECINOS
        </h2>
        <div className="w-full flex flex-col lg:w-9/12 2xl:w-6/12 gap-10">
          {Propuestas.map((e) => (
            <Propuesta
              userName={e.nombre}
              userText={e.propuesta}
              key={e.nombre}
            />
          ))}
        </div>
      </div>
    </>
  );
}
