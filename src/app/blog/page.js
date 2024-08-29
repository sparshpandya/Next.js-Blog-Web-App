import Image from 'next/image'
import Link from 'next/link'
import { read } from 'fs';
import NewsLetter from '@/Components/NewsLetter';
import Sidebar from '@/Components/sidebar/Sidebar';
import { fetchPosts } from '@/actions/fetchPosts';

export const metadata = {
    title: 'Blog | Techfacts Central',
    description: 'Explore hot topics, blogs related to gadgets, artificial intelligence and current technology trends - techfacts central.',
    keywords: 'techfacts central blogs, latest technology trends, technology posts',
    author: 'Sparsh Pandya',
    openGraph: {
        title: 'Blog | Techfacts Central',
        description: 'Explore our blog page and get engaged with new blogs everyday - techfacts central.'
    }
}

export default async function Blog() {
    const allPosts = await fetchPosts();
    return (
        <>
            <section className="eblog-featured-post-area area-2 tp-section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="row g-5 sticky-coloum-wrap">
                            <div className="col-xl-9">
                                <div className="left-side-post-area">
                                    <div className="featured-post area-2">
                                        <div className="post-section-inner">
                                            <div className="row g-5">
                                                <div className="col-lg-12">
                                                    <div className="eblog-featured-news style-two big">
                                                        {allPosts && allPosts.length > 0 ? (
                                                            allPosts.map(post => {
                                                                const {
                                                                    id,
                                                                    name,
                                                                    title,
                                                                    category,
                                                                    readingTime,
                                                                    date,
                                                                    image,
                                                                    description
                                                                } = post;

                                                                return (
                                                                    <>
                                                                        <div className="image-area">
                                                                            <Link href={`/blog/${id}`}><img height={0} width={983} src={`/images/blog/${image}`} alt={`${name} Post Image`} /></Link>
                                                                            <p className="tag">{category}</p>
                                                                        </div>
                                                                        <div className="blog-content">
                                                                            <ul className="blog-meta">
                                                                                <li className="author"><span>BY</span>{name.toUpperCase()} - {date} </li>
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
                                                                                    {readingTime}
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
                                                                            <h4 className="heading-title"><Link className="title-animation text-center" href="#">{title} - {category}</Link></h4>
                                                                            <Link href={`/blog/${id}`} className="text-btn color-two">Continue Reading</Link>
                                                                        </div>
                                                                    </>
                                                                )
                                                            })
                                                        ) : (<p>No Posts</p>)}
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="button-area">
                                                        <Link href="#" className="tp-btn btn-secondary m-auto">Load More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar Component */}
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
            {/* NewsLetter Component */}
            <NewsLetter />
        </>
    )
}
