function Home() {
    return (
      <div>
        <div className="hero">
          <h1>Welcome to Davao Central College</h1>
          <img
    src="https://dcc.edu.ph/wp-content/uploads/2023/04/DCC-WEB-main-and-bed-1536x480.jpg"
    alt="Davao Central College"
    style={{ width: '100%', height: 'auto', display: 'block' }}
  />
        </div>

  
          <div className="section">
            <h2>Our Programs</h2>
            <div className="program-grid">
              {[
                {
                  name: "Basic Education Department",
                  img: "https://dcc.edu.ph/wp-content/uploads/2021/04/BED-WEB.png"
                },
                {
                  name: "College of Business Administration",
                  img: "https://dcc.edu.ph/wp-content/uploads/2021/04/BA-WEB-300x300.png"
                },
                {
                  name: "College of Education and Liberal Arts",
                  img: "https://dcc.edu.ph/wp-content/uploads/2021/04/CELA-WEB.png"
                },
                {
                  name: "Criminal Justice Education",
                  img: "https://dcc.edu.ph/wp-content/uploads/2021/04/CJE-WEB-300x300.png"
                },
                {
                  name: "Hospitality Management Education",
                  img: "https://dcc.edu.ph/wp-content/uploads/2021/04/HM-LOGO-revised-2.0-300x300.png"
                },
                {
                  name: "Information Technology Education",
                  img: "https://dcc.edu.ph/wp-content/uploads/2021/04/ITE-WEB-300x300.png"
                },
              ].map((program, index) => (
                <div className="program-card" key={index}>
                  <img src={program.img} alt={program.name} />
                  <h4>{program.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
          <h2>DCC</h2>
          <img 
  src="https://dcc.edu.ph/wp-content/uploads/2021/10/VMG.png" 
  alt="Davao Central College Logo" 
  style={{ display: 'block', margin: '0 auto', maxWidth: '100%', marginBottom: '10px' }} 
/>
</div>
      </div>
    );
  }
  
  export default Home;
  