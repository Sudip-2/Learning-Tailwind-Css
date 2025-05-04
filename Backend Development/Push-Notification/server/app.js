import express from 'express'
import cors from 'cors'
import webpush from 'web-push'
const app = express()
const port = 3000

app.use(cors());
app.use(express.json())

const apiKeys = {
    publicKey: "BOsQUjJ2eCUPczcMNKlkDDA3TsGFdgFkZCtaiXMciTqRru_gUpY1pgzf4sLTIuqhkGZflAckqjcNbSCC6Ur_SSI",
    privateKey: "XdwPkTiKKav8u5M9Ln5SmOxGOmlA_FXWRG0CPgu_3i8"
}

webpush.setVapidDetails(
    'mailto:p452570@gmail.com',
    apiKeys.publicKey,
    apiKeys.privateKey
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const subDatabse = [];


app.post("/save-subscription", (req, res) => {
    subDatabse.push(req.body);
    res.json({ status: "Success", message: "Subscription saved!" })
})

app.get("/send-notification", (req, res) => {
    webpush.sendNotification(subDatabse[0], "Hello world");
    res.json({ "status": "Success", "message": "Message sent to push service" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})