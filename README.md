# Mobile App Design and Implementation Test Project

## Architecture Design

As a Super App that offer an entrance for many different services, stability, efficiency and responsivity are considered.
For me, I will go with React Native since it’s more smoothly to dig in and handle, which nourished well by developers’ ecosystem for several years. Compared with flutter or even other native language such as swift and kotlin, React Native has the capability to build various packages for multiple platforms with some extra configuration.
For consistent user experience, I would integrate react-native-webview library to project, allowing third parties developers to embed their existent web application to Super App quickly.
To update version quickly, I would integrate react-native-code-push module to project so that update can be pushed via back-end server quietly.

## Programming

I choose first assignment to build a weekly mood page using React. It’s painless and more elegant to code with some prevalent dependency libraries, and here is what and why:

- axios: axios is a promise-based HTTP client which has widely integrated in projects to replace XHR api;
- mockjs: mockjs is a simulation data generator and HTTP request interceptor to provide response like a back-end server;
- sass: sass is an extension of CSS, providing nested rules, variables to make styling more intuitive;
