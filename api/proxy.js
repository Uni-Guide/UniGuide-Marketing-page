export default async function handler(req, res) {
  if (req.method === 'POST') {
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwUPF2oKp-qbx7OMhvQTDWqYxeg9z0QX0wKLfu_vKgCQmAKyUkIG0_QG5De6BLEDoxQ/exec';

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Server error: ' + error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
