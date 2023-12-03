import './_banner.scss';

export const Banner = () => {
  return (
    <section id="home" className="banner">
      <h3>Hi, my name is </h3>
      <h1>
        Adam BenMessaoud.<span> I build things for the web.</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        tempore! Recusandae quisquam at quae minima! Enim quisquam sed facilis
        dolore accusamus blanditiis dolorem. Adipisci hic optio dolor autem
        inventore nihil.
        <a href="#" target="_blank">
          <span>
            Learn More
            <span className="liner"></span>
          </span>
        </a>
      </p>
      <a href="#">
        <button> Check out my Projects!</button>
      </a>
    </section>
  );
};
