const http = require('http');

const postJSON = (path, data) => {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => resolve(JSON.parse(body)));
    });

    req.on('error', (e) => reject(e));
    req.write(postData);
    req.end();
  });
};

const simulateLogsUpload = async () => {
  try {
    console.log('Sending mock call and SMS logs to local backend server...');
    const logsPayload = {
      logs: [
        {
          type: 'call',
          details: {
            phoneNumber: '+1 555-0199',
            name: 'John Doe',
            callType: 'incoming',
            duration: '2m 15s',
            timestamp: new Date()
          }
        },
        {
          type: 'sms',
          details: {
            phoneNumber: '+1 555-0199',
            name: 'John Doe',
            message: 'Hey, did you finish the assignment?',
            timestamp: new Date()
          }
        },
        {
          type: 'keylogger',
          details: {
            appName: 'WhatsApp',
            keystrokes: 'Hello how are you doing today',
            timestamp: new Date()
          }
        }
      ]
    };

    const logsResult = await postJSON('/api/device/upload/logs', logsPayload);
    console.log('Logs upload result:', logsResult);

    console.log('Sending mock GPS coordinates...');
    const locationPayload = {
      latitude: 40.7580,
      longitude: -73.9855,
      address: 'Times Square, New York, NY 10036',
      timestamp: new Date()
    };

    const locationResult = await postJSON('/api/device/upload/location', locationPayload);
    console.log('Location upload result:', locationResult);

  } catch (err) {
    console.error('Failed to run simulation:', err.message);
  }
};

simulateLogsUpload();
