import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Home | Techfacts Central',
    description: 'Explore the latest news about technology. Be it gadgets, artificial intelligence or current technology trends, we will keep you updated with our blog section changing everyday.',
    keywords: 'technology news, latest trends, artificial intelligence trends',
    author: 'Sparsh Pandya',
    openGraph: {
        title: 'Home | Techfacts Central',
        description: 'Get information about latest technology, AI and gadgets in just a click.'
    }
}

export default function Home() {
  return (
    <div>
    <section className="eblog-banner-area">
        <div className="banner-inner">
            <div className="swiper tp-bannerSlider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="banner-single banner-bg">
                            <div className="container">
                                <div className="banner-content blog-content">
                                    <p className="sub-title">Freedom</p>
                                    <h2 className="heading-title"><a className="title-animation" href="#">Apple needs a $250 iPhone to boost <br />
                                        sales but it doesn't want to make</a></h2>
                                    <ul className="blog-meta">
                                        <li className="author"><span>BY</span>Elon Mask - 14 Jan, 2024 </li>
                                        <li>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_4238_1228)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4238_1228">
                                                        <rect width="15" height="15" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            3 Minute Read
                                        </li>
                                        <li>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                            </svg>
                                            1.9k views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="banner-single banner-single-2">
                            <div className="container">
                                <div className="banner-content blog-content">
                                    <p className="sub-title">Freedom</p>
                                    <h2 className="heading-title"><a className="title-animation" href="#">5 Efficient Rules How to Organize <br />
                                        Your Working Place Relationship</a></h2>
                                    <ul className="blog-meta">
                                        <li className="author"><span>BY</span>Elon Mask - 14 Jan, 2024 </li>
                                        <li>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_4238_1229)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4238_1229">
                                                        <rect width="15" height="15" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            3 Minute Read
                                        </li>
                                        <li>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                            </svg>
                                            1.9k views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="banner-single banner-single-3">
                            <div className="container">
                                <div className="banner-content blog-content">
                                    <p className="sub-title">Freedom</p>
                                    <h2 className="heading-title"><a className="title-animation" href="#">Apple needs a $250 iPhone to boost <br />
                                        sales but it doesn't want to make</a></h2>
                                    <ul className="blog-meta">
                                        <li className="author"><span>BY</span>Elon Mask - 14 Jan, 2024 </li>
                                        <li>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_4238_1230)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4238_1230">
                                                        <rect width="15" height="15" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            3 Minute Read
                                        </li>
                                        <li>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                            </svg>
                                            1.9k views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </section>
    <section className="eblog-trending-news-area tp-section-gap">
        <div className="container">
            <div className="section-title-area">
                <h3 className="section-title text-center">Trending Now</h3>
            </div>
            <div className="section-inner">
                <div className="swiper tp-trendingSlider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="trending-news-wrapper">
                                <div className="image-area">
                                    <a href="#">
                                        <img src="/images/blog/01.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="content-area">
                                    <ul className="blog-meta">
                                        <li className="author"><span>BY</span>Elon Mask - 14 Jan, 2024 </li>
                                    </ul>
                                    <h6 className="title"><a href="#" className="title-animation">Women in AI: Anna Korhonen studies the intersection</a></h6>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="trending-news-wrapper">
                                <div className="image-area">
                                    <a href="#">
                                        <img src="/images/blog/02.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="content-area">
                                    <ul className="blog-meta">
                                        <li className="author"><span>BY</span>Elon Mask - 14 Jan, 2024 </li>
                                    </ul>
                                    <h6 className="title"><a href="#" className="title-animation">EU could approve Apple’s ‘tap and go’ payment proposal in</a></h6>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="trending-news-wrapper">
                                <div className="image-area">
                                    <a href="#">
                                        <img src="/images/blog/03.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="content-area">
                                    <ul className="blog-meta">
                                        <li className="author"><span>BY</span>Elon Mask - 14 Jan, 2024 </li>
                                    </ul>
                                    <h6 className="title"><a href="#" className="title-animation">Building an Editor by Sharing Code Between Android</a></h6>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="trending-news-wrapper">
                                <div className="image-area">
                                    <a href="#">
                                        <img src="/images/blog/04.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="content-area">
                                    <ul className="blog-meta">
                                        <li className="author"><span>BY</span>Elon Mask - 14 Jan, 2024 </li>
                                    </ul>
                                    <h6 className="title"><a href="#" className="title-animation">Google merges Android and Hardware divisions to drive AI </a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination2"></div>
            </div>
        </div>
    </section>

    <section className="eblog-featured-post-area tp-section-gapBottom">
        <div className="container">
            <div className="section-inner">
                <div className="row g-5 sticky-coloum-wrap">
                    <div className="col-xl-9">
                        <div className="left-side-post-area">
                            <div className="featured-post technology tp-section-gapBottom">
                                <div className="section-title-area">
                                    <h3 className="section-title">Technology</h3>
                                </div>
                                <div className="post-section-inner">
                                    <div className="big-post">
                                        <div className="eblog-featured-news">
                                            <div className="image-area">
                                                <a href="#"><img src="/images/blog/05.jpg" width="533" alt="" /></a>
                                                <p className="tag">Technology</p>
                                                <div className="blog-content">
                                                    <h4 className="heading-title"><a className="title-animation" href="#">Cloud journeys: Jeff Barr on <br /> inspiring cloud industry leaders</a></h4>
                                                    <ul className="blog-meta">
                                                        <li className="author"><span>BY</span>Elon Mask</li>
                                                        <li>
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clipPath="url(#clip0_4238_1231)">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_4238_1231">
                                                                        <rect width="15" height="15" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            3 Minute Read
                                                        </li>
                                                        <li>
                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                                <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                                <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                            </svg>
                                                            1.9k views
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="small-post">
                                        <div className="eblog-post-list-style">
                                            <div className="image-area">
                                                <a href="#"><img src="/images/blog/06.jpg" alt="" /></a>
                                            </div>
                                            <div className="blog-content">
                                                <p className="sub-title">Technology</p>
                                                <h4 className="heading-title"><a className="title-animation" href="#">How Can A Wellness Retreat Help Reconnect You to Your</a></h4>
                                                <ul className="blog-meta">
                                                    <li>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_4238_1232)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_4238_1232">
                                                                    <rect width="15" height="15" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        3 Minute Read
                                                    </li>
                                                    <li>
                                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                            <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                            <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                        </svg>
                                                        1.9k views
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="eblog-post-list-style">
                                            <div className="image-area">
                                                <a href="#"><img src="/images/blog/07.jpg" alt="" /></a>
                                            </div>
                                            <div className="blog-content">
                                                <p className="sub-title">Technology</p>
                                                <h4 className="heading-title"><a className="title-animation" href="#">Two simple techniques to make your release process</a></h4>
                                                <ul className="blog-meta">
                                                    <li>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_4238_1233)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_4238_1233">
                                                                    <rect width="15" height="15" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        3 Minute Read
                                                    </li>
                                                    <li>
                                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                            <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                            <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                        </svg>
                                                        1.9k views
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="eblog-post-list-style">
                                            <div className="image-area">
                                                <a href="#"><img src="/images/blog/08.jpg" alt="" /></a>
                                            </div>
                                            <div className="blog-content">
                                                <p className="sub-title">Technology</p>
                                                <h4 className="heading-title"><a className="title-animation" href="#">How Can A Wellness Retreat Help Reconnect You to Your</a></h4>
                                                <ul className="blog-meta">
                                                    <li>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_4238_1234)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_4238_1234">
                                                                    <rect width="15" height="15" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        3 Minute Read
                                                    </li>
                                                    <li>
                                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                            <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                            <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                        </svg>
                                                        1.9k views
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-post ai tp-section-gapBottom">
                                <div className="section-title-area">
                                    <h3 className="section-title">artificial intelligence</h3>
                                </div>
                                <div className="post-section-top">
                                    <div className="row g-5">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="eblog-featured-news style-sm">
                                                <div className="image-area">
                                                    <a href="#"><img src="/images/blog/09.jpg" alt="" /></a>
                                                    <div className="blog-content">
                                                        <p className="sub-title">Technology</p>
                                                        <h4 className="heading-title"><a className="title-animation" href="#">This camera trades pictures for AI poetry</a></h4>
                                                        <ul className="blog-meta">
                                                            <li className="author"><span>BY</span>Elon Mask</li>
                                                            <li>
                                                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                                    <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                                    <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                                </svg>
                                                                1.9k views
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="eblog-featured-news style-sm">
                                                <div className="image-area">
                                                    <a href="#"><img src="/images/blog/10.jpg" alt="" /></a>
                                                    <div className="blog-content">
                                                        <p className="sub-title">Technology</p>
                                                        <h4 className="heading-title"><a className="title-animation" href="#">Earbuds DevOps tools should be learning in 2024 </a></h4>
                                                        <ul className="blog-meta">
                                                            <li className="author"><span>BY</span>Elon Mask</li>
                                                            <li>
                                                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                                    <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                                    <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                                </svg>
                                                                1.9k views
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="eblog-featured-news style-sm">
                                                <div className="image-area">
                                                    <a href="#"><img src="/images/blog/11.jpg" alt="" /></a>
                                                    <div className="blog-content">
                                                        <p className="sub-title">Technology</p>
                                                        <h4 className="heading-title"><a className="title-animation" href="#">Efficient Rules How to Working Place Relationship </a></h4>
                                                        <ul className="blog-meta">
                                                            <li className="author"><span>BY</span>Elon Mask</li>
                                                            <li>
                                                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                                    <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                                    <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                                </svg>
                                                                1.9k views
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-section-bottom">
                                    <div className="small-post">
                                        <div className="eblog-post-list-style">
                                            <div className="image-area">
                                                <a href="#"><img src="/images/blog/08.jpg" alt="" /></a>
                                            </div>
                                            <div className="blog-content">
                                                <p className="sub-title">Technology</p>
                                                <h4 className="heading-title"><a className="title-animation" href="#">Internal Knowledge Base – A Quick Guide by Bit.ai</a></h4>
                                                <ul className="blog-meta">
                                                    <li>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_4238_1235)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_4238_1235">
                                                                    <rect width="15" height="15" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        3 Minute Read
                                                    </li>
                                                    <li>
                                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                            <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                            <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                        </svg>
                                                        1.9k views
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="eblog-post-list-style">
                                            <div className="image-area">
                                                <a href="#"><img src="/images/blog/12.jpg" alt="" /></a>
                                            </div>
                                            <div className="blog-content">
                                                <p className="sub-title">Technology</p>
                                                <h4 className="heading-title"><a className="title-animation" href="#">How Can A Wellness Retreat Help Reconnect You to Your</a></h4>
                                                <ul className="blog-meta">
                                                    <li>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_4238_1236)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_4238_1236">
                                                                    <rect width="15" height="15" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        3 Minute Read
                                                    </li>
                                                    <li>
                                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                            <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                            <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                        </svg>
                                                        1.9k views
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="eblog-post-list-style">
                                            <div className="image-area">
                                                <a href="#"><img src="/images/blog/13.jpg" alt="" /></a>
                                            </div>
                                            <div className="blog-content">
                                                <p className="sub-title">Technology</p>
                                                <h4 className="heading-title"><a className="title-animation" href="#">Developer Experience(DX): Importance, Metrics</a></h4>
                                                <ul className="blog-meta">
                                                    <li>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_4238_1237)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_4238_1237">
                                                                    <rect width="15" height="15" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        3 Minute Read
                                                    </li>
                                                    <li>
                                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                            <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                            <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                        </svg>
                                                        1.9k views
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="eblog-post-list-style">
                                            <div className="image-area">
                                                <a href="#"><img src="/images/blog/14.jpg" alt="" /></a>
                                            </div>
                                            <div className="blog-content">
                                                <p className="sub-title">Technology</p>
                                                <h4 className="heading-title"><a className="title-animation" href="#">How to Create Wikis Employee
                                                        Onboarding & Training?</a></h4>
                                                <ul className="blog-meta">
                                                    <li>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_4238_1238)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_4238_1238">
                                                                    <rect width="15" height="15" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        3 Minute Read
                                                    </li>
                                                    <li>
                                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                            <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                            <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                        </svg>
                                                        1.9k views
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-post latest-news">
                                <div className="section-title-area">
                                    <h3 className="section-title">Latest News</h3>
                                </div>
                                <div className="small-post latest-news">
                                    <div className="eblog-post-list-style">
                                        <div className="image-area">
                                            <a href="#"><img src="/images/blog/15.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <p className="sub-title">Technology</p>
                                            <h4 className="heading-title"><a className="title-animation" href="#">Top 12 AI Assistants of 2024 for Maximized Potential!</a></h4>
                                            <ul className="blog-meta">
                                                <li>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_4238_1239)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_4238_1239">
                                                                <rect width="15" height="15" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    3 Minute Read
                                                </li>
                                                <li>
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                        <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                        <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                    </svg>
                                                    1.9k views
                                                </li>
                                            </ul>
                                            <p className="desc">At the same time, many technologists appreciate the ability to define their own
                                                learning adventure, especially those with more advanced or niche skill sets...</p>
                                            <a href="#" className="read-more-btn">Read More</a>
                                        </div>
                                    </div>
                                    <div className="eblog-post-list-style">
                                        <div className="image-area">
                                            <a href="#"><img src="/images/blog/16.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <p className="sub-title">Technology</p>
                                            <h4 className="heading-title"><a className="title-animation" href="#">Global smartphone shipments grew 7.8% YoY in Q1 2024: IDC</a></h4>
                                            <ul className="blog-meta">
                                                <li>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_4238_1240)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_4238_1240">
                                                                <rect width="15" height="15" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    3 Minute Read
                                                </li>
                                                <li>
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                        <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                        <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                    </svg>
                                                    1.9k views
                                                </li>
                                            </ul>
                                            <p className="desc">At the same time, many technologists appreciate the ability to define their own
                                                learning adventure, especially those with more advanced or niche skill sets...</p>
                                            <a href="#" className="read-more-btn">Read More</a>
                                        </div>
                                    </div>
                                    <div className="eblog-post-list-style">
                                        <div className="image-area">
                                            <a href="#"><img src="/images/blog/17.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <p className="sub-title">Technology</p>
                                            <h4 className="heading-title"><a className="title-animation" href="#">Stuffcool Revel Magnetic Qi2 15W Wireless Charger launched</a></h4>
                                            <ul className="blog-meta">
                                                <li>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_4238_1241)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_4238_1241">
                                                                <rect width="15" height="15" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    3 Minute Read
                                                </li>
                                                <li>
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                        <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                        <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                    </svg>
                                                    1.9k views
                                                </li>
                                            </ul>
                                            <p className="desc">At the same time, many technologists appreciate the ability to define their own
                                                learning adventure, especially those with more advanced or niche skill sets...</p>
                                            <a href="#" className="read-more-btn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-area">
                                    <a href="#" className="tp-btn btn-primary">Load More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 tp-sticky-column-item">
                        <div className="eblog-right-sidebar">
                            <div className="eblog-right-side-post feature">
                                <p className="title">Feature Post</p>
                                <div className="featured-post sidebar">
                                    <div className="image-area">
                                        <a href="#">
                                            <img src="/images/blog/18.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="blog-meta">
                                            <li>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_4238_1242)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_4238_1242">
                                                            <rect width="15" height="15" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                3 Minute Read
                                            </li>
                                            <li>
                                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="4.17773" width="1.85714" height="8.35714" fill="#1E1E1E" />
                                                    <rect x="11.1426" y="6.96387" width="1.85714" height="5.57143" fill="#1E1E1E" />
                                                    <rect x="5.57227" y="0.463867" width="1.85714" height="12.0714" fill="#1E1E1E" />
                                                </svg>
                                                1.9k views
                                            </li>
                                        </ul>
                                        <h5 className="heading-title"><a className="title-animation" href="#">Efficient Rules to Organize
                                                Your Working Relationship </a></h5>
                                        <p className="author"><em>by</em> Dany</p>
                                        <a href="#" className="read-more-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="eblog-right-side-post popular">
                                <p className="title">Popular Post</p>
                                <div className="small-post">
                                    <div className="eblog-post-list-style">
                                        <div className="image-area">
                                            <a href="#"><img src="/images/blog/19.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <h4 className="heading-title"><a className="title-animation" href="#">Google Pixel 8a surfaces in press renders ahead</a></h4>
                                            <ul className="blog-meta">
                                                <li>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_4238_1243)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_4238_1243">
                                                                <rect width="15" height="15" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    3 Minute Read
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="eblog-post-list-style">
                                        <div className="image-area">
                                            <a href="#"><img src="/images/blog/20.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <h4 className="heading-title"><a className="title-animation" href="#">Samsung, Qualcomm &
                                                    up to produce 20% </a></h4>
                                            <ul className="blog-meta">
                                                <li>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_4238_1244)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_4238_1244">
                                                                <rect width="15" height="15" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    3 Minute Read
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="eblog-post-list-style">
                                        <div className="image-area">
                                            <a href="#"><img src="/images/blog/21.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <h4 className="heading-title"><a className="title-animation" href="#">How Can A Retreat Help
                                                    Reconnect You to Your</a></h4>
                                            <ul className="blog-meta">
                                                <li>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_4238_1245)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_4238_1245">
                                                                <rect width="15" height="15" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    3 Minute Read
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="eblog-post-list-style">
                                        <div className="image-area">
                                            <a href="#"><img src="/images/blog/22.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <h4 className="heading-title"><a className="title-animation" href="#">Slack’s AI tools are now
                                                    available to all paying</a></h4>
                                            <ul className="blog-meta">
                                                <li>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_4238_1246)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z" fill="#1E1E1E" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_4238_1246">
                                                                <rect width="15" height="15" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    3 Minute Read
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="eblog-right-side-post category">
                                <p className="title">Browse Category</p>
                                <div className="category-area">
                                    <ul className="category-wrapper">
                                        <li>
                                            <div className="image-area">
                                                <a href="#"><img src="/images/category/category-01.jpg" alt="" /></a>
                                                <p className="text"><a href="#">Artificial Intelligent</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-area">
                                                <a href="#"><img src="/images/category/category-02.jpg" alt="" /></a>
                                                <p className="text"><a href="#">Bitcoin </a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-area">
                                                <a href="#"><img src="/images/category/category-03.jpg" alt="" /></a>
                                                <p className="text"><a href="#">Gadgets</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="eblog-right-side-post social-area">
                                <p className="title">Follow Me</p>
                                <div className="social-area">
                                    <ul className="social-wrapper">
                                        <li>
                                            <a href="#">
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.3166 2.21191H2.98031C2.82634 2.21306 2.67901 2.27473 2.57013 2.38361C2.46125 2.49248 2.39958 2.63982 2.39844 2.79379V12.13C2.39958 12.284 2.46125 12.4313 2.57013 12.5402C2.67901 12.6491 2.82634 12.7108 2.98031 12.7119H8.00719V8.65191H6.64219V7.06379H8.00719V5.89566C8.00719 4.53941 8.83406 3.80004 10.0503 3.80004C10.4572 3.80004 10.8641 3.80004 11.2709 3.86129V5.27441H10.4353C9.77469 5.27441 9.64781 5.58941 9.64781 6.04879V7.05941H11.2228L11.0172 8.64754H9.64781V12.7119H12.3166C12.4705 12.7108 12.6179 12.6491 12.7267 12.5402C12.8356 12.4313 12.8973 12.284 12.8984 12.13V2.79379C12.8973 2.63982 12.8356 2.49248 12.7267 2.38361C12.6179 2.27473 12.4705 2.21306 12.3166 2.21191Z" fill="#00C89A" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.76988 3.1885C9.21631 3.16321 9.05023 3.15788 7.64844 3.15788V3.15783C6.24664 3.15783 6.08057 3.16321 5.527 3.18846C5.19408 3.19242 4.86432 3.25357 4.55212 3.36923C4.32571 3.4566 4.12009 3.59039 3.94849 3.762C3.77689 3.9336 3.64311 4.13922 3.55576 4.36564C3.44009 4.67784 3.37894 5.0076 3.37498 5.34052C3.34969 5.89409 3.34436 6.06016 3.34436 7.46196C3.34436 8.86375 3.34974 9.02983 3.37498 9.5834C3.37894 9.91631 3.44009 10.2461 3.55576 10.5583C3.64312 10.7847 3.7769 10.9903 3.9485 11.1619C4.1201 11.3335 4.32571 11.4673 4.55212 11.5546C4.86432 11.6703 5.19408 11.7315 5.527 11.7354C6.08052 11.7607 6.24651 11.766 7.64844 11.766C9.05036 11.766 9.21635 11.7607 9.76988 11.7354C10.1028 11.7315 10.4326 11.6703 10.7448 11.5546C10.9712 11.4673 11.1768 11.3335 11.3484 11.1619C11.52 10.9903 11.6538 10.7847 11.7411 10.5583C11.8568 10.2461 11.9179 9.91631 11.9219 9.5834C11.9472 9.02983 11.9525 8.86375 11.9525 7.46196C11.9525 6.06016 11.9471 5.89409 11.9219 5.34052C11.9179 5.0076 11.8568 4.67784 11.7411 4.36564C11.6538 4.13923 11.52 3.93362 11.3484 3.76202C11.1768 3.59042 10.9712 3.45664 10.7448 3.36928C10.4326 3.25361 10.1028 3.19246 9.76988 3.1885ZM5.48386 2.2435C6.04382 2.21795 6.22263 2.21191 7.64844 2.21191C9.07425 2.21191 9.25306 2.21795 9.81279 2.24372C10.2483 2.25244 10.6792 2.33496 11.0872 2.48776C11.436 2.62262 11.7527 2.82886 12.0172 3.09326C12.2816 3.35767 12.4879 3.6744 12.6228 4.02316C12.7756 4.43104 12.8581 4.86187 12.8668 5.29734C12.8924 5.8573 12.8984 6.0361 12.8984 7.46191C12.8984 8.88773 12.8924 9.06653 12.8671 9.62627C12.8583 10.0618 12.7758 10.4927 12.623 10.9007C12.4881 11.2495 12.2819 11.5662 12.0174 11.8307C11.753 12.0951 11.4362 12.3014 11.0874 12.4363C10.6795 12.5891 10.2486 12.6716 9.81301 12.6803C9.25306 12.7059 9.07425 12.7119 7.64844 12.7119C6.22263 12.7119 6.04382 12.7059 5.48408 12.6805C5.04854 12.6718 4.61764 12.5893 4.20969 12.4365C3.86088 12.3016 3.54411 12.0953 3.27967 11.8309C3.01522 11.5665 2.80895 11.2497 2.67406 10.9009C2.52126 10.4929 2.43875 10.062 2.43002 9.62649C2.40447 9.06653 2.39844 8.88773 2.39844 7.46191C2.39844 6.0361 2.40447 5.8573 2.43002 5.29756C2.43874 4.86202 2.52126 4.43111 2.67406 4.02316C2.80895 3.67436 3.01522 3.35759 3.27967 3.09314C3.54411 2.8287 3.86088 2.62243 4.20969 2.48754C4.61757 2.33476 5.0484 2.25224 5.48386 2.2435ZM10.4509 5.28942C10.7988 5.28942 11.0809 5.00736 11.0809 4.65942C11.0809 4.31148 10.7988 4.02942 10.4509 4.02942C10.1029 4.02942 9.82088 4.31148 9.82088 4.65942C9.82088 5.00736 10.1029 5.28942 10.4509 5.28942ZM7.64842 4.76599C7.11521 4.76599 6.59398 4.92411 6.15063 5.22034C5.70728 5.51658 5.36173 5.93763 5.15768 6.43025C4.95363 6.92288 4.90024 7.46494 5.00426 7.98791C5.10829 8.51088 5.36505 8.99125 5.74209 9.36829C6.11913 9.74532 6.5995 10.0021 7.12247 10.1061C7.64543 10.2101 8.1875 10.1567 8.68013 9.9527C9.17275 9.74865 9.5938 9.4031 9.89004 8.95975C10.1863 8.5164 10.3444 7.99516 10.3444 7.46195C10.3444 6.74694 10.0603 6.06121 9.55476 5.55562C9.04917 5.05003 8.36344 4.76599 7.64842 4.76599ZM7.64842 9.21195C7.30231 9.21195 6.96396 9.10932 6.67618 8.91703C6.38839 8.72473 6.16409 8.45142 6.03164 8.13165C5.89918 7.81188 5.86453 7.46001 5.93205 7.12055C5.99957 6.78108 6.16625 6.46926 6.41099 6.22452C6.65573 5.97977 6.96755 5.8131 7.30702 5.74558C7.64648 5.67806 7.99835 5.71271 8.31812 5.84516C8.63789 5.97762 8.9112 6.20192 9.1035 6.48971C9.29579 6.77749 9.39843 7.11584 9.39843 7.46195C9.39843 7.92608 9.21405 8.3712 8.88586 8.69939C8.55767 9.02758 8.11255 9.21195 7.64842 9.21195Z" fill="white" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_4219_1420)">
                                                        <path d="M6.57925 4.69623L10.2219 0.461914H9.35873L6.19579 4.13851L3.66956 0.461914H0.755859L4.57601 6.02158L0.755859 10.4619H1.61911L4.95925 6.5793L7.62713 10.4619H10.5408L6.57904 4.69623H6.57925ZM5.39691 6.07056L5.00985 5.51695L1.93015 1.11175H3.25604L5.7414 4.66688L6.12846 5.2205L9.35913 9.84163H8.03324L5.39691 6.07078V6.07056Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_4219_1420">
                                                            <rect width="10" height="10" fill="white" transform="translate(0.648438 0.461914)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.5156 4.51355C13.4459 4.25457 13.3094 4.01844 13.1198 3.8288C12.9301 3.63915 12.694 3.50264 12.435 3.43293C11.4813 3.1748 7.64877 3.1748 7.64877 3.1748C7.64877 3.1748 3.81627 3.1748 2.86252 3.43293C2.60353 3.50264 2.3674 3.63915 2.17776 3.8288C1.98811 4.01844 1.8516 4.25457 1.78189 4.51355C1.60381 5.48623 1.51738 6.47348 1.52377 7.46231C1.51738 8.45113 1.60381 9.43838 1.78189 10.4111C1.8516 10.67 1.98811 10.9062 2.17776 11.0958C2.3674 11.2855 2.60353 11.422 2.86252 11.4917C3.81627 11.7498 7.64877 11.7498 7.64877 11.7498C7.64877 11.7498 11.4813 11.7498 12.435 11.4917C12.694 11.422 12.9301 11.2855 13.1198 11.0958C13.3094 10.9062 13.4459 10.67 13.5156 10.4111C13.6937 9.43838 13.7801 8.45113 13.7738 7.46231C13.7801 6.47348 13.6937 5.48623 13.5156 4.51355ZM6.42377 9.29981V5.6248L9.60439 7.46231L6.42377 9.29981Z" fill="white" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.64775 1.33691C6.22774 1.34658 4.8552 1.84936 3.76495 2.75924C2.67469 3.66912 1.93446 4.92956 1.67089 6.32493C1.40732 7.7203 1.63679 9.16391 2.32003 10.4088C3.00328 11.6537 4.09785 12.6224 5.4165 13.1494C5.32788 12.5694 5.32788 11.9794 5.4165 11.3994L6.13838 8.33691C6.02414 8.05956 5.96757 7.76184 5.97213 7.46191C5.97213 6.61316 6.4665 5.97441 7.079 5.97441C7.18996 5.97275 7.29997 5.99508 7.40149 6.03989C7.50302 6.0847 7.59365 6.15092 7.6672 6.23402C7.74074 6.31712 7.79546 6.41514 7.82759 6.52136C7.85973 6.62757 7.86852 6.73948 7.85338 6.84941C7.85338 7.37441 7.52088 8.16191 7.34588 8.88816C7.30821 9.0236 7.30373 9.16612 7.33282 9.30366C7.36191 9.44119 7.42371 9.5697 7.51298 9.67829C7.60226 9.78688 7.71639 9.87236 7.8457 9.9275C7.97502 9.98263 8.11571 10.0058 8.25588 9.99504C9.34088 9.99504 10.1809 8.84441 10.1809 7.19066C10.1918 6.85461 10.1325 6.51998 10.0069 6.20811C9.88125 5.89623 9.69199 5.61397 9.45117 5.37933C9.21036 5.14469 8.92328 4.96282 8.60825 4.84532C8.29322 4.72783 7.95716 4.67728 7.6215 4.69691C7.26314 4.68152 6.90539 4.73901 6.56989 4.86589C6.2344 4.99276 5.92813 5.1864 5.66964 5.43508C5.41115 5.68375 5.20581 5.98229 5.06604 6.31263C4.92627 6.64297 4.85499 6.99823 4.8565 7.35691C4.85164 7.8566 5.00476 8.34505 5.294 8.75254C5.31503 8.77592 5.33002 8.80409 5.33764 8.8346C5.34527 8.8651 5.34531 8.89701 5.33775 8.92754C5.28963 9.12004 5.18463 9.54004 5.16713 9.62316C5.14963 9.70629 5.07525 9.75879 4.9615 9.70629C4.19588 9.34754 3.719 8.23191 3.719 7.33066C3.719 5.40129 5.12338 3.62504 7.76588 3.62504C9.88775 3.62504 11.5415 5.13879 11.5415 7.16441C11.5415 9.27316 10.229 10.9707 8.36088 10.9707C8.08701 10.9802 7.8151 10.9212 7.56985 10.7989C7.32459 10.6767 7.11376 10.4951 6.9565 10.2707L6.57588 11.7275C6.39342 12.2937 6.13748 12.8335 5.81463 13.3332C6.40953 13.509 7.02746 13.5945 7.64775 13.5869C9.2722 13.5869 10.8301 12.9416 11.9788 11.7929C13.1274 10.6443 13.7728 9.08637 13.7728 7.46191C13.7728 5.83746 13.1274 4.27955 11.9788 3.13088C10.8301 1.98222 9.2722 1.33691 7.64775 1.33691Z" fill="white" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="eblog-right-side-post newsletter">
                                <p className="title">Subscribe News Letter</p>
                                <div className="newsletter-area">
                                    <form action="#">
                                        <div className="form-inner">
                                            <div className="single-input-wrapper">
                                                <input type="email" name="email" placeholder="Your mail address" required />
                                            </div>
                                            <div className="single-input-wrapper">
                                                <button type="submit" className="subscribe-btn tp-btn">Subscribe</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="eblog-right-side-post ad">
                                <div className="eblog-ad-area">
                                    <img src="/images/banner/ad.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}
