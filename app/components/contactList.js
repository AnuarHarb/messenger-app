export default function ContactList({ setActiveUser }) {
  return (
    <section>
      <h2>Contact List</h2>
      <div id="contact-card" onClick={() => setActiveUser("Luis")}>
        <h2>Luis</h2>
        <p>+57 3005545201</p>
      </div>
      <div id="contact-card" onClick={() => setActiveUser("Sebas")}>
        <h2>Sebas</h2>
        <p>+57 3005545201</p>
      </div>
      <div id="contact-card" onClick={() => setActiveUser("Ale")}>
        <h2>Ale</h2>
        <p>+57 3005545201</p>
      </div>
      <div id="contact-card" onClick={() => setActiveUser("Gabriel")}>
        <h2>Gabriel</h2>
        <p>+57 3005545201</p>
      </div>
    </section>
  );
}
