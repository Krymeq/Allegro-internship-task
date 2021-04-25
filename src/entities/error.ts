export interface ErrorDetails {
    status: number;
    message: string;
}

export const getMessageByStatus = (status: number) => {
    switch (status) {
        case 404:
            return "Nie znaleziono użytkownika o podanej nazwie."

        case 403:
            return "Osiągnięto limit zapytań. Spróbuj ponownie później."

        default:
            return "Wystąpił nieznany błąd."
        ;
    }
}