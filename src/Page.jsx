import { useContext } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";
import { ThemeContext } from "./context";

export default function Page() {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className={`h-full w-full ${darkMode ? "dark" : ""
            }`}>
            <Navbar />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <SideBar />
                    <MovieList />
                </div>
            </main>
            <Footer />
        </div>
    );
}