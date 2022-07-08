import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();
  const [menuCollapse, setMenuCollapse] = useState(false);
  return (
    <div
      className={menuCollapse ? 'sideBar--nav collapse--menu' : 'sideBar--nav'}
    >
      <div
        className="burger--menu"
        onClick={() => setMenuCollapse(!menuCollapse)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="form--site--logo">
        <Image
          src="/images/purple--logo.svg"
          alt=""
          layout="responsive"
          width={206}
          height={46}
        />
      </div>
      <div className="site__nav">
        <ul className="menu__list">
          <li
            className={
              router.pathname == '/Dashboard/home'
                ? 'menu__list--item active--menu'
                : 'menu__list--item'
            }
          >
            <Link href="/Dashboard/home">
              <a>
                <span className="menu--icons">
                  <Image
                    className="menu--icons"
                    src="/images/home-icon.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    className="menu--icons--hover"
                    src="/images/home-icon--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>{' '}
                Home
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span className="menu--icons">
                  <Image
                    className="menu--icons"
                    src="/images/portfolio-menu.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    src="/images/portfolio-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>{' '}
                Portfolio
              </a>
            </Link>
          </li>
          <li
            className={
              router.pathname == '/Dashboard/trade-stocks'
                ? 'menu__list--item active--menu'
                : 'menu__list--item'
            }
          >
            <Link href="/Dashboard/trade-stocks">
              <a>
                <span className="menu--icons">
                  <Image
                    src="/images/trade-menu.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    src="/images/trade-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>{' '}
                Trade
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span className="menu--icons">
                  <Image
                    src="/images/learning-menu.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    src="/images/learning-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>{' '}
                Learning
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span className="menu--icons">
                  <Image
                    src="/images/competition-menu.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    src="/images/competition-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>{' '}
                Competition
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="site__nav--bottom">
        <ul className="menu__list">
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span className="menu--icons">
                  <Image
                    src="/images/notification-menu.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    src="/images/notification-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                Notifications
                <span className="noti--status">New</span>
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span className="menu--icons">
                  <Image
                    src="/images/profile-menu.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    className="menu--icons--hover"
                    src="/images/profile-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                Profile
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="logout">
              <a>
                <span className="menu--icons">
                  <Image
                    src="/images/logout-menu.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    src="/images/logout-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                  />
                </span>
                Logout
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
