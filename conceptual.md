### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a library for routing in React applications. It allows you to define multiple routes in your app and enables navigation between them without causing a full page reload. It is essential for creating Single Page Applications (SPAs) where routing occurs client-side.

- What is a single page application?
A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content based on user interactions. SPAs rely heavily on JavaScript (React, Angular, Vue, etc.) to render content and provide a fast, seamless user experience without reloading the entire page.

- What are some differences between client side and server side routing?
Client-side routing: Navigation is handled in the browser, often using libraries like React Router. It allows for a faster user experience as only portions of the page are updated.
Server-side routing: Every navigation request is sent to the server, which returns a new HTML page. This leads to full page   reloads but can be necessary for certain applications like those needing complex server-side rendering or SEO optimization.

- What are two ways of handling redirects with React Router? When would you use each?

Using <Navigate /> component: You would use this inside components to programmatically redirect based on some condition (e.g., after form submission).

Using <Redirect /> in routes: This is used in the route definitions to automatically redirect when a user hits a specific URL (e.g., redirecting old routes to new ones).

- What are two different ways to handle page-not-found user experiences using React Router? 
Catch-all Route: Define a route like <Route path="*"> to display a 404 page when no other route matches.
Conditional Rendering: Inside components, conditionally render a 404 message when a resource, such as a specific item or ID in a dynamic route, is not found.

- How do you grab URL parameters from within a component using React Router?

You can use the useParams() hook to access route parameters. For example, if the route is /items/:id, you can grab the id parameter like this:
const { id } = useParams();
- What is context in React? When would you use it?

Context in React is used to share data across components without passing props down manually at every level. It is useful when you need to provide global data (like user authentication status, themes, etc.) to multiple components at different nesting levels.

- Describe some differences between class-based components and function
  components in React.

Class-based components: Use ES6 classes, can maintain state and lifecycle methods, and were the only way to manage state before hooks were introduced.

Function components: These are simpler, stateless components until hooks were introduced. Now, with hooks, function components can manage state and lifecycle events, making them more flexible and preferred in modern React development.

- What are some of the problems that hooks were designed to solve?

	State management in function components: Before hooks, only class components could manage state.

Reusability: Hooks allow logic to be extracted into reusable custom hooks, improving code organization.

Lifecycle management: Hooks like useEffect() simplified lifecycle event handling in function components.

Cleaner and simpler syntax: They remove the need for class-based components, making components easier to write and understand.
