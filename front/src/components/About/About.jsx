import styles from './About.module.css'

export default function About() {
    return (
        <div className={styles.container}>

            <div className={styles.info}>
                <h2>About me</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iure optio ullam, modi aliquid accusamus quidem? Laudantium quidem ullam quis qui dolore eligendi voluptate aspernatur, nam aut impedit, adipisci recusandae?
                    Cumque sint ipsam officiis harum in suscipit fuga est minima soluta, officia mollitia quas reprehenderit, ullam nam sed. Nam veniam magnam odio et. Similique aliquid deserunt at error libero! Eius.
                    Quibusdam ratione quis illo, voluptates laborum perferendis reprehenderit animi delectus aspernatur sit magnam illum ea voluptate quidem quaerat itaque dicta esse beatae necessitatibus eos, molestias mollitia. Dolore quidem saepe maxime.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iure optio ullam, modi aliquid accusamus quidem? Laudantium quidem ullam quis qui dolore eligendi voluptate aspernatur, nam aut impedit, adipisci recusandae?
                    Cumque sint ipsam officiis harum in suscipit fuga est minima soluta, officia mollitia quas reprehenderit, ullam nam sed. Nam veniam magnam odio et. Similique aliquid deserunt at error libero! Eius.
                </p>
                <div>
                    <a href="">Contact me</a>
                    <a href="">Know more</a>
                </div>
            </div>

            <img src="https://i2-prod.irishmirror.ie/incoming/article3014722.ece/ALTERNATES/s1200c/Idris-Elba.jpg" alt="" />

        </div>
    )
}