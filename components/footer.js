//footer
//github link to source code
//name
//contact email
//tagline

import styles from './css-modules/footer.module.css'

export default function Footer () {
    return (
        <div>
            <figure className={styles.text}>
                <blockquote className="blockquote">
                    <p>Too many people have opinions on things they know nothing about. And the more ignorant they are, the more opinions they have.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    <cite title="Source Title">Fallout: New Vegas</cite>
                </figcaption>
            </figure>
            
        </div>
    )
    
}