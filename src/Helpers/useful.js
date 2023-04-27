export const checkInputs = (name, data, required) => {

    //NAME AND SURNAME

    switch (name) {
        case "name":
        case "surname":
        case "city":
        
        if (data === "" && required === true) {
            return { message: "Este campo es obligatorio", validated: false };
        } else if (!/^[a-zA-ZáéíóúüñÑÁÉÍÓÚ ]*-?$/.test(data)) {
            return {
                message: "Por favor, introduce un texto válido",
                validated: false,
            };
        }
        return { message: "", validated: true };

    //EMAIL

    case "email":
        if (data === "" && required === true) {
            return { message: "Este campo es obligatorio", validated: false };
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)) {
            return { message: "Por favor, introduce un mail válido", validated: false };
        }
        return { message: "", validated: true };

    //PASSWORD

    case "password":
        if (data === "" && required === true) {
            return { message: "Este campo es obligatorio", validated: false };
        } else if (data.length < 6) {
            return {
                message: "La contraseña debe tener un mínimo de 6 caracteres",
                validated: false,
            };
        }
        return { message: "", validated: true };

    //PHONE

    case "phone":
        if (data === "" && required === true) {
            return { message: "Este campo es obligatorio", validated: false };
        } else if (!/\+?\(?\d{2,4}\)?[\d\s-]{9}/.test(data)) {
            return { message: "Por favor, introduce un número de teléfono válido" };
        }
        return { message: "", validated: true };

    //DNI 

    case "dni":
        if (data === "" && required === true) {
            return { message: "Este campo es obligatorio", validated: false };
        } else if (!/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/g.test(data)) {
            return { message: "Formato DNI incorrecto", validated: false };
        }
            return { message: "", validated: true };
        

    default:
        console.log("No se ha reconocido este campo");
    }
};
