import { GetDatasetKey } from "../_helpers/data-helpers/_get-dataset-key";
import { GetData } from '../_helpers/data-helpers/_get-data';

export class Directive {
    name: string;
    el: HTMLElement;
    scope: {};

    constructor(name: string, el: HTMLElement) {
        this.name = GetDatasetKey(name);
        this.el = el;
    }

    buildScope() {
        this.scope = GetData(this.el.dataset[this.name]);
    }
}