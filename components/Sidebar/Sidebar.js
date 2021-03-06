import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Stocks } from '../../actions/stocks';
import socketIOClient from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { setStockLists } from '../../actions/stocks';
import { slide as Menu } from 'react-burger-menu';
import { setUser } from '../../actions/users';
import {userService} from '../../services/user.service'

const ENDPOINT = 'http://localhost:3232';

export default function Sidebar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [menuCollapse, setMenuCollapse] = useState(false);
  let { user } = useSelector((state) => state.userWrapper);
  

  useEffect(() => {
    userService.userInfo().then((res)=>{
      dispatch(setUser(res.message));

    }).catch((err)=>{
      console.log(err)
    })

  }, []);

  const Login = async () => {};

  return (
    <>
      <div
        className={
          menuCollapse
            ? "sideBar--nav collapse--menu desktop--menu"
            : "sideBar--nav desktop--menu"
        }
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
              router.pathname == '/dashboard/home'
                ? 'menu__list--item active--menu'
                : 'menu__list--item'
            }
          >
            <Link href="#">
              <a>
                <span className="menu--icons">
                  <Image
                    className="menu--icons"
                    src="/images/home-icon.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                    alt={'Home'}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    className="menu--icons--hover"
                    src="/images/home-icon--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                    alt={'Home'}
                  />
                </span>{' '}
                Home
                {/* <p onClick={() => Login()}>Time </p> */}
              </a>
            </Link>
          </li>
          <li  className={
              router.pathname == '/dashboard/portfolio'
                ? 'menu__list--item active--menu'
                : 'menu__list--item'
            }>
            <Link href="/dashboard/portfolio">
              <a>
                <span className="menu--icons">
                  <Image
                    className="menu--icons"
                    src="/images/portfolio-menu.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                    alt={'Portfolio'}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    src="/images/portfolio-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                    alt={'Portfolio'}
                  />
                </span>{' '}
                Portfolio
              </a>
            </Link>
          </li>
          <li
            className={
              router.pathname == '/dashboard/trade-stocks'
                ? 'menu__list--item active--menu'
                : 'menu__list--item'
            }
          >
            <Link href="/dashboard/trade-stocks">
              <a>
                <span className="menu--icons">
                  <Image
                    src="/images/trade-menu.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                    alt={'Trade'}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    src="/images/trade-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                    alt={'Trade'}
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
                    alt={'Learning'}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    src="/images/learning-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                    alt={'Learning'}
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
                    alt={'Competition'}
                  />
                </span>
                <span className="menu--icons--hover">
                  <Image
                    src="/images/competition-menu--hover.svg"
                    layout="responsive"
                    width={24}
                    height={24}
                    alt={'Competition'}
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
                      alt={"Notification"}
                    />
                  </span>
                  <span className="menu--icons--hover">
                    <Image
                      src="/images/notification-menu--hover.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Notification"}
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
                      alt={"Profile"}
                    />
                  </span>
                  <span className="menu--icons--hover">
                    <Image
                      className="menu--icons--hover"
                      src="/images/profile-menu--hover.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Profile"}
                    />
                  </span>
                  Profile
                </a>
              </Link>
            </li>
            <li className="menu__list--item">
              <Link href="/logout">
                <a>
                  <span className="menu--icons">
                    <Image
                      src="/images/logout-menu.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Logout"}
                    />
                  </span>
                  <span className="menu--icons--hover">
                    <Image
                      src="/images/logout-menu--hover.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Logout"}
                    />
                  </span>
                  Logout
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile--menu">
        <div className="form--site--logo">
          <Image
            src="/images/purple--logo.svg"
            alt=""
            layout="responsive"
            width={206}
            height={46}
          />
        </div>
        <Menu right>
        <ul className="menu__list">
            <li
              className={
                router.pathname == "/dashboard/home"
                  ? "menu__list--item active--menu"
                  : "menu__list--item"
              }
            >
              <Link href="#">
                <a>
                  <span className="menu--icons">
                    <Image
                      className="menu--icons"
                      src="/images/home-icon.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Home"}
                    />
                  </span>
                  <span className="menu--icons--hover">
                    <Image
                      className="menu--icons--hover"
                      src="/images/home-icon--hover.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Home"}
                    />
                  </span>{" "}
                  Home
                  <p onClick={() => Login()}>Time</p>
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
                      alt={"Portfolio"}
                    />
                  </span>
                  <span className="menu--icons--hover">
                    <Image
                      src="/images/portfolio-menu--hover.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Portfolio"}
                    />
                  </span>{" "}
                  Portfolio
                </a>
              </Link>
            </li>
            <li
              className={
                router.pathname == "/dashboard/trade-stocks"
                  ? "menu__list--item active--menu"
                  : "menu__list--item"
              }
            >
              <Link href="/dashboard/trade-stocks">
                <a>
                  <span className="menu--icons">
                    <Image
                      src="/images/trade-menu.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Trade"}
                    />
                  </span>
                  <span className="menu--icons--hover">
                    <Image
                      src="/images/trade-menu--hover.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Trade"}
                    />
                  </span>{" "}
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
                      alt={"Learning"}
                    />
                  </span>
                  <span className="menu--icons--hover">
                    <Image
                      src="/images/learning-menu--hover.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Learning"}
                    />
                  </span>{" "}
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
                      alt={"Competition"}
                    />
                  </span>
                  <span className="menu--icons--hover">
                    <Image
                      src="/images/competition-menu--hover.svg"
                      layout="responsive"
                      width={24}
                      height={24}
                      alt={"Competition"}
                    />
                  </span>{" "}
                  Competition
                </a>
              </Link>
            </li>
          </ul>
        </Menu>
      </div>
    </>
  );
}
