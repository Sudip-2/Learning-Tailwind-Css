const checkpersmission = () => {
    if(!('serviceWorker' in navigator)){
        throw new Error("No support for service worker")
    }
}

const registersw = async () => {
    const registration = await navigator.serviceWorker.register('sw.js')
    return registration
}

const requestNotification = async () => {
    const permission = await Notification.requestPermission()
    if(permission !== 'granted'){
        throw new Error("Notification not granted")
    }
}
const main = async () => {
    checkpersmission()
    await requestNotification()
    await registersw()
}