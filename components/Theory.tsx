/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import Image from "next/image";

export const Theory: FC = () => {
  return (
    <div className="full-container bg-primary text-light py-12 flex flex-col items-center">
      <section className="font-light max-w-2xl text-justify text-sm pb-8">
        <h3 className="font-serif italic text-2xl text-center mb-4">
          What is Huffman Coding?
        </h3>
        <p className="mb-2">
          First of all, let's start with codification in general. When we
          transmit information, need to convert the data (text, music, video,
          etc.) into binary code. To do this, we assign a code to each piece of
          data so we can distinguish them, and decode them later.
        </p>
        <p className="mb-2">
          If we take a string as an example, for example 'ABACA', we could
          assign a same-length code to each one of the unique symbols (usually
          called <i>naive coding</i>).
        </p>
        <div className="flex justify-center my-4 items-center">
          <table className="table">
            <thead>
              <td>Naive Coding</td>
            </thead>
            <tr>
              <td>A</td>
              <td>00</td>
            </tr>
            <tr>
              <td>B</td>
              <td>01</td>
            </tr>
            <tr>
              <td>C</td>
              <td>11</td>
            </tr>
          </table>
          <div className="text-lg font-serif italic ml-8">
            <p>Encoded output:</p>
            <b className="text-accent">00 01 00 11 00</b>
            <p className="text-sm">10 char * 8 bits/char = 80 bits</p>
          </div>
        </div>

        <p className="mb-2">
          With the obtained table, we could later translate the binary codes
          back to the text without loosing information on the process, but is
          this the best way to do this?
        </p>
        <p>
          Huffman coding improves this process, being a lossless data
          compression algorithm that assigns variable-length codes based on the
          frequencies of our input characters.
        </p>
        <p>
          To determine how to assign the codes to each symbol, we have to take
          the following steps:
          <ol>
            <li>Analyse the frequency of each character</li>
            <li>Build the binary tree:</li>
            <ul>
              <li>Take the pair of nodes with the least frequency</li>
              <li>Iterate until left with one node</li>
            </ul>
            <li>
              Starting at the root, label the edge to the left child as 0 and
              the edge to the right child as 1. Iterate for every child.
            </li>
            <li>
              Go over the tree from each leaf to the root, writing down the
              labeled binary numbers, to generate the code word for each symbol.
            </li>
          </ol>
          Once we get the code words, we will notice that using this method,
          shorter words are assigned to the most frequent symbols. This way, the
          resulted encoded string is shorter! You can try it out and see the
          difference using the huffman online encoder:
        </p>
        <p className="flex justify-center">
          <a href="#encoding-tool" className="btn-light ml-4 mt-2">
            try it out!
          </a>
        </p>
      </section>
      <div className="flex gap-16 mt-8 flex-wrap">

        <section className="font-light w-80 grow max-w-2xl text-justify text-sm ">
          <h3 className="font-serif italic text-2xl text-center mb-4">
            Beyond Huffman Coding
          </h3>
          <p className="mb-2">
            There are
            <a
              href="https://en.wikipedia.org/wiki/Huffman_coding#Variations"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              many variations
            </a>
            each one with it's own particularities. An interesting approach,
            beautifully explained in
            <a
              href="http://ben-tanen.com/adaptive-huffman/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Ben Tanen's site
            </a>
            , is Adaptive Huffman Coding. It consists in calculating the
            probabilities of the symbols dynamically, updating the tree
            structure. This way there's no need to pre-process the input, but
            the method is not widely used in practice, since the cost of
            updating the tree makes is slower than optimized adaptive arithmetic
            coding, more flexible and with better compression.
          </p>
          <p>
            An important limitation of Huffman coding is that with every encoded
            symbol, up to 1 bit of redundant data can be introduced. With small
            alphabets, it can make that the length of the original
            representation doesn't change. Arithmetic Coding tries to avoid this
            issue<sup>5</sup>.
          </p>
          <div className="flex justify-center my-4 bg-light p-2 rounded">
            <Image
              src="/img/HuffVsArithm.png"
              alt="Picture of David A. Huffman"
              width="512px"
              height="308px"
            ></Image>
          </div>
          <p>
            Arithmetic Coding is another form of entropy encoding for lossless
            data compression. Unlike Huffman, instead of separating the input
            into component symbols and replacing each with a code, it encodes
            the entire message into a single number, an arbitrary-precision
            fraction q, where 0.0 ≤ q {"<"} 1.0.
            <br />
            This makes it work better than Huffman for sequencies with very low
            Entropy.
          </p>
          <p className="mt-2">
            If you are interested in compression and information theory, it is
            highly encouraged to learn about it.
          </p>
        </section>
      </div>
    </div>
  );
};
