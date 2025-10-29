import Navigation from '../components/navbar';
import HeroSection from '../components/herosection';
import Experience from '../components/experience';
import About from '../components/about';
import Projects from '../components/projects';

export const Home = () => {
    return (
        <div>
            <Navigation />
            <main>
                <HeroSection />
                <About />
                <Experience />
                <Projects />
            </main>
        </div>
    )
}