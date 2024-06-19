import { createElement } from 'lwc';
import WireCPR from 'c/wireCPR';
import { CurrentPageReference } from 'lightning/navigation';

//Mock realistict data
const mockCurrentPageReference = require('./data/CurrentPageReference.json');

describe('c-wire-cpr', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders the current page reference in <pre> tag', () => {
        const element = createElement('c-wire-cpr', {
          is: WireCPR
        });
        document.body.appendChild(element);
          
        // Select element for validation
        const preElement = element.shadowRoot.querySelector('pre');
        expect(preElement).not.toBeNull();
          
        // Emit data from @wire
        CurrentPageReference.emit(mockCurrentPageReference);
          
        return Promise.resolve().then(() => {
          expect(preElement.textContent).toBe(
            JSON.stringify(mockCurrentPageReference, null, 2)
          );
        });
      });
});