import kelsey from "../assets/kelsey.jpg";

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="display-4 fw-bold">Hello!</h1>
      <div className="d-flex flex-row flex-wrap gap-4 justify-content-center align-items-start">
         <img src={kelsey} className="img-fluid rounded-3 shadow" alt="Kelsey White" id="picture" />
         <div id="description">
            <p className="lead mt-3">
                I’m <strong>Kelsey!</strong> I'm a passionate developer studying Computer Science at Dalhousie
                University. Throughout my life I have always had a passion for art and design which has inspired
                my interest in <strong>Front-End</strong> development.
            </p>
            <p className="lead">
                Although Front-end is my main interest, I plan to strengthen my <strong>Back-End</strong> and <strong>Network Security</strong> skills 
                through future study and personal projects. I absolutely love learning
                new skills and one of my favorite things about this field is that you can never truly stop learning! 
            </p>
            <a href="/projects" className="btn-grad">Check out my projects!</a>
        </div>
      </div>
    </section>
  );
}