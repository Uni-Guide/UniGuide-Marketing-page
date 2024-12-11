export default async function handler(req, res) {
  if (req.method === 'POST') {
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzjBuBlf-fdwDmKCpOcFPb6Bvzktd3XEOv-8pOWKC2KyklW4BekN5gSWn_md525xaER/exec';

    try {
      // Log the incoming request body for debugging
      console.log('Request body:', req.body);

      // Send the email data as JSON in the body
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body), // req.body should be the email object
      });

      // Check for non-200 responses from Google Apps Script
      if (!response.ok) {
        throw new Error(`Google Apps Script returned an error: ${response.statusText}`);
      }

      const data = await response.json(); // Parse response from Google Apps Script

      // Set CORS headers in the response
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

      res.status(response.status).json(data);
    } catch (error) {
      // Log the error details
      console.error('Error:', error);

      // Send a more detailed error message to the client
      res.status(500).json({
        status: 'error',
        message: 'Server error: ' + error.message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
