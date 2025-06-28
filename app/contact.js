export default function contact() {
  // handler must be defined in scope
  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    // serialize form fields to an object
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {    // ← your endpoint here
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('✔️ Message sent!');
        form.reset();
      } else {
        const text = await res.text();
        console.warn('Contact form error:', text);
        alert('⚠️ Submission failed.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('❌ Error sending message.');
    }
  };
}