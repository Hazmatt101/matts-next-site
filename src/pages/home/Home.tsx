import { Header } from "@/shared/header/Header";
import "./Home.scss";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="page-title">
        <h1 className="text-2xl font-bold">Matt McCortney</h1>
        <h4 className="text-l">
          Senior Full-stack/Frontend/Backend Software Engineer with over 6 years
          of experience in developing and optimizing scalable software
          solutions. Passionate about driving innovation and delivering
          high-quality results.
        </h4>
      </div>
      <div>
        <div className="about-section">
          <h3>About Me</h3>
          <p>
            My name is Matt McCortney and I am a senior full-stack software
            engineer. I have a deep passion for creating quality web and
            desktop applications, and I have a user-obsessed mindset when it
            comes to UX/UI design and development.
          </p>
        </div>
      </div>
    </>
  );
};
