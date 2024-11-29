import React from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { FaPlay } from 'react-icons/fa6';
import { LuFolderSearch } from 'react-icons/lu';
import Link from 'next/link';
const Footer = () => {
    return (
        <>
            <footer className="fixed bottom-0 left-0 right-0 z-50 py-5 bg-slate-950 flex justify-evenly">
                <Link href="/">
                    <IoHomeSharp className="text-white text-2xl" />
                </Link>
                <Link href="/">
                    <FaPlay className="text-white text-2xl" />
                </Link>
                <Link href="/">
                    <LuFolderSearch className="text-white text-2xl" />
                </Link>
            </footer>
        </>
    );
};

export default Footer;
