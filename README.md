# Getting Started with Goast

This project can be used to demonstrate goast's ability to fix crashes.

## How to use this repository

1) Fork this repository if you haven't already.
2) Go to https://app.goast.ai and click the button to add a repository. Make sure to install the goast Github App in the organization where this repository exists (Probably just on your user).
3) Copy this stack trace to put into goast (Or you can click the `Use sample stack trace` button in goast)
```
Uncaught TypeError: Cannot read properties of null (reading ‘first’)
    at DisplayUser (DisplayUser.js:8:1)
    at renderWithHooks (react-dom.development.js:16305:1)
    at updateFunctionComponent (react-dom.development.js:19588:1)
    at beginWork (react-dom.development.js:21601:1)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4164:1)
    at HTMLUnknownElement.sentryWrapped (helpers.ts:98:1)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:1)
    at invokeGuardedCallback (react-dom.development.js:4277:1)
    at beginWork$1 (react-dom.development.js:27451:1)
    at performUnitOfWork (react-dom.development.js:26557:1)
    at workLoopSync (react-dom.development.js:26466:1)
    at renderRootSync (react-dom.development.js:26434:1)
    at recoverFromConcurrentError (react-dom.development.js:25850:1)
    at performSyncWorkOnRoot (react-dom.development.js:26096:1)
    at flushSyncCallbacks (react-dom.development.js:12042:1)
    at react-dom.development.js:25651:1`
```
4) Click `Generate Fix`

## About the stack trace

Goast can fix any stacktrace if it has access to the corresponding code. This means it can fix frontend or backend errors.

This example is a frontend error where a React component is referencing some state that is unexpectedly null.

## Run this sample

If you want to see the crash in action, you can run this sample yourself by installing the dependencies with `npm install` and then running `npm run start`. 
