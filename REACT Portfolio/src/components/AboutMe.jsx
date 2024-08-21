import profileImage from "../assets/images/profileImage.png"

export default function AboutMe() {
    return (
        <>
        <div className="sections">
            <div className="portfolioImg">
                <img src={profileImage} alt="Profile Image" />
            </div>
            <div className="aboutMe">
                <h1>About Me</h1>
                <p> I'm an enthusiastic full-stack web developer with a strong foundation in Mongoose DB, Express.js, React, and Node.js. Currently completing a full-stack web development bootcamp, I'm eager to apply my growing skill set to create innovative and user-centric web applications.</p>
            </div>
        </div>
        </>
    )
        
}