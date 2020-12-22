import { _getElements } from '../../_helpers/get-elements/_get-elements.helper';
import { HelloWorld } from './_hello-world.model';

const selector = 'data-alloy-hello-world'
export const HelloWorldDirective = () => {
    const helloWorldEls = _getElements(selector);

    if (helloWorldEls.length > 0) {
        helloWorldEls.forEach(el => {
            const helloWorld = new HelloWorld(selector, el);
            helloWorld.buildScope();
            
        })
    }
}