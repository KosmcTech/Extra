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
            <div className="flex flex-wrap gap-8 lg:justify-center lg:gap-0">
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
                <a href="index.html" className="relative">
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
              <ul className="flex items-center gap-5">
                <li>
                  <a href="https://www.instagram.com/kosmc.creators/" target="_blank" aria-label="social icon">
                  <svg 
                  className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                  width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75315 1.76883C6.98044 1.76883 6.75852 1.77629 6.06227 1.8072C3.69179 1.91379 2.37436 3.20243 2.26557 5.5271C2.23348 6.2098 2.22586 6.42723 2.22586 8.16409C2.22586 9.90095 2.23348 10.1189 2.26502 10.801C2.37381 13.1236 3.68906 14.4144 6.06173 14.521C6.75852 14.5519 6.98044 14.5594 8.75315 14.5594C10.5259 14.5594 10.7483 14.5519 11.4446 14.521C13.8128 14.4144 15.1336 13.1257 15.2407 10.801C15.2729 10.1189 15.2804 9.90095 15.2804 8.16409C15.2804 6.42723 15.2729 6.2098 15.2413 5.52763C15.1347 3.20723 13.8178 1.91432 11.4451 1.80773C10.7483 1.77629 10.5259 1.76883 8.75315 1.76883ZM8.75315 4.88007C6.90212 4.88007 5.40139 6.35045 5.40139 8.16403C5.40139 9.97763 6.90212 11.4485 8.75315 11.4485C10.6042 11.4485 12.105 9.97815 12.105 8.16403C12.105 6.35045 10.6042 4.88007 8.75315 4.88007ZM8.75313 10.2959C7.55156 10.2959 6.57737 9.34187 6.57737 8.16412C6.57737 6.98686 7.55156 6.03237 8.75313 6.03237C9.95469 6.03237 10.9289 6.98686 10.9289 8.16412C10.9289 9.34187 9.95469 10.2959 8.75313 10.2959ZM12.2377 3.98321C11.8047 3.98321 11.4538 4.32695 11.4538 4.75063C11.4538 5.17433 11.8047 5.51807 12.2377 5.51807C12.67 5.51807 13.0203 5.17433 13.0203 4.75063C13.0203 4.32695 12.67 3.98321 12.2377 3.98321Z"/>
                  </svg>

                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@kosmc.creators" target="_blank" aria-label="social icon">
                  <svg 
                  className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                  width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3459 0.153432C13.3425 -0.0515656 6.65333 -0.0507219 3.65416 0.153432C0.406667 0.3751 0.02416 2.33674 0 7.50002C0.02416 12.6541 0.403334 14.6241 3.65416 14.8466C6.65416 15.0507 13.3425 15.0515 16.3459 14.8466C19.5933 14.6249 19.9759 12.6633 20 7.50002C19.9759 2.34591 19.5967 0.37593 16.3459 0.153432ZM7.5 10.8332V4.16664L14.1667 7.49411L7.5 10.8332Z"/>
                  </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/kosmccreators" target="_blank" aria-label="social icon">
                  <svg 
                  className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                  width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 1.27254C13.7257 1.48857 13.1623 1.63408 12.5709 1.69966C13.1747 1.36402 13.6384 0.832194 13.8563 0.198396C13.2917 0.509229 12.6659 0.735192 11.9997 0.856989C11.4671 0.329571 10.7065 0 9.86575 0C7.97822 0 6.59122 1.63463 7.01754 3.33153C4.5885 3.21854 2.43438 2.13835 0.992161 0.496557C0.226214 1.71619 0.594938 3.31168 1.89644 4.11963C1.41788 4.1053 0.966625 3.98351 0.572964 3.78014C0.540902 5.03725 1.51169 6.21335 2.91769 6.47516C2.50621 6.57875 2.05556 6.60296 1.59719 6.52142C1.96888 7.59944 3.04831 8.3837 4.32844 8.40575C3.09938 9.30017 1.55088 9.69977 0 9.53003C1.29379 10.2999 2.831 10.7491 4.48163 10.7491C9.90964 10.7491 12.9764 6.49388 12.7912 2.67735C13.3623 2.29432 13.8581 1.8165 14.25 1.27254Z"/>
                  </svg>
                  </a>
                </li>
                <li>
                  <a href="https://open.spotify.com/show/4akCznUKSc8vCmy9Bocdq0" target="_blank" aria-label="social icon">
                  <svg
                  className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                   width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.55 0C3.83026 0 0 3.71057 0 8.28281C0 12.8551 3.83026 16.5656 8.55 16.5656C13.2697 16.5656 17.1 12.8551 17.1 8.28281C17.1 3.71057 13.2697 0 8.55 0ZM12.0217 12.1871C11.8769 12.1871 11.7873 12.1437 11.6528 12.0669C9.50153 10.8111 6.99859 10.7576 4.52667 11.2486C4.39222 11.282 4.21639 11.3354 4.11641 11.3354C3.782 11.3354 3.57169 11.0783 3.57169 10.8077C3.57169 10.4637 3.782 10.3001 4.04056 10.2466C6.86413 9.64213 9.74976 9.69557 12.2113 11.1217C12.4216 11.2519 12.5457 11.3688 12.5457 11.6728C12.5457 11.9767 12.301 12.1871 12.0217 12.1871ZM12.9491 9.99615C12.7698 9.99615 12.6492 9.91934 12.5251 9.85588C10.3703 8.62014 7.15718 8.1225 4.29913 8.87396C4.13365 8.91738 4.04401 8.9608 3.88887 8.9608C3.51998 8.9608 3.22004 8.67023 3.22004 8.31287C3.22004 7.95551 3.39931 7.71838 3.75442 7.62152C4.71284 7.36101 5.69196 7.1673 7.12615 7.1673C9.36363 7.1673 11.5253 7.70502 13.2284 8.68693C13.5076 8.84725 13.6179 9.05432 13.6179 9.34488C13.6145 9.70558 13.3249 9.99615 12.9491 9.99615ZM14.0179 7.45119C13.8386 7.45119 13.7283 7.40777 13.5731 7.32094C11.1184 5.9015 6.72968 5.56084 3.88887 6.329C3.76476 6.3624 3.60962 6.41584 3.44413 6.41584C2.98905 6.41584 2.64085 6.07184 2.64085 5.62764C2.64085 5.17342 2.93044 4.91625 3.24073 4.82941C4.45427 4.48541 5.81262 4.32176 7.29163 4.32176C9.80837 4.32176 12.4458 4.82941 14.373 5.9182C14.6419 6.0685 14.8177 6.27557 14.8177 6.67301C14.8177 7.12723 14.4385 7.45119 14.0179 7.45119Z"/>
                  </svg>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
