import { Header } from "@/shared/Header"
import "./Home.scss";

export const Home = () => {
    return (
        <>
            <Header />
            <div>
                <h2 className="text-xl font-semibold">Home</h2>
                <div className="about-section">
                    <h3>About Me</h3>
                    <p>My name is Matt McCortney and I am a senior fullstack software engineer. I have a deep passion \nfor creating quality web and desktop applications, and I have a user-obsessed mindset when it comes to UX/UI design.</p>
                </div>
            </div>
        </>
    )
}