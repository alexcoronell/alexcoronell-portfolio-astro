import { type ContactMessage } from "../types/ContactMessage";

const urlGooglesheet =
    "https://script.google.com/macros/s/AKfycbx2elPpcMyQ4jjTiKIdNn4mwNnuzVTJTljD6870lFewqxGO8Y-p1Ww8VJhDN7MTQ4HfUw/exec";

const sendContactUsMessage = async (contactMessage: ContactMessage) => {
    const formData = new FormData()
    formData.append("firstname", contactMessage.name);
    formData.append("email", contactMessage.email);
    formData.append("message", contactMessage.message);
    return await fetch(urlGooglesheet, { method: "POST", body: formData })
}

export default sendContactUsMessage;