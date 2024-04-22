export interface User {
   givenName: string;
   surName: string;
   email: string;
   password: string;
}

export interface Credentials {
   email: string;
   password: string;
}

export interface LoggedInUser { //payload of the access token
   fullname: string;
   email: string;
}