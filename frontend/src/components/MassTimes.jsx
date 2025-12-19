// MassTimes.jsx (Improved)
export default function MassTimes() {
  const times = [
    { id: "sunday", day: "Domingo", times: ["7:30 AM - Capilla San José (El Corcho)", "9:00 AM - Parroquia Ntra. Señora de los Angeles"] },
    { id: "tuesday" , day: "Primer y Tercer Martes", times: ["5:30 PM - Capilla Ntra. Señora Monserrate (Santa Isabel)"] },
    { id: "Jueves", day: "Jueves", times: ["7:00 PM -  Parroquia Ntra. Señora de los Angeles"] },
    { id: "saturday", day: "Sábados", times: ["4:00 PM - Capilla Sagrada Familia (Las Vegas)"] },
    // You can add more days here later
  ];
  const confessions = [
    { id: "office", day: "Horas de oficina - Miercoles y Jueves ", time: "9:00 AM - 12:00 PM\n Dirección Espiritual por cita previa" },
    { id: "sunday", day: "Domingos", time: "30 Minutos antes de misa" },
  ];

  return (
    // Added ID here so the header link works
    <section id="mass-hours" className="mass-times-container"> 
      
      <div className="mass-schedule">
        <h2>Horario de Misas</h2>
        {times.map((entry) => (
          // Use a key unique to the data, like entry.id
          <div key={entry.id} className="mass-day"> 
            <h3>{entry.day}</h3>
            <ul>
              {entry.times.map((time, idx) => (
                <li key={idx}>{time}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr /> {/* Visual separator for clarity */}

      <div className="confession-schedule"> 
        <h2>Horario de Confesiones</h2>
        {confessions.map((entry) => (
          <div key={entry.id} className="confession-time">
            <h3>{entry.day}</h3>
            <p>{entry.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}