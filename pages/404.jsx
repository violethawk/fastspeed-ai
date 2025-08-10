import React from 'react';

/**
 * Custom 404 page shown when a route does not match any known page.
 */
const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-4">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a href="/" className="text-blue-600 underline">
        Go back home
      </a>
    </main>
  );
};

export default NotFoundPage;