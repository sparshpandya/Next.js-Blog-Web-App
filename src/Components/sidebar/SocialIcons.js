"use client";
import { FacebookIcon, FacebookShareButton, InstagramIcon, LinkedinIcon, LinkedinShareButton, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "next-share";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SocialIcons() {
    const pathName = usePathname();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const link = `${baseUrl}${pathName}`;
    
    return (
        <>
            <div className="eblog-right-side-post social-area">
                <div className="social-area area-2">
                    <ul className="social-wrapper">
                        <li>
                            <FacebookShareButton url={link}>
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                        </li>
                        <li>
                            <FacebookShareButton url={link}>
                                <InstagramIcon size={32} round />
                            </FacebookShareButton>
                        </li>
                        <li>
                            <LinkedinShareButton url={link}>
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                        </li>
                        <li>
                            <TwitterShareButton url={link}>
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                        </li>
                        <li>
                            <WhatsappShareButton url={link}>
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                        </li>
                        <li>
                            <PinterestShareButton url={link}>
                                <PinterestIcon size={32} round />
                            </PinterestShareButton>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}