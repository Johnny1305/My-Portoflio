import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a passionate web developer and designer coding beautiful websites and apps." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        <div>
          <h5 className="text-spotify-green">I am currently listening to</h5>
          <div className="spotify-widget">
            <iframe 
              src="https://6klabs.com/widget/spotify/0b1052a5efe408cc49d13c35416baf6e62d8d275d1b1faa443f919c99eda1d8b" 
              style={{ width: "350px", marginBottom: "10px", border: "none" }} 
              title="Spotify Now Playing">
            </iframe>
          </div>
          <h5 className="text-spotify-green">on Spotify</h5>
          <Testimonials />
        </div>
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </Page>
  );
}
