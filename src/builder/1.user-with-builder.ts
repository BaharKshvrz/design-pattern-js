class UserInfo {
    #name: string;
    #email: string;
    #age: number;

    constructor(builder: UserInfoBuilder) {
        this.#name = builder.getName();
        this.#email = builder.getEmail();
        this.#age = builder.getAge();
    }
}

class UserInfoBuilder {
    #name: string;
    #age: number;
    #email: string;

    constructor() {
        this.#age = 0;
        this.#email = '';
        this.#name = '';
    }

    setName(name: string): UserInfoBuilder {
       this.#name = name;
       return this;
    }

    setAge(age: number): UserInfoBuilder {
       this.#age = age;
       return this;
    }

    setEmail(email: string): UserInfoBuilder {
        this.#email = email;
        return this;
    }

    getName(): string {
       return this.#name;
    }

    getEmail(): string {
        return this.#email;
     }

    getAge(): number {
        return this.#age;
     }

    build(): UserInfo {
        return new UserInfo(this)
    }
}


const user = new UserInfoBuilder().setAge(30).setName("Bob").setEmail("bobross@gmail.com");
console.log(user.getName());
console.log(user.getAge());
console.log(user.getEmail());

