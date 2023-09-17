### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
  <!-- representational state transfer - set of standards used to create efficient routes. Uses HTTP methods to create CRUD that is consistent. -->

- What is a resource?
  <!-- how the object is identified in restful routing. typically comes after the domain name. (www.url.com/resource) -->

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
  <!-- json api returns json data to the client based on request sent to the server. (back-end). form rendering is done on the front-end.  -->

- What does idempotent mean? Which HTTP verbs are idempotent?
  <!-- multiple identical requests have the same outcome. GET, HEAD, DELETE, OPTIONS, PUT, TRACE. -->

- What is the difference between PUT and PATCH?
  <!-- patch is to edit existing data sending only the field info needed, put is to change information, needs entire body in request -->

- What is one way encryption?
  <!-- password is hashed one way, cannot be reverse engineered -->

- What is the purpose of a `salt` when hashing a password?
  <!-- adds a level of randomness to a hash, makes it harder to brute force -->

- What is the purpose of the Bcrypt module?
  <!-- password hashing, authentication/authorization -->

- What is the difference between authorization and authentication?
  <!-- authorization is level of access, authentication is permission -->
