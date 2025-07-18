import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png"; // Optional if not using postimg image

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sudeep Kumar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate full-stack developer with a strong foundation in
            front-end and back-end technologies. Skilled in building efficient,
            responsive web applications using the MERN stack, I also have
            experience with cloud platforms like AWS, database management,
            operating systems, and modern coding practices. My expertise spans
            across software development, cloud computing, and scalable system
            design, allowing me to deliver complete end-to-end solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1QWRpRMAoLDSkH3JbGkDFXtcF9CZtimll/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src="https://i.postimg.cc/3wHMPVWP/1724851610177.jpg"
              alt="Sudeep Kumar"
              className="w-full h-full rounded-full object-cover scale-90 drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
