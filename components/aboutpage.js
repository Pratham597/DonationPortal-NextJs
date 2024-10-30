import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <div className=" min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Clone Insider:</h1>
          <p className="text-slate-300">
            Welcome to our Patreon clone! Our platform is designed to empower
            creators by providing them with a platform to monetize their
            content and connect with their fans.
          </p>
          <p className="text-slate-300 mt-4">
            Our mission is to enable creators of all types, whether they are
            artists, musicians, writers, or filmmakers, to pursue their
            passions and livelihoods by providing them with the tools and
            support they need to thrive.
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-slate-600 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Pratham Maheshwari</h3>
                <p className="text-slate-300">
                  Pratham Maheshwari is a passionate developer with a background in web
                  development. He loves building applications that make a
                  positive impact on people's lives.
                </p>
              </div>
              <div className="bg-slate-600 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Code with Harry</h3>
                <p className="text-slate-300">
                  CWH is a creative designer with a keen eye for detail. She
                  enjoys crafting beautiful and intuitive user experiences.
                </p>
              </div>
              <div className="bg-slate-600 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">ChatGPT Bro</h3>
                <p className="text-slate-300">
                  AI is a marketing guru with a knack for storytelling. She
                  loves connecting with audiences and spreading the word about
                  exciting projects.
                </p>
              </div>
            </div>
          </div>
          <p className="text-slate-300 mt-8">
            If you're interested in learning more about our platform or
            collaborating with us, feel free to get in touch!
          </p>
          <div className="mt-8 text-center">
            <Link
              href='/'
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}