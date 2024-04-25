import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "Privacy Statement",
    description: "Privacy Statement",
  }
const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">
        Privacy Policy Statement for TrU- Online Store
      </h2>
      <p className="text-gray-700 mb-4">A division of ThinkRoman Ventures</p>
      <p className="text-gray-700 mb-4">
        At TrU- Online Store, we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, and safeguard your personal
        information when you visit our website, www.houseofdharz.com. Please
        note that other ThinkRoman units and affiliates have separate privacy
        policies. By using our website, you consent to our collection and use of
        your information as described in this Privacy Policy.
      </p>

      <h3 className="text-xl font-semibold mb-2">INFORMATION WE COLLECT</h3>
      <p className="text-gray-700 mb-4">
        We collect certain information about your use of www.houseofdharz.com,
        such as your IP address and browser type. We use this information for
        systems administration, abuse prevention, and to track user trends. We
        also collect information that you provide to us, such as your name,
        email address, phone number, and shipping address when you make a
        purchase. We do not link your IP address to your personal information.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        HOW WE USE YOUR INFORMATION
      </h3>
      <p className="text-gray-700 mb-4">
        We use your information to provide and improve our website, process
        transactions, and communicate with you about your orders and other
        inquiries. We may share your information with third-party vendors to
        provide web services or other communications to you, such as Google
        Analytics to generate reports on site usage and web traffic. We prohibit
        third parties from using your information for any other purpose without
        your consent. We may also disclose your information in response to a
        legal process or governmental request, or to protect our rights and
        safety and the rights and safety of our users.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        COOKIES AND OTHER TECHNOLOGIES
      </h3>
      <p className="text-gray-700 mb-4">
        We use cookies to understand and save your preferences, and to compile
        aggregate data about site traffic and site interaction so that we can
        improve our website. You may disable cookies through your browser
        options or opt out of the collection and use of this information through
        tools like the Network Advertising Initiative opt-out page. We also use
        other technologies, such as web beacons, to collect information about
        your use of our website.
      </p>

      <h3 className="text-xl font-semibold mb-2">OTHER WEBSITES AND COOKIES</h3>
      <p className="text-gray-700 mb-4">
        Our website may contain links to other websites, and third-party cookies
        may be set by websites such as YouTube, Twitter, Facebook, Soundcloud,
        or other social media services for which we have implemented “plug-ins.”
        We are not responsible for the privacy practices or content of these
        websites. You should determine their policies by visiting their privacy
        policy pages directly.
      </p>

      <h3 className="text-xl font-semibold mb-2">INFORMATION PROTECTION</h3>
      <p className="text-gray-700 mb-4">
        We have reasonable security measures in place to help protect against
        the loss, misuse, and alteration of your information under our control.
        However, no method of transmission over the internet or electronic
        storage is 100% secure.
      </p>

      <h3 className="text-xl font-semibold mb-2">CHANGES TO THIS POLICY</h3>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy from time to time, and any changes
        will be posted on this page. Your continued use of our website after any
        changes indicates your acceptance of the new Privacy Policy.
      </p>

      <h3 className="text-xl font-semibold mb-2">EFFECTIVE DATE</h3>
      <p className="text-gray-700 mb-4">
        This Privacy Policy is effective as of April 23, 2023.
      </p>
    </div>
  )
}

export default PrivacyPolicy
