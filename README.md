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
