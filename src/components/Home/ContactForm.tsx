import './_ContactForm.scss';
const placeHolder = '>_'

const ContactForm = () => {
    return (
        <div className="ContactForm">
            <h4 className="ContactForm__title">Send Me a Message</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder={placeHolder} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder={placeHolder} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="message" id="message" rows={6} placeholder={placeHolder} ></textarea>
                </div>
                <div className="buttonArea">
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;