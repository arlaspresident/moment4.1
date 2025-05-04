const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://moment4-sw08.onrender.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const text = await response.text();
    console.log('Rått svar från API:', text);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      message.textContent = 'Kunde inte tolka svar från servern.';
      return;
    }

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