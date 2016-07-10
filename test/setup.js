import 'babel-polyfill';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import proxyquire from 'proxyquire';

global.expect = chai.expect;
global.sinon = sinon;
global.proxyquire = proxyquire;

chai.use(sinonChai);

import jsdom from 'jsdom';

// virtual env setup, must be done before importing React
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };

global.React = require('react');
