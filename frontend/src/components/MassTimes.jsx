export default function MassTimes() {
  const times = [
    { day: "Domingo", times: ["7:30 AM - El Corcho","9:00 AM - Parroquia"] },
  ];
  const confessions = [
    { day: "Horas de oficina - Miercoles", time: "9:00 AM - 11:00 AM" },
    { day: "Domingos", time: "30 Minutos antes de misa" },
  ];

    return (
      <div>
        <div>
          <h2>Mass Schedule</h2>
          {times.map((entry, index) => (
            <div key={index}>
              <h3>{entry.day}</h3>
              <ul>
                {entry.times.map((time, idx) => (
                  <li key={idx}>{time}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div> 
          <h2>Confession Schedule</h2>
          {confessions.map((entry, index) => (
            <div key={index}>
              <h3>{entry.day}</h3>
              <p>{entry.time}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
