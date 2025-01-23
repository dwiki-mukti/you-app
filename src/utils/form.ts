/**
 * Check form is invalid, purposed for adjust disable/enabled form submit button 
 */
export function isInvalidForm(getter: typeStateInput) {
    for (const [fieldName, validation] of Object.entries(getter.validations ?? {})) {
        const invalidMessages = inputValidator({
            fieldName, validation, formControl: getter
        });
        if (invalidMessages.length) return true;
    }
    return false
}



/**
 * Validator for any InputComponent 
 */
export function inputValidator({
    validation,
    formControl,
    fieldName
}: {
    validation: typeValidations | undefined,
    formControl: typeStateInput,
    fieldName: string
}) {
    const invalidMessages: string[] = [];

    if (validation) {
        const value = formControl?.values?.[fieldName]
        if ((validation.required) || value) {
            if (!value) {
                invalidMessages.push('Field tidak boleh kosong!')
            }
            if (validation.max && validation.max < value?.length) {
                invalidMessages.push(`Harus kurang dari ${validation.max} karakter!`)
            }
            if (validation.min && validation.min > value?.length) {
                invalidMessages.push(`Harus lebih dari ${validation.min} karakter!`)
            }
            if (validation.length && validation.length != value?.length) {
                invalidMessages.push(`Harus berisi ${validation.length} karakter!`)
            }
            if (
                validation.confirmationColumn &&
                (value != formControl?.values?.[validation.confirmationColumn])
            ) {
                invalidMessages.push(`Input harus sesuai dengan isi kolom konfirmasi!`)
            }
        }
    }

    return invalidMessages;
}



/**
 * Trigger manual change value input
 */
export function changeAttributeInput(target: any, attribute: string, value: any) {
    Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, attribute)
        ?.set?.call(target, value);
    var eventChange = new Event('change', { bubbles: true });
    target.dispatchEvent(eventChange);
}