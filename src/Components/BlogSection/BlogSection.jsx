import React from 'react';

const BlogSection = () => {
     return (
          <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Blog</h1>
      <div className="blog-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. What is One-way Data Binding?</h2>
        <p>
          One-way data binding is a concept in web development where the data
          flows in only one direction, typically from the data source (e.g.,
          model or server) to the UI (user interface). Changes in the data source
          are reflected in the UI, but changes in the UI do not affect the data
          source. It provides a predictable and straightforward way to manage
          data and ensures that the UI always reflects the current state of the
          data.
        </p>
      </div>
      <div className="blog-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. What is NPM in Node.js?</h2>
        <p>
          NPM stands for Node Package Manager, and it is the default package
          manager for Node.js. NPM is a command-line tool that allows developers
          to discover, install, manage, and publish packages (libraries,
          frameworks, and tools) for Node.js applications. It simplifies
          dependency management, making it easy to include external libraries in
          your projects. NPM also provides a mechanism to run scripts and
          automate various tasks in your Node.js application.
        </p>
      </div>
      <div className="blog-section">
        <h2 className="text-2xl font-semibold mb-4">3. Difference Between MongoDB and MySQL Databases</h2>
        <p>
          MongoDB and MySQL are both popular database management systems, but
          they have significant differences:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Data Model:</strong> MongoDB is a NoSQL database that
            stores data in a flexible, schema-less format using documents, while
            MySQL is a relational database that stores structured data in
            tables.
          </li>
          <li>
            <strong>Query Language:</strong> MongoDB uses a query language based
            on JSON-like documents, whereas MySQL uses SQL (Structured Query
            Language).
          </li>
          <li>
            <strong>Scalability:</strong> MongoDB is known for its horizontal
            scalability and is well-suited for large amounts of unstructured
            data, while MySQL is typically used for structured data and may
            require vertical scaling.
          </li>
          <li>
            <strong>Schema:</strong> MongoDB's schema is dynamic, allowing you
            to add or change fields without affecting existing data, while
            MySQL requires a predefined schema.
          </li>
          <li>
            <strong>Community and Ecosystem:</strong> Both databases have active
            communities and ecosystems, but MySQL has been around longer and has
            a larger user base.
          </li>
        </ul>
      </div>
    </div>
     );
};

export default BlogSection;
// import React from "react";

// const BlogPage = () => {
//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-4xl font-bold mb-8">Welcome to My Blog</h1>
//       <div className="blog-section mb-8">
//         <h2 className="text-2xl font-semibold mb-4">1. What is One-way Data Binding?</h2>
//         <p>
//           One-way data binding is a concept in web development where the data
//           flows in only one direction, typically from the data source (e.g.,
//           model or server) to the UI (user interface). Changes in the data source
//           are reflected in the UI, but changes in the UI do not affect the data
//           source. It provides a predictable and straightforward way to manage
//           data and ensures that the UI always reflects the current state of the
//           data.
//         </p>
//       </div>
//       <div className="blog-section mb-8">
//         <h2 className="text-2xl font-semibold mb-4">2. What is NPM in Node.js?</h2>
//         <p>
//           NPM stands for Node Package Manager, and it is the default package
//           manager for Node.js. NPM is a command-line tool that allows developers
//           to discover, install, manage, and publish packages (libraries,
//           frameworks, and tools) for Node.js applications. It simplifies
//           dependency management, making it easy to include external libraries in
//           your projects. NPM also provides a mechanism to run scripts and
//           automate various tasks in your Node.js application.
//         </p>
//       </div>
//       <div className="blog-section">
//         <h2 className="text-2xl font-semibold mb-4">3. Difference Between MongoDB and MySQL Databases</h2>
//         <p>
//           MongoDB and MySQL are both popular database management systems, but
//           they have significant differences:
//         </p>
//         <ul className="list-disc pl-8">
//           <li>
//             <strong>Data Model:</strong> MongoDB is a NoSQL database that
//             stores data in a flexible, schema-less format using documents, while
//             MySQL is a relational database that stores structured data in
//             tables.
//           </li>
//           <li>
//             <strong>Query Language:</strong> MongoDB uses a query language based
//             on JSON-like documents, whereas MySQL uses SQL (Structured Query
//             Language).
//           </li>
//           <li>
//             <strong>Scalability:</strong> MongoDB is known for its horizontal
//             scalability and is well-suited for large amounts of unstructured
//             data, while MySQL is typically used for structured data and may
//             require vertical scaling.
//           </li>
//           <li>
//             <strong>Schema:</strong> MongoDB's schema is dynamic, allowing you
//             to add or change fields without affecting existing data, while
//             MySQL requires a predefined schema.
//           </li>
//           <li>
//             <strong>Community and Ecosystem:</strong> Both databases have active
//             communities and ecosystems, but MySQL has been around longer and has
//             a larger user base.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
