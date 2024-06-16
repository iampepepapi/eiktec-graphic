import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import EiktecGraphicSVG from "../../public/eiktec-graphic-logo.svg";
import Image from "next/image";
import NavItems from "./NavItems";
import { Button, buttonVariants } from "./ui/button";
import Cart from "./Cart";
import {
    LoginLink,
    RegisterLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";
import MobileNav from "./MobileNav";
// components/Navbar.js
async function Navbar() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <nav className="hello sticky inset-x-0 top-0 z-50 h-16 bg-white">
            <header className="relative">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <div className="flex w-full justify-between">
                                <div className="ml-4 flex lg:ml-0">
                                    <Link href="/" className="w-20">
                                        <Image
                                            className="object-cover"
                                            priority
                                            src={EiktecGraphicSVG}
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                                <MobileNav />
                            </div>
                            <div className="z-50 hidden lg:ml-8 lg:mr-4 lg:block lg:self-stretch">
                                <NavItems />
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {(await isAuthenticated()) ? (
                                        <>
                                            <UserNav
                                                email={user?.email as string}
                                                image={user?.picture as string}
                                                name={
                                                    user?.given_name as string
                                                }
                                            />
                                        </>
                                    ) : (
                                        <LoginLink>
                                            <Button
                                                className={buttonVariants({
                                                    variant: "outline",
                                                    className: "text-primary",
                                                })}
                                            >
                                                Sign in
                                            </Button>
                                        </LoginLink>
                                    )}

                                    {(await isAuthenticated()) ? null : (
                                        <span
                                            className="h-6 w-px bg-foreground"
                                            aria-hidden="true"
                                        ></span>
                                    )}

                                    {(await isAuthenticated()) ? (
                                        <p></p>
                                    ) : (
                                        <RegisterLink>
                                            <Button
                                                className={buttonVariants({
                                                    variant: "default",
                                                })}
                                            >
                                                Create Account
                                            </Button>
                                        </RegisterLink>
                                    )}

                                    {(await isAuthenticated()) ? (
                                        <span
                                            className="h-6 w-px bg-gray-200"
                                            aria-hidden="true"
                                        ></span>
                                    ) : null}

                                    {(await isAuthenticated()) ? null : (
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
}

export default Navbar;
