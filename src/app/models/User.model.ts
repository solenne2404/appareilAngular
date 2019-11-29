export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public drinckPreference: string,
        public hobbies?: string[]
    ){ }
}