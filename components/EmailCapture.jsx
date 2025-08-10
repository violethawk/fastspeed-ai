import React, { useState } from 'react';

/**
 * Visual email capture component.  No backend is provided – the form
 * simply opens a mailto: link with the entered address.  If the user
 * has a default mail client configured the email will open there.
 */
const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const mailHref = `mailto:info@fastspeed.ai?subject=Subscribe&body=Please subscribe me (${encodeURIComponent(email)})`;
  return (
    <div className="my-8 p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
      <p className="text-sm mb-3 text-gray-700">Subscribe for updates and new tools.</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-grow border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <a
          href={mailHref}
          className="bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default EmailCapture;