"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-around lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-light.svg"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-dark.svg"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-10 mt-5">
                  EMPOWERING CREATORS GROWING BRANDS
                </p>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                
              <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Apps
                  </h4>
                  <ul>
                    <li>
                      <a
                        href="https://kosmc.ai/features/link-in-bio"
                        className="mb-3 inline-block hover:text-primary"
                        target="_blank"
                      >
                        Link in Bio
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kosmc.ai/features/influencer-marketing"
                        target="_blank"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Influencer Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kosmc.ai/features/email-marketing"
                        target="_blank"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Email Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kosmc.ai/features/link-shortener"
                        target="_blank"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Link Shortner
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kosmc.ai/features/qr-code-generator"
                        target="_blank"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        QR Code Generator
                      </a>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Quick Links
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kosmc.ai/about-us"
                        target="_blank"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kosmc.ai/careers"
                        target="_blank"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.kosmc.ai"
                        target="_blank"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Blogs
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Support
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="mailto:connect@kosmc.live"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.kosmc.ai/category/help"
                        target="_blank"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.google.com/forms/d/1CQZY1QeLjkOxiho1Y9nZl3JT6vPyXziaGApX65IWiBI/"
                        target="_blank"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Feedback
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-primary">
                    English
                  </a>
                </li>
                <li>
                  <a href="https://kosmc.ai/privacy-policy" target="_blank" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="mailto:connect@kosmc.live" className="hover:text-primary">
                    Support
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} KOSMC E VENTURES PRIVATE LIMITED. All rights reserved
              </p>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
