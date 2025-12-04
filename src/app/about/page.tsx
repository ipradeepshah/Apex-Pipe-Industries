"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Us
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Apex Pipe Industries is one of the leading manufacturer of PVC Pipes
          in Nepal, having a track record of successfully manufacturing &
          marketing uPVC pipes conforming to different standards ranging from 1½
          to 8&quot; Apex uPVC pipes are built tough and give many years of useful
          services.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Product Range
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-0 rounded-full shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <Image
              src="/projects/sample-1.png"
              width={6500}
              height={5000}
              alt=""
              className="rounded-xl"
            />
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-full shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <Image
              src="/projects/sample-2.png"
              width={6500}
              height={5000}
              alt=""
              className="rounded-xl"
            />
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-full shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <Image
              src="/projects/sample-3.png"
              width={6500}
              height={5000}
              alt=""
              className="rounded-xl"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Objeactive Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Objective
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <p className="text-xl text-secondary">
              “Our objective is to manufacture and supply high-quality, durable,
              and cost-effective piping solutions that meet national and
              international standards. We aim to support infrastructure growth
              by providing reliable products for water supply, sanitation,
              agriculture, construction, and industrial applications. Through
              continuous innovation, advanced technology, and sustainable
              practices, we strive to deliver exceptional value to customers,
              build long-term partnerships, and establish ourselves as a trusted
              leader in the piping industries&quot;
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* VIsion Section */}
      <motion.section className="mt-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Vision
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <p className="text-xl text-secondary">
              “To be a trusted leader in durable and innovative piping solutions
              that support long-term infrastructure development. We aim to set
              industry standards in quality, safety, and sustainability while
              making reliable pipes accessible to all sectors. Our vision is to
              build a stronger future through technology, performance, and
              customer trust&quot;
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section className="mt-16" {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Mission
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <p className="text-xl text-secondary">
              “Our mission is to manufacture high-quality PVC & UPVC pipes &
              fittings as well as water tank using advanced technology and
              strict quality control. We are committed to delivering reliable,
              affordable, and long-lasting piping systems for residential,
              commercial, and agricultural use. We strive to ensure customer
              satisfaction through timely delivery, continuous improvement, and
              eco friendly production practices.”
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
