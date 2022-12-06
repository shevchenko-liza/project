import { FC, FormEvent, useState } from "react"
import { AccountForm } from "../Form/AccountForm"
import { AddressForm } from "./AddressForm"
import { MultistepForm } from "./MultistepForm"
import { UserForm } from "./UserForm"
import classes from './styles.module.scss'

type FormData = {
    firstName: string
    lastName: string
    age: string
    street: string
    city: string
    state: string
    zip: string
    email: string
    password: string
}

const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
}

export const App = () => {
    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        MultistepForm([
            <UserForm {...data} updateFields={updateFields} />,
            <AddressForm {...data} updateFields={updateFields} />,
            <AccountForm {...data} updateFields={updateFields} />,
        ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        alert("Account Creation")
    }
    
    return (
        <div className={classes.wrapper} >
            <form onSubmit={onSubmit}>
                <div className={classes.step}>
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div className={classes.buttons}>
                    {!isFirstStep && (
                        <button className={classes.back} type="button" onClick={back}> back</button>
                    )}
                    <button className={classes.next} type="submit">{isLastStep ? "Finish" : "next"}</button>
                </div>
            </form>
        </div>
    )
}
