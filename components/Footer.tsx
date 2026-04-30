/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-primary text-light pt-4">
      <div
        id="about-huffman-site"
        className="h-44 bg-tesselation-3-pattern bg-repeat-x animation-wave"
      ></div>
      <div className="full-container flex flex-col py-8 mb-4 font-light text-justify text-sm items-center">
        <h3 className="font-serif italic text-2xl text-center mb-4">
          About this site
        </h3>
        <section className="max-w-2xl w-80 mb-2">
          <p>
            The objective of this project is to provide an interactive web tool
            to learn about Huffman Coding, along with the information necessary
            to understand the key concepts.
          </p>
          <p className="mt-2">
            This is a Coding Skills 2 project final submission under Prakash Sir.
          </p>
        </section>

      </div>
      <div className="h-10 bg-primary bg-tess-2-light bg-repeat-x bg-center"></div>
    </footer>
  );
};
