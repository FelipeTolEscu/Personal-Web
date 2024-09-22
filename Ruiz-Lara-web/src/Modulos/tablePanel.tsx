// CSS Import
import "../App.css"; // Asegúrate de que los estilos básicos estén aquí

// Import's

function WeddingInvitation() {
  // Datos útiles
  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7592.669255603838!2d-3.599956823697491!3d37.16501474704963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fca39dfd1317%3A0x4ee2978ee9d4ac76!2sHotel%20Saray%20Granada!5e1!3m2!1ses!2ses!4v1727003558817!5m2!1ses!2ses";
  const weddingDate = "16/11/2024"; // Cambia la fecha aquí
  const weddingTime = "19:30"; // Cambia la hora aquí

  return (
    <div className="flex justify-center items-center p-8 bg-white">
      <div className="max-w-6xl bg-gray-100 p-4 rounded-2xl shadow-xl text-center">
        {/* Título */}
        <h1 className="text-4xl font-serif mb-8 p-9 text-gray-800">
          ¡Estás cordialmente invitado a la boda de Isabel y Fernando!
        </h1>

        {/* Mensaje Principal */}
        <p className="text-lg text-gray-700 mb-8">
          Con enorme alegría, Isabel y Fernando se complacen en invitarles a
          celebrar su unión en matrimonio. Acompáñanos a compartir este momento
          lleno de amor y felicidad en un lugar que atesora la historia y la
          belleza de Granada.
        </p>

        {/* Caja de la invitación */}
        <div className="max-w-md mx-auto bg-white p-12 rounded-lg shadow-lg border border-gray-300 mb-10">
          {/* Nombres de los novios */}
          <p className="text-3xl font-serif text-gray-800 text-center pt-5">
            Isabel & Fernando
            <hr />
          </p>

          {/* Datos útiles */}
          <div className="mt-6 mb-6">
            <h2 className="text-xl  font-serif font-semibold mb-4 text-gray-800 text-center">
             - Detalles del Evento
            </h2>

            {/* Fecha y Hora */}
            <p className="text-lg text-gray-800 mb-4 text-center">
              Fecha:{" "}
              <span className="font-semibold text-gray-800">{weddingDate}</span>
            </p>
            <p className="text-lg text-gray-800 mb-8 text-center">
              Hora:{" "}
              <span className="font-semibold text-gray-800">{weddingTime}</span>
            </p>
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
              - Ubicación:
            </h3>
            <p className="text-gray-800 mb-4">Hotel Saray de Granada</p>
          </div>
        </div>

        {/* Ubicación con mapa */}

        <div className="video-container mb-8">
          <iframe
            src={googleMapsUrl}
            title="Ubicación del evento"
            className="w-full h-80"
            allowFullScreen
          ></iframe>
        </div>

        {/* Información adicional */}
        <p className="text-gray-800 mt-8">
          Para más información o detalles adicionales, no dudes en contactarnos.
          ¡Esperamos verte y compartir este día tan especial contigo!
          <br />
          <b>Tel: +34 640 37 93 41</b>
        </p>
      </div>
    </div>
  );
}

// Componente Principal
function TablePanel() {
  return (
    <>
      <section className="whiteSection flex justify-center items-center">
        <div className="container p-4 sm:p-10 py-8 w-full">
          <WeddingInvitation />
        </div>
      </section>
    </>
  );
}

export default TablePanel;
