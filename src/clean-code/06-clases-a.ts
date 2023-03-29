(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';
    class Person {
        /*public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date) { // Forma tradicional de instanciar un objeto
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }*/

        constructor(public name: string,
                    public gender: Gender,
                    public birthdate: Date) {} // Forma recortada TS
    }

    // const person = new Person('Adrian', 'M', new Date('1999-02-15'));
    // console.log({person});

    class User extends Person {

        public lastAccess: Date = new Date();

        constructor(
            public email: string,
            public role: string,
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {
            super(name, gender, birthdate);
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            public email: string,
            public role: string,
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'adrian@hot.com',
        'Admin',
        'Adrian',
        'M',
        new Date('1999-08-21'),
    );

    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()});

    
})();

