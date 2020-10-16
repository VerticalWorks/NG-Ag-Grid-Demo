const express = require('express');
const app = express();
const PORT = 4242;

app.get('/', (req: any,res: { send: (arg0: string) => any; }) => res.send('Bowman\'s Express Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Running at https://localhost:${PORT}`);
});


