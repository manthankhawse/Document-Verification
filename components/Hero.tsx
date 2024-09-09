import Link from 'next/link';
import Image from 'next/image';
import searchGif from '../public/search.gif';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-12 bg-white shadow-lg rounded-lg">
      {/* Left Side */}
      <div className="flex flex-col items-start max-w-lg md:mr-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Streamline Your Document Verification</h1>
        <p className="text-lg mb-6 text-gray-600">
          Our platform simplifies the process of verifying and issuing documents with a seamless experience. Whether you need to issue a new document or verify an existing one, our user-friendly interface and secure system ensure efficiency and reliability.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/issue"
            className="bg-blue-500 py-2 px-4 rounded-lg shadow-md border border-neutral-200 text-white font-semibold transition-transform transform hover:scale-105"
          >
            Issue Document
          </Link>
          <Link
            href="/verify"
            className="bg-gray-200 py-2 px-4 rounded-lg shadow-md border border-neutral-400 text-gray-800 font-semibold transition-transform transform hover:scale-105"
          >
            Verify Document
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center mt-8 md:mt-0 md:ml-8">
        <Image
          src={searchGif}
          alt="Animated Gif"
          width={288}  // 72 * 4, or adjust based on your requirement
          height={288} // 72 * 4, or adjust based on your requirement
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
