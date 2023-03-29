(() => {

    // Aplicando el principio de responsabilidad unica, codigo mejorado del archivo anterior
    // Priorizar la composicion frente a la herencia

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
        email       : string;
        role        : string;
    }

    class User {
        public email        : string;
        public role         : string;
        public lastAccess   : Date;
        constructor({email, role}: UserProps) {
            this.email      = email;
            this.role       = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder  : string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }

    interface UserSettingsProps{
        birthdate: Date;
        email: string
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({birthdate, gender, name, email, role, workingDirectory, lastOpenFolder}: UserSettingsProps) {
            this.person = new Person({birthdate, gender, name});
            this.user = new User({email, role});
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
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

    console.log({userSettings, areCredentialsValid: userSettings.user.checkCredentials()});

    
})();

