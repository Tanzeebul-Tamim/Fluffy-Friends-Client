import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("| Blogs");
  return (
    <div className="my-16">
      <h1 className="text-center text-pink-500 font-bold mb-6 text-4xl">
        Blogs
      </h1>
      <div className="text-xl mx-20">
        <ol className="flex flex-col gap-8" style={{ listStyle: "disc" }}>
          <li>
            <p className="mb-4 font-bold text-pink-600">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </p>
            <p className="mb-4 text-pink-800">
              - An access token is a credential that grants access to certain
              resources or functionalities on a system or server. It is
              typically obtained by a client application after successful
              authentication. The access token is used to authorize and
              authenticate subsequent requests made by the client to the server.
            </p>
            <p className="mb-4 text-pink-800">
              A refresh token is a credential used to obtain a new access token
              without re-authenticating the user. When an access token expires,
              the client can use the refresh token to request a new access token
              from the server, eliminating the need for the user to log in
              again.
            </p>
            <p className="text-pink-800">
              Access tokens and refresh tokens are typically stored on the
              client-side in secure storage mechanisms such as browser cookies,
              local storage, or session storage. The specific choice of storage
              depends on the security requirements of your application and the
              level of protection needed for these tokens.
            </p>
          </li>
          <li>
            <p className="mb-4 font-bold text-pink-600">
              Compare SQL and NoSQL databases.
            </p>
            <p className="text-pink-800">
              - SQL databases offer structured, consistent, and transactional
              data storage, making them suitable for complex queries and
              maintaining data integrity. NoSQL databases provide flexibility,
              scalability, and faster performance for handling unstructured or
              semi-structured data, making them suitable for handling
              large-scale applications and accommodating changing data needs.
            </p>
          </li>
          <li>
            <p className="mb-4 font-bold text-pink-600">
              What is express js? What is Nest JS?
            </p>
            <p className="mb-4 text-pink-800">
              - Express.js is a minimal and flexible web application framework
              for Node.js. Express.js offers a simple, yet powerful set of
              features for handling HTTP requests, routing, middleware, and
              serving static files. It allows developers to quickly build
              server-side applications using JavaScript or TypeScript.
            </p>
            <p className="text-pink-800">
              Nest.js is a progressive Node.js framework for building scalable
              and efficient server-side applications. Nest.js combines the
              elements of object-oriented programming, functional programming,
              and metaprogramming to create a highly flexible and extensible
              platform. It includes features such as dependency injection,
              middleware support, powerful routing, and a modular structure that
              makes it suitable for building large-scale applications.
            </p>
          </li>
          <li>
            <p className="mb-4 font-bold text-pink-600">
              What is MongoDB aggregate and how does it work?
            </p>
            <p className="mb-4 text-pink-800">
              - MongoDB&apos;s aggregate is a powerful method used for data
              aggregation and processing in MongoDB. It allows you to perform
              complex data analysis tasks and transformations on your
              collections. The aggregate function works by defining a pipeline
              of multiple stages, where each stage performs a specific operation
              on the data.
            </p>
            <p className="text-pink-800">
              The pipeline stages in MongoDB&apos;s aggregate are processed
              sequentially, with the output of one stage becoming the input for
              the next stage. Each stage can perform various operations such as
              filtering, sorting, grouping, joining, projecting, and applying
              mathematical or conditional transformations on the data.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Blogs;
