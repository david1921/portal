import jsdom from 'jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import jquery from 'jquery';
import TestUtils from 'react-dom/test-utils'
import chai,{expect} from 'chai';
import chaiJquery from 'chai-jquery';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from '../src/reducers';
import ReduxPromise from 'redux-promise';

require('isomorphic-fetch');

// setup the simplest document possible
const { window } = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
// get the window object out of the document
global.document = window.document;
global.window = window;

const $ = jquery(global.window);

function renderComponent(Component, props, state){
   const componentClass = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state,applyMiddleware(ReduxPromise))}>
      <Component {...props} />
    </Provider>
      );
   const dom = $(ReactDOM.findDOMNode(componentClass));
  return dom;
}

chaiJquery(chai,chai.util,$);

export {renderComponent, expect};