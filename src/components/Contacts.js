"use client"
import { useActionState } from "react"
import { sendEmail } from "@/actions/contacts.action"

const Contacts = () => {
    const [state, formAction] = useActionState(sendEmail, {
        success: false,
        message: ""
    });

    return (
        <>
            <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "30px" }}>
                Contacts</h1>

            <div className="contacts">
                <div>
                    <p>Email: <u>murdzhevpetar@gmail.com</u></p>
                    <p>Phone number: +359877925255</p>
                </div>

                <form action={formAction}>
                    <label>Let's keep in touch!</label>
                    <input name="fullname" type="text" placeholder="Enter your fullname"></input>
                    <input name="email" type="email" placeholder="Enter your email"></input>
                    <input name="subject" type="text" placeholder="Enter subject"></input>
                    <textarea name="message" placeholder="Let me know what you have in mind?"></textarea>
                    {!state.success && state.message && <p>{state.message}</p>}
                    {state.success && <p>{state.message}</p>}
                    <button>Send</button>
                </form>
            </div>
        </>
    )
}

export default Contacts