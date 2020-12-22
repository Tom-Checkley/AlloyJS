import { Directive } from '../../_models/Directive';

export class HelloWorld extends Directive {
    constructor(name: string, el: HTMLElement) {
        super(name, el);
    }
}