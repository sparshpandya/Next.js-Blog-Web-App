'use client';
import Image from 'next/image'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react';
import { fetchUserByEmail } from '@/actions/fetchUser';

const protectedRoutes = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Authors', href: '/authors' },
  { name: 'Create Post', href: '/create-post' }
]

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();

  const [user, setUser] = useState({});

  useEffect(() => {
    if (session) {
      // fetching the user object from the db
      fetchUserByEmail(session.user.email).then(result => {
        setUser(result);
      });
    }
  }, [session])

  return (
    <div>
      <header className="eblog-header-area header--sticky">
        <div className="eblog-home-1-menu">
          <div className="eblog-site-main-logo-menu-social">
            <div className="container">
              <div className="row align-items-center plr_md--30 plr_sm--30 plr--10">
                <div className="col-xl-2 col-lg-2 col-md-7 col-sm-7 col-7 p-0">
                  <div className="eblog-site-logo">
                    <Link className="logo-light" href="/"><Image width={300} height={0} src="/images/logo/logo.png" alt="eblog" /></Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                  <nav>
                    <div className="eblog-home-1-menu">
                      <ul className="list-unstyled eblog-desktop-menu">
                        {
                          protectedRoutes && protectedRoutes.length > 0 &&
                          protectedRoutes.map(link => {
                            const isActive = link.href === pathName;
                            return <li key={link.name} className="menu-item"><Link href={link.href} key={link.name} className={isActive ? 'active' : "eblog-dropdown-main-element"}>{link.name}</Link></li>
                          })
                        }
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-5 col-sm-5 col-5 p-0">
                  <div className="eblog-header-top-social-media">
                    {Object.keys(user).length === 0 && (
                      <div class="inline-flex">
                        <Link href='/sign-up' class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                          Sign Up
                        </Link>
                        <Link href='/sign-in' class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                          Sign In
                        </Link>
                      </div>
                    )}
                    <Link href="#" id="search" className="eblog-header-top-search-btn search-icon action-item icon">
                      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1256 16.1458L13.4056 11.7888C14.5398 10.5319 15.1053 8.91973 14.9847 7.28771C14.864 5.65568 14.0663 4.12943 12.7576 3.02647C11.4488 1.9235 9.72983 1.32874 7.95814 1.3659C6.18645 1.40306 4.49849 2.06929 3.2454 3.226C1.9923 4.3827 1.27055 5.94082 1.23029 7.57622C1.19003 9.21162 1.83436 10.7984 3.02924 12.0064C4.22412 13.2145 5.87756 13.9508 7.64558 14.0622C9.41361 14.1736 11.1601 13.6516 12.5218 12.6046L17.2418 16.9616L18.1256 16.1458ZM2.50064 7.73083C2.50064 6.70389 2.83054 5.70001 3.44862 4.84614C4.0667 3.99227 4.94521 3.32676 5.97304 2.93376C7.00088 2.54077 8.13188 2.43795 9.22302 2.63829C10.3142 2.83864 11.3164 3.33316 12.1031 4.05931C12.8898 4.78547 13.4255 5.71065 13.6426 6.71786C13.8596 7.72507 13.7482 8.76907 13.3225 9.71784C12.8967 10.6666 12.1757 11.4775 11.2507 12.0481C10.3257 12.6186 9.23816 12.9231 8.12564 12.9231C6.6343 12.9216 5.20452 12.3741 4.14999 11.4007C3.09545 10.4272 2.50229 9.10745 2.50064 7.73083Z" fill="#1E1E1E" />
                      </svg>
                    </Link>
                    <div className="search-input-area">
                      <div className="container">
                        <div className="search-input-inner">
                          <div className="input-div">
                            <input id="searchInput1" className="search-input" type="text" placeholder="Search by keyword or #" />
                          </div>
                          <div className="search-close-icon"><i className="fa-regular fa-xmark-large rt-xmark"></i></div>
                        </div>
                      </div>
                    </div>
                    <Link href="#" className="cart-bar">
                      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25 17.5382C6.94036 17.5382 7.5 17.0216 7.5 16.3843C7.5 15.7471 6.94036 15.2305 6.25 15.2305C5.55964 15.2305 5 15.7471 5 16.3843C5 17.0216 5.55964 17.5382 6.25 17.5382Z" fill="#1E1E1E" />
                        <path d="M15 17.5382C15.6904 17.5382 16.25 17.0216 16.25 16.3843C16.25 15.7471 15.6904 15.2305 15 15.2305C14.3096 15.2305 13.75 15.7471 13.75 16.3843C13.75 17.0216 14.3096 17.5382 15 17.5382Z" fill="#1E1E1E" />
                        <path d="M17.5 4.26852H3.6375L3.125 1.84544C3.09578 1.71317 3.01724 1.59454 2.90304 1.51021C2.78884 1.42588 2.64622 1.38118 2.5 1.38391H0V2.53775H1.9875L4.375 13.6147C4.40422 13.747 4.48276 13.8656 4.59696 13.9499C4.71116 14.0342 4.85378 14.0789 5 14.0762H16.25V12.9224H5.5125L5 10.6147H16.25C16.3945 10.6179 16.5357 10.5749 16.6497 10.4928C16.7636 10.4108 16.8432 10.2948 16.875 10.1647L18.125 4.97237C18.1459 4.88677 18.1455 4.79788 18.1236 4.71248C18.1017 4.62708 18.059 4.54741 17.9987 4.47954C17.9385 4.41167 17.8622 4.35739 17.7758 4.32082C17.6894 4.28425 17.595 4.26637 17.5 4.26852ZM15.75 9.46083H4.7625L3.8875 5.42237H16.7188L15.75 9.46083Z" fill="#1E1E1E" />
                      </svg>
                    </Link>

                    {session &&
                      <div className="eblog-header-top-menu-bar menu-btn">
                        <img width={50} height={50} src={session.user.image} alt='user image' /> - {user.name}
                        <p>Email: {user.email}</p>
                        <button onClick={() => { signOut({ callbackUrl: '/sign-in' }); }} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                          <span>Sign Out</span>
                        </button>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
