import {renderComponent,expect} from '../test_helper';
import Review from '../../src/components/containers/Reviews.jsx';

describe('Online reviews' ,()=>{
   it('it has the right number of list items', () => {
      const dom = renderComponent(Review)
      //console.log(dom.find('div.panel > div.orange-circle'))
     //expect(dom).to.contain('West Division')
      expect(dom.find('li').length).to.equal(4);
  });
});