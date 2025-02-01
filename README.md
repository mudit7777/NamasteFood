Two Types of Export/Import

-Default Export/Import

export default Component
import Component from "path"

-Named Export/Import

export const Component;
import {} from "path"

...

# React Hooks

(Normal JS Utility functions) written inside React
-To use these we have to import these

- useState() => As soon as the state variable changes, React quickly re renders the component
- useEffect()

# 2 Routing in web pages

- Client Side Routing - We don't make any network calls again,
  - When we load the application for the first time it already has th code for that component
  - So when click, it specifically renders the component
- Server Side Routing - Calls get to the server and fetches the result back again and displayed to the UI

# Types of testing in react

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install react testing library
- Installed Jest
- Installed Babel Dependencies
- Configure Babel
- Jest - npx jest --init
- install jsdom library
- install @babel/preset-react - to make JSX work in test cases
- Include @bable/preset-react inside by babel config
- Install npm intall -D @testing-library/jest-dom

  We will change parcel's behaviour to accomodate, to use Babel along with Jest
