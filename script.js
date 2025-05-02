const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (!response.ok) {
      message.textContent = data.message || 'Något gick fel';
      return;
    }

    localStorage.setItem('token', data.token);
    message.textContent = 'Inloggning lyckades';

    setTimeout(() => {
      window.location.href = 'protected.html';
    }, 1000);

  } catch (error) {
    message.textContent = 'Fel vid inloggning';
    console.error(error);
  }
});
