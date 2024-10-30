"use client"
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AboutPage from '@/components/aboutpage';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => { 
    document.title="About- Maheshwari King"
  }, [])
  
  // Example dynamic data
  return (
    <div className="text-slate-300 min-h-screen">
      <Head>
        <title>About Maheshwari King - Where Passion Meets Purpose</title>
        <meta name="description" content="Learn about Patron, the community-driven crowdfunding platform built with Next.js and Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Patron: Where Passion Meets Purpose
        </motion.h1>
        <div className="prose lg:prose-lg xl:prose-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Patron, we're not just another crowdfunding platform; we're a community-driven hub for creators, dreamers, and visionaries like you. Our mission? To empower individuals and amplify voices, one project at a time.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Behind the sleek interface and smooth user experience lies cutting-edge technology. We've chosen Next.js for its lightning-fast performance and Tailwind CSS for its customizable, utility-first approach to styling. This means you get a seamless browsing experience while enjoying a visually stunning interface.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Sure, we help you raise funds for your projects, but we're about more than just money. We're about connections. With Patron, you'll tap into a global network of supporters who believe in your vision. From artists to activists, entrepreneurs to educators, our diverse community is here to cheer you on every step of the way.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Whether you're a filmmaker seeking backing for your next masterpiece, a musician crowdfunding your debut album, or a nonprofit rallying support for a cause close to your heart, Patron is your platform. Our intuitive interface makes it easy to create, share, and manage your campaigns, so you can focus on what matters most: bringing your ideas to life.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            We believe in transparency, which is why we're committed to keeping you informed every step of the way. From transparent fee structures to real-time campaign analytics, you'll have all the data you need to make informed decisions and build trust with your backers.
          </motion.p>
          <motion.p
            className="text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Ready to turn your passion into a reality?{' '}
            <Link href="/login">
              <button className="text-blue-500 hover:underline">Join the Patron family today</button>
            </Link>{' '}
            and start making waves in the world. Whether you're a creator looking for support or a supporter looking to make a difference, there's a place for you here.
          </motion.p>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <AboutPage/>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
