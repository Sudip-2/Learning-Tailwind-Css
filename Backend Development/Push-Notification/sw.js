// Public Key:
// BOsQUjJ2eCUPczcMNKlkDDA3TsGFdgFkZCtaiXMciTqRru_gUpY1pgzf4sLTIuqhkGZflAckqjcNbSCC6Ur_SSI

// Private Key:
// XdwPkTiKKav8u5M9Ln5SmOxGOmlA_FXWRG0CPgu_3i8
const urlBase64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

const savesubscription = async (subscription) => {
    const response = await fetch('http://localhost:3000/save-subscription',{
        method:'post',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(subscription)
    })
    return response.json()
}


self.addEventListener('activate',async () => {
    const subscription = await self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array("BOsQUjJ2eCUPczcMNKlkDDA3TsGFdgFkZCtaiXMciTqRru_gUpY1pgzf4sLTIuqhkGZflAckqjcNbSCC6Ur_SSI")
    })
    const response = await savesubscription(subscription)
    console.log(response)
})

self.addEventListener("push", e => {
    self.registration.showNotification("Wohoo!!", { body: e.data.text() })
})