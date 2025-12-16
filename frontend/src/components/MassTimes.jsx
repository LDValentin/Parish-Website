// MassTimes.jsx (Improved)
export default function MassTimes() {
  const times = [
    { id: "sunday", day: "Domingo", times: ["7:30 AM - El Corcho", "9:00 AM - Parroquia"] },
    // You can add more days here later
  ];
  const confessions = [
    { id: "office", day: "Horas de oficina - Miercoles", time: "9:00 AM - 11:00 AM" },
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