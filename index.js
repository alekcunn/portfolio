const express = require('express')
const app = express()


app.use(express.static('.//'))

app.listen(80, () => { console.log("[debug server] listening")})