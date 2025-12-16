import Navbar from "../component/Navbar";
import MyArticlePage from "./sub component/myarticle";
import AboutSection from "../component/AboutSection";
import Footer from "../component/Footer";

export default function AuthorPage() {
    return(
        <main>
        <Navbar />
       <MyArticlePage/>
       <AboutSection/>
       <Footer/>
        </main>
    )
}