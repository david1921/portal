import jsdom from 'jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import {expect} from 'chai';
import App from '../src/components/App.jsx';


// setup the simplest document possible
//global.document = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
const { window } = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
// get the window object out of the document
global.document = window.document;
global.window = window;


// set globals for mocha that make access to document and window feel 
// natural in the test environment


describe('app' ,()=>{
   it('works, hopefully', () => {
      const componentInstance = TestUtils.renderIntoDocument(<App/>)
      const dom = ReactDOM.findDOMNode(componentInstance)
      expect(dom.children.length).to.equal(0);
  });
});