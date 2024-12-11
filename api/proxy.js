// api/proxy.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Google Apps Script Web App URL
    const apiUrl = 'https://script.google.com/macros/s/AKfycbyV_xA16yTmIT1z_3Re_h033_DMerd6PciSrXL-aQZAgsKT2W19KbzcUud-CoJGapEJ/exec';

    try {
      // Send the email to the Google Apps Script Web App
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        res.status(200).json({ status: 'success', message: data.message });
      } else {
        res.status(400).json({ status: 'error', message: data.message });
      }
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Failed to submit email. Please try again later.' });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}
