import { SignedIn, SignOutButton, OrganizationSwitcher } from "@clerk/nextjs";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";
import "../../app/globals.css";
import {dark} from '@clerk/themes'

function Topbar(){
    const isUserLoggedIn = true;
    return (
        <nav className="topbar">
            <Link href="/"
                className="flex items-center gap-4"
            >
                <Image src="/assets/logo.svg"
                    alt="logo" width={28} height={28}
                />
                <p className="text-heading3-bold text-light-1 max-xs:hidden">
                    Threads
                </p>
            </Link>
            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    {/* Only appear if we are signed in */}
                    {/* Clerk takes care of all those authentications and permissions */}
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image
                                    src="/assets/logout.svg"
                                    alt="Logout"
                                    width={24}
                                    height={24}
                                />

                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>

                <OrganizationSwitcher
                    appearance={{
                        baseTheme: dark,
                        elements: {
                          organizationSwitcherTrigger: "py-2 px-4",
                        },
                      }}
                />
            </div>
        </nav>
    )
}

export default Topbar;