interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmingBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public eat(){}
    public fly(){}
}

class Humminbird implements Bird, FlyingBird {
    public fly(){}
    public eat(){}
}

class Ostrich implements Bird, RunningBird {
    eat(): void {
    }

    run(): void {
    }

}

class Penguin implements Bird, SwimmingBird {
    eat(): void {
    }

    swim(){

    }

}

