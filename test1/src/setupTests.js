// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';



// some other notes about testing react stuff
// react life-cycle methods can be run through the test process
// constructor life-cycle methods are called first, test that constructors do not have side effects, no http requests
// constructor sets initial state

// testing the render methods would involve only returning jsx, reading props and state, and not changing state or making ajax calls

// component did mount, test that dom interaction are performed, networks requests function