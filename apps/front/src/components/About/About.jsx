import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>About me</h2>
        <hr />
        <p>
          The name's <span className={styles.important}>Tignanelli</span>,{" "}
          <span className={styles.important}>Marco Tignanelli</span>.
          <br />
          Sounded better in my mind, but it is indeed my name. I started
          studying web development by myself around 2020. You know, HTML, CSS,
          javascript, the core stuff. But with the beggining of 2023, I made it
          official by starting my journey on{" "}
          <span className={styles.important}>SoyHenry</span>, where "studying"
          got a whole new meaning, so now I get to do things I didn't thought I
          could.
        </p>
        <p>
          This web page is an example of that. Born with React, routed with
          express and connected to sequelize, this
          <span className={styles.important}> Rick and Morty </span> themed
          project is the first step of my course, heading to get the opportunity
          to collaborate in the development of amazing apps and, who knows?
          Maybe with your team.
        </p>
        <div>
          <a
            href="https://mark-kus.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            Know more
          </a>
        </div>
      </div>
    </div>
  );
}
