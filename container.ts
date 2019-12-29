import { asClass, createContainer, InjectionMode, Lifetime } from "awilix"

class A {
    public a: number;
}

class B {
    public b: number;
}

class C {
    public c: number;
}

const dependencies = [A, B, C];

const container = createContainer({
    injectionMode: InjectionMode.CLASSIC
}).register(
    Object.fromEntries(
        dependencies.map(dependency => [
            dependency.constructor.name.toLowerCase(),
            asClass(dependency, { lifetime: Lifetime.SINGLETON })
        ])
    )
);