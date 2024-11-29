import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiDownload } from 'react-icons/hi';
export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white-700 backdrop-blur-md py-3">
            <nav>
                <div className="px-5">
                    <Link href="/">
                        <div className="flex justify-between">
                            <Image
                                src="/Netflix_2015_logo.svg.png"
                                alt="logo"
                                width={100}
                                height={30}
                                className="inline-block"
                            />
                            <HiDownload className="text-white text-2xl" />
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    );
};
