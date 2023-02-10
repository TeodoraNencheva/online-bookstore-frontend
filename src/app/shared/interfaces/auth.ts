export interface IAuthResponse {
    token: string
}

export interface IRegisterDTO {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    baseUrl: string;
}