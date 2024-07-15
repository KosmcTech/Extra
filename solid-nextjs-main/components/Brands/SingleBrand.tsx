import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
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
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        className="animate_top mx-w-full relative block h-16 w-[128px]"
      >
        <Image
          className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden mix-blend-luminosity"
          src={image}
          alt={name}
          fill
        />
        <Image
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block mix-blend-luminosity"
          src={imageLight}
          alt={name}
          fill
        />
      </motion.div>
    </>
  );
};

export default SingleBrand;
