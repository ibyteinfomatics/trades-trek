import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar(){
  const [menuCollapse, setMenuCollapse] = useState(false);
  return (
    <div className={menuCollapse ? "sideBar--nav collapse--menu" : "sideBar--nav"}>
      <div className="burger--menu" onClick={() => setMenuCollapse(!menuCollapse)}>
        {/* <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.731753V2.52687H20V0.731689L0 0.731753ZM3 7.01462V8.80974H20V7.01462H3ZM7 14.1951V15.9902H20V14.1951H7Z"
            fill="black"
          />
        </svg> */}
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
          <li className="menu__list--item active--menu">
            <Link href="javascript:void(0)">
              <a>
                <span>
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.38318 0.127686C1.15051 0.127686 0.127728 1.15046 0.127728 2.38314V10.2772C0.127728 11.5099 1.15051 12.5327 2.38318 12.5327H8.02182C9.2545 12.5327 10.2773 11.5099 10.2773 10.2772V2.38314C10.2773 1.15046 9.2545 0.127686 8.02182 0.127686H2.38318ZM14.7882 0.127686C13.5555 0.127686 12.5327 1.15046 12.5327 2.38314V5.76632C12.5327 6.999 13.5555 8.02178 14.7882 8.02178H20.4268C21.6595 8.02178 22.6823 6.999 22.6823 5.76632V2.38314C22.6823 1.15046 21.6595 0.127686 20.4268 0.127686H14.7882ZM2.38318 2.38314H8.02182V10.2772H2.38318V2.38314ZM14.7882 2.38314H20.4268V5.76632H14.7882V2.38314ZM14.7882 10.2772C13.5555 10.2772 12.5327 11.3 12.5327 12.5327V20.4268C12.5327 21.6595 13.5555 22.6822 14.7882 22.6822H20.4268C21.6595 22.6822 22.6823 21.6595 22.6823 20.4268V12.5327C22.6823 11.3 21.6595 10.2772 20.4268 10.2772H14.7882ZM14.7882 12.5327H20.4268V20.4268H14.7882V12.5327ZM2.38318 14.7881C1.15051 14.7881 0.127728 15.8109 0.127728 17.0436V20.4268C0.127728 21.6595 1.15051 22.6822 2.38318 22.6822H8.02182C9.2545 22.6822 10.2773 21.6595 10.2773 20.4268V17.0436C10.2773 15.8109 9.2545 14.7881 8.02182 14.7881H2.38318ZM2.38318 17.0436H8.02182V20.4268H2.38318V17.0436Z"
                      fill="#000"
                    />
                  </svg>
                </span>{" "}
                Home
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span>
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.1322 10.1909L22.1323 10.1917C22.1498 10.3914 21.9887 10.5574 21.7925 10.5576L22.1322 10.1909ZM22.1322 10.1909L22.0702 9.5261L22.0702 9.52608C21.8642 7.31921 20.8732 5.23767 19.2794 3.66652C17.6845 2.09256 15.5842 1.11871 13.3412 0.912643L13.341 0.912629L12.6662 0.851328L12.6652 0.851244C12.4696 0.83478 12.2952 0.984481 12.2952 1.18697V10.2426C12.2952 10.4308 12.4498 10.5812 12.636 10.5812L12.6363 10.5812L21.7921 10.5576L22.1322 10.1909ZM11.4984 11.3657H19.8846C20.0707 11.3657 20.2253 11.5161 20.2253 11.7043V12.317V12.3173H20.0753L11.4984 11.3657ZM11.4984 11.3657V3.07542C11.4984 2.88725 11.3438 2.73681 11.1576 2.73681L10.5379 2.73681C10.5379 2.73681 10.5379 2.73681 10.5378 2.73681H10.5377V2.88681C9.28514 2.88479 8.04456 3.12766 6.88731 3.60146C5.73006 4.07526 4.67898 4.77064 3.79455 5.64759M11.4984 11.3657L1.61322 8.58505M3.79455 5.64759L3.68925 5.54076C3.68919 5.54081 3.68914 5.54087 3.68909 5.54092C3.68904 5.54097 3.68898 5.54102 3.68893 5.54107L3.79455 5.64759ZM3.79455 5.64759C2.92354 6.50614 2.22953 7.52385 1.7511 8.64413M1.7511 8.64413L1.61322 8.58505M1.7511 8.64413L1.61315 8.58521C1.61318 8.58516 1.6132 8.5851 1.61322 8.58505M1.7511 8.64413L1.61322 8.58505M1.61322 8.58505C1.10739 9.76561 0.847779 11.0351 0.85001 12.3173M1.61322 8.58505L14.2449 21.172C13.0696 21.6532 11.8097 21.8998 10.5377 21.8978M0.85001 12.3173C0.850011 12.3172 0.850011 12.3171 0.850011 12.3171L1.00001 12.3173L0.850011 12.3176C0.850011 12.3175 0.850011 12.3174 0.85001 12.3173ZM0.85001 12.3173C0.847961 13.5757 1.09756 14.822 1.58442 15.9846C2.07131 17.1472 2.78585 18.2031 3.68685 19.0915C4.57552 19.9701 5.61216 20.6622 6.76496 21.1436C7.95843 21.6435 9.24163 21.9 10.5377 21.8978M10.5377 21.8978C10.5376 21.8978 10.5375 21.8978 10.5374 21.8978L10.5377 21.7478L10.5379 21.8978C10.5378 21.8978 10.5378 21.8978 10.5377 21.8978ZM16.0051 17.7694L16.005 17.7695C15.2807 18.48 14.4217 19.0424 13.4771 19.4242C12.5325 19.8061 11.5209 19.9999 10.5003 19.9946H10.5002C8.43851 19.9854 6.50192 19.1873 5.04453 17.7463C3.57786 16.2961 2.77141 14.3682 2.77141 12.3173C2.77141 10.2664 3.57786 8.33846 5.04453 6.88827C6.28235 5.66436 7.86457 4.90337 9.57697 4.69741V13.1189V13.2689H9.72697H18.2455C18.0345 14.9693 17.2583 16.5414 16.0051 17.7694ZM19.9884 8.66674L14.2118 8.68233V2.96952C15.6155 3.29462 16.9013 3.99964 17.9242 5.007C18.9484 6.01753 19.6631 7.29116 19.9884 8.66674Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.3"
                    />
                  </svg>
                </span>{" "}
                Portfolio
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span>
                  <svg
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75262 13.9054L5.75289 13.9057C5.89683 14.0468 6.12558 14.0445 6.26997 13.9073L6.26998 13.9073L6.27141 13.906L9.94475 10.3221L13.3263 13.6589L13.3267 13.6592C13.4697 13.7994 13.7024 13.7995 13.8454 13.6592C13.8454 13.6592 13.8454 13.6592 13.8454 13.6592L21.37 6.28335L21.37 6.28333C21.5147 6.14147 21.5147 5.90825 21.37 5.76638L20.288 4.70541L20.2875 4.7049C20.2181 4.63754 20.1251 4.60025 20.0287 4.60025C19.9323 4.60025 19.8392 4.63754 19.7698 4.7049L19.7693 4.70539L13.5905 10.7616L10.2146 7.4305L10.2138 7.42966C10.1444 7.3623 10.0513 7.32501 9.9549 7.32501C9.85849 7.32501 9.76542 7.3623 9.69604 7.42966L9.69583 7.42986L4.67398 12.3248L4.67313 12.3256C4.60433 12.3938 4.56518 12.4864 4.56518 12.5836C4.56518 12.6807 4.60432 12.7734 4.67313 12.8415L4.67339 12.8418L5.75262 13.9054ZM21.765 17.7826H3.11721V1.21434C3.11721 1.01085 2.94891 0.85 2.74863 0.85H1.21858C1.0183 0.85 0.85 1.01085 0.85 1.21434V19.6473C0.85 19.8508 1.0183 20.0116 1.21858 20.0116H21.765C21.9653 20.0116 22.1336 19.8508 22.1336 19.6473V18.1469C22.1336 17.9435 21.9653 17.7826 21.765 17.7826Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.3"
                    />
                  </svg>
                </span>{" "}
                Trade
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span>
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4918 3.24836C16.0358 3.24836 19.7352 6.94775 19.7352 11.4918C19.7352 16.0358 16.0358 19.7352 11.4918 19.7352C6.94775 19.7352 3.24835 16.0358 3.24835 11.4918C3.24835 6.94775 6.94775 3.24836 11.4918 3.24836ZM11.4918 0.85C5.61747 0.85 0.849996 5.61748 0.849996 11.4918C0.849996 17.3661 5.61747 22.1336 11.4918 22.1336C17.3661 22.1336 22.1336 17.3661 22.1336 11.4918C22.1336 5.61748 17.3661 0.85 11.4918 0.85Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.3"
                    />
                    <path
                      d="M11.4918 9.54328C12.563 9.54328 13.4401 10.4204 13.4401 11.4916C13.4401 12.5629 12.563 13.44 11.4918 13.44C10.4205 13.44 9.5434 12.5629 9.5434 11.4916C9.5434 10.4204 10.4205 9.54328 11.4918 9.54328ZM11.4918 7.14492C9.09023 7.14492 7.14504 9.09011 7.14504 11.4916C7.14504 13.8932 9.09023 15.8384 11.4918 15.8384C13.8933 15.8384 15.8385 13.8932 15.8385 11.4916C15.8385 9.09011 13.8933 7.14492 11.4918 7.14492Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.3"
                    />
                  </svg>
                </span>{" "}
                Learning
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span>
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1442 6.22261H17.5389C17.8247 5.70902 17.9893 5.12121 17.9893 4.49726C17.9893 2.48103 16.2936 0.85 14.2196 0.85C13.1495 0.85 12.1788 1.28554 11.4918 1.9827C10.8047 1.28554 9.83409 0.85 8.76392 0.85C6.68992 0.85 4.99425 2.48103 4.99425 4.49726C4.99425 5.1208 5.15669 5.70866 5.44383 6.22261H1.83934C1.29714 6.22261 0.849996 6.64734 0.849996 7.18357V12.2521C0.849996 12.4512 1.01649 12.6048 1.20983 12.6048H2.10901V21.1726C2.10901 21.7088 2.55616 22.1336 3.09835 22.1336H19.8852C20.4274 22.1336 20.8746 21.7088 20.8746 21.1726V12.6048H21.7737C21.9671 12.6048 22.1336 12.4512 22.1336 12.2521V7.18357C22.1336 6.64734 21.6864 6.22261 21.1442 6.22261ZM12.5336 4.49726C12.5336 3.60671 13.2851 2.87329 14.2196 2.87329C15.1542 2.87329 15.9057 3.60671 15.9057 4.49726C15.9057 5.38782 15.1542 6.12124 14.2196 6.12124H12.5336V4.49726ZM8.76392 2.87329C9.69844 2.87329 10.45 3.60671 10.45 4.49726V6.12124H8.76392C7.8294 6.12124 7.07786 5.38782 7.07786 4.49726C7.07786 3.60671 7.8294 2.87329 8.76392 2.87329ZM2.9336 10.5815V8.24589H10.45V10.5815H2.9336ZM4.19261 12.6048H10.45V20.1103H4.19261V12.6048ZM18.791 20.1103H12.5336V12.6048H18.791V20.1103ZM20.05 10.5815H12.5336V8.24589H20.05V10.5815Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.3"
                    />
                  </svg>
                </span>{" "}
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
                <span>
                  <svg
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9398 14.6291H17.9742L17.9509 14.4588L17.3571 10.1256C16.865 6.49257 14.0873 3.6615 10.6814 3.12076V2.13542C10.6814 1.47966 10.1455 0.94375 9.48975 0.94375C8.83399 0.94375 8.29809 1.47966 8.29809 2.13542V3.12114C4.89258 3.67168 2.13532 6.49259 1.63282 10.1252L1.6328 10.1254L1.03909 14.4585C0.876978 15.6257 1.22262 16.7949 1.99197 17.6619C2.71741 18.4847 3.74745 18.9625 4.8335 18.9625H5.79807C6.09178 20.7114 7.60348 22.0562 9.43767 22.0562C11.2718 22.0562 12.7835 20.7114 13.0773 18.9625H14.1252C15.2113 18.9625 16.2414 18.4846 16.9668 17.6617L16.9671 17.6614C17.6979 16.8277 18.0467 15.73 17.9398 14.6291ZM15.2526 16.0479H15.2448L15.2 16.0989C14.9246 16.4123 14.5482 16.5895 14.146 16.5895H4.84391C4.44146 16.5895 4.07566 16.4225 3.79022 16.0992C3.48606 15.7472 3.34213 15.2598 3.40913 14.7812L3.40919 14.7808L4.00294 10.4474L4.003 10.447C4.38968 7.56723 6.75858 5.39999 9.50016 5.39999C12.2413 5.39999 14.6004 7.56688 14.9974 10.4475L15.5911 14.7808L15.5912 14.7812C15.655 15.2369 15.5275 15.7007 15.2526 16.0479ZM9.4585 19.6833C8.94727 19.6833 8.51219 19.3943 8.28994 18.9729H10.6271C10.4048 19.3943 9.96974 19.6833 9.4585 19.6833Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.3"
                    />
                  </svg>
                </span>
                Notifications
                <span className="noti--status">New</span>
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span>
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4167 0.85C5.58382 0.85 0.849996 5.58382 0.849996 11.4167C0.849996 17.2495 5.58382 21.9833 11.4167 21.9833C17.2495 21.9833 21.9833 17.2495 21.9833 11.4167C21.9833 5.58382 17.2495 0.85 11.4167 0.85ZM6.33414 17.8176C6.33482 17.8151 6.33552 17.8125 6.33624 17.8098C6.34595 17.7737 6.35833 17.7239 6.35833 17.6667C6.35833 16.6037 7.22867 15.7333 8.29166 15.7333H14.5417C15.6047 15.7333 16.475 16.6037 16.475 17.6667C16.475 17.723 16.4869 17.7747 16.4967 17.8124C16.4972 17.8143 16.4977 17.8161 16.4982 17.8179C15.0975 18.9287 13.3359 19.6 11.4167 19.6C9.49623 19.6 7.73435 18.938 6.33414 17.8176ZM19.6 11.4167C19.6 12.9883 19.1548 14.4596 18.3843 15.7024C17.6656 14.3047 16.2149 13.35 14.5417 13.35H8.29166C6.6188 13.35 5.16836 14.3043 4.44945 15.7015C3.67852 14.4506 3.23333 12.9882 3.23333 11.4167C3.23333 6.90576 6.90576 3.23333 11.4167 3.23333C15.9276 3.23333 19.6 6.90576 19.6 11.4167Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.3"
                    />
                    <path
                      d="M11.4167 3.975C9.03174 3.975 7.1 5.90674 7.1 8.29167C7.1 10.6766 9.03174 12.6083 11.4167 12.6083C13.8016 12.6083 15.7333 10.6766 15.7333 8.29167C15.7333 5.90674 13.8016 3.975 11.4167 3.975ZM11.4167 10.225C10.3537 10.225 9.48333 9.35466 9.48333 8.29167C9.48333 7.22868 10.3537 6.35833 11.4167 6.35833C12.4797 6.35833 13.35 7.22868 13.35 8.29167C13.35 9.35466 12.4797 10.225 11.4167 10.225Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.3"
                    />
                  </svg>
                </span>
                Profile
              </a>
            </Link>
          </li>
          <li className="menu__list--item">
            <Link href="javascript:void(0)">
              <a>
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 18.6278H3.37222V3.37222H11H11.15V3.22222V1V0.85H11H0.999996H0.849996V1V21V21.15H0.999996H11H11.15V21V18.7778V18.6278H11Z"
                      fill="#F45531"
                      stroke="#F45531"
                      stroke-width="0.3"
                    />
                    <path
                      d="M21.1061 11.1062L21.2121 11.0001L21.1061 10.894L16.6616 6.4496L16.4056 6.19353V6.55566V9.739H7.66666H7.51666V9.889V12.1112V12.2612H7.66666H16.4056V15.4446V15.8067L16.6616 15.5506L21.1061 11.1062Z"
                      fill="#F45531"
                      stroke="#F45531"
                      stroke-width="0.3"
                    />
                  </svg>
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