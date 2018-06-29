import {renderComponent,expect} from '../test_helper';
import App from '../../src/components/App.jsx';

describe('app' ,()=>{
   it('it has the right number of children', () => {
      const dom = renderComponent(App)
      expect(dom.children.length).to.equal(2);
  });
});