import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import EiktecGraphicSVG from "../../public/eiktec-grahic-logo.svg";
import Image from "next/image";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";
// components/Navbar.js
const Navbar = () => {
    const user = null;

    return (
        <nav className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* TODO: MOBILE navigation */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/" className="">
                                    <Image
                                        className="size-20"
                                        priority
                                        src={EiktecGraphicSVG}
                                        alt="logo"
                                    />
                                </Link>
                            </div>

                            <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                                <NavItems />
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null : (
                                        <Link
                                            href="/sign-in"
                                            className={buttonVariants({
                                                variant: "outline",
                                            })}
                                        >
                                            Sign in
                                        </Link>
                                    )}

                                    {user ? null : (
                                        <span
                                            className="h-6 w-px bg-gray-200"
                                            aria-hidden="true"
                                        ></span>
                                    )}

                                    {user ? (
                                        <p></p>
                                    ) : (
                                        <Link
                                            href="/sign-up"
                                            className={buttonVariants({
                                                variant: "ghost",
                                            })}
                                        >
                                            Create Account
                                        </Link>
                                    )}

                                    {user ? (
                                        <span
                                            className="h-6 w-px bg-gray-200"
                                            aria-hidden="true"
                                        ></span>
                                    ) : null}

                                    {user ? null : (
                                        <div className="flex lg:ml-6">
                                            <span
                                                className="h-6 w-px bg-gray-200"
                                                aria-hidden="true"
                                            ></span>
                                        </div>
                                    )}

                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </nav>
    );
};

export default Navbar;
