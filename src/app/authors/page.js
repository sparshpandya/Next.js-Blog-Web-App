import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { Loader } from "@/Components/Loader";
import SocialIcons from "@/Components/sidebar/SocialIcons";

export const metadata = {
  title: "Authors | Techfacts Central",
  description:
    "Meet the authors of our amazing blogs, get to know about them, contact them and explore their other blogs and projects - techfacts central.",
  keywords:
    "techfacts central, techfacts central authors, techfacts blog details",
  author: "Sparsh Pandya",
  openGraph: {
    title: "Author | Techfacts Central",
    description: "Meet the authors of our amazing blogs - techfacts central.",
  },
};

export default function Authors() {
  return (
    <div>
      <section className="eblog-author-area tp-section-gap2Top">
        <div className="container">
          <div className="section-inner">
            <Loader>
              <div className="image-area">
                <Image
                  src="/images/banner/author.png"
                  width={307}
                  height={0}
                  alt="Author's Image"
                />
              </div>
            </Loader>
            <div className="content-area">
              <h3 className="heading-title">Sparsh Pandya</h3>
              <p className="desc">
                Hello! I am Sparsh, I am from Ahmedabad, Gujarat, India and I
                write blogs about current technology trends. I am a full-stack
                developer and I make web applications using technolgies like
                React.js and Next.js for client and server side rendering and
                search engine optimisation, tailwind css and next ui for UI
                designing and excellent user interface, Node.js, Express.js and
                MongoDB for API integration, data fetching and database
                management.
              </p>
              <p className="post">21 Posts</p>
              {/* Social Icons Component */}
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
