import { _getElements } from '../../_helpers/get-elements/_get-elements.helper';
import { Test } from './_test.model';

export const TestDirective = () => {
    const selector: string = 'data-alloy-test'
    const helloWorldEls: HTMLElement[] = _getElements(selector);

    if (helloWorldEls) {
        helloWorldEls.forEach((el: HTMLElement): Test => {
            return new Test(selector, el);
        });
    }
}