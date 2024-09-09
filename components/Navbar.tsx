"use client";
import { addressAtom } from "@/app/atoms/addressAtom";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Document from "../artifacts/contracts/Document.sol/Document.json";
import { ethers } from "ethers";

function Navbar() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useRecoilState(addressAtom);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);


  return (
    <nav className="start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            DocuVerify
          </span>
        </Link>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {!connected ? "Connect Your Wallet" : `${address.slice(0, 6)}...${address.slice(-4)}`}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
