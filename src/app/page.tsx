// src/app/page.tsx
import Navigation from './components/Navbar';
import './styles/page.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-background"></div>
            <Navigation />
        </div>
    );
}