import { Directive } from '../../_models/Directive';

export class Test extends Directive {
    constructor(name: string, el: HTMLElement) {
        super(name, el);
    }
}