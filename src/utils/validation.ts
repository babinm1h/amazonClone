
export const valid = (max: number, min?: number,) => {
    return {
        required: { value: true, message: "Field required" },
        minLength: { value: min || 6, message: `Minimum ${min || 6} characters required` },
        maxLength: { value: max, message: `Maximum length is ${max} characters` }
    }
}