const form = document.getElementById('registerForm');
const message = document.getElementById('registerMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  try {
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (!response.ok) {
      message.textContent = data.message || 'Något gick fel vid registrering';
      return;
    }

    message.textContent = 'Kontot skapades, du kan nu logga in';
    message.style.color = 'green';

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);

  } catch (err) {
    message.textContent = 'Fel vid registrering';
    console.error(err);
  }
});
