(() => {

    // Aplicando el principio de responsabilidad unica, codigo mejorado del archivo anterior

    type Gender = 'M' | 'F';

    interface PersonProps {
        name        : string;
        gender      : Gender;
        birthdate   : Date;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;
        constructor({name, gender, birthdate}: PersonProps) {
            this.name       = name;
            this.gender     = gender;
            this.birthdate  = birthdate
        }
    }

    interface UserProps{
        birthdate   : Date;
        email       : string;
        gender      : Gender;
        name        : string;
        role        : string;
    }

    class User extends Person {
        public email        : string;
        public role         : string;
        public lastAccess   : Date;
        constructor({email, role, gender, birthdate, name}: UserProps) {
            super({name, gender, birthdate});
            this.email      = email;
            this.role       = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : string;
        workingDirectory: string;
    }

    class UserSettings extends User{
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({
                        workingDirectory,
                        lastOpenFolder,
                        email,
                        role,
                        name,
                        gender,
                        birthdate
                    }: UserSettingsProps) {
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }

    const userSettings = new UserSettings({
            workingDirectory: '/usr/home',
            lastOpenFolder: '/home',
            email: 'adrian@hot.com',
            role: 'Admin',
            name: 'Adrian',
            gender: 'M',
            birthdate: new Date('1999-08-21')
        });

    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()});

    
})();

