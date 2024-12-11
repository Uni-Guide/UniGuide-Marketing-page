document.getElementById('newsletterForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('emailInput').value;
  const proxyURL = '/api/proxy'; // Proxy endpoint hosted on Vercel

  const messageEl = document.getElementById('message');
  messageEl.textContent = 'Submitting...';

  try {
    const response = await fetch(proxyURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (result.status === 'success') {
      messageEl.textContent = 'Subscription successful!';
      messageEl.style.color = 'green';
    } else {
      messageEl.textContent = 'Error: ' + result.message;
      messageEl.style.color = 'red';
    }
  } catch (error) {
    messageEl.textContent = 'An error occurred. Please try again.';
    messageEl.style.color = 'red';
  }
});
