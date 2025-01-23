import { DetailedHTMLProps, InputHTMLAttributes } from "react"


declare global {
    interface typeStateInput {
        values?: Record<string, any>;
        validations?: Record<string, typeValidations>;
        invalidMessage?: string;
        statusCode?: number;
    }


    interface typeValidations {
        required?: boolean;
        max?: number;
        min?: number;
        length?: number;
        allowedTypes?: string[];
        confirmationColumn?: string;
    }
}
export { };