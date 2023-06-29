import Propuesta from "../Propuesta";

export default function PropuestasSec() {
  const Propuestas = [
    {
      nombre: "Ana López",
      propuesta:
        "Implementar un programa de mantenimiento regular para garantizar el correcto funcionamiento de las luces en las calles principales y zonas más concurridas.",
    },
    {
      nombre: "Carlos Ramírez",
      propuesta:
        "Realizar un estudio de iluminación para identificar las áreas con mayor necesidad de luz y priorizar la instalación de nuevas luminarias en esos lugares.",
    },
    {
      nombre: "Laura González",
      propuesta:
        "Establecer alianzas con empresas y organizaciones locales para obtener fondos adicionales y así financiar la mejora del alumbrado público en toda la comunidad.",
    },
  ];
  return (
    <>
      <div className="w-11/12 py-5 mx-auto flex flex-col items-center gap-4 lg:py-10 2xl:py-20 lg:gap-10">
        <h2 className="text-left text-subtitle font-semibold w-full">
          PROPUESTAS DE LOS VECINOS
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
