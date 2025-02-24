import type { BlogCard } from "~/types/BlogCard"
import styles from "./card-quote.module.css"

export function CustomCard(props: BlogCard) {
 return (
   <main className={styles.mainContainer}>
     <section className={styles.sectionContainer}>
       <h1>{props.title}</h1>
       <p>
         {props.content}
       </p>

       <footer>{props.tags}</footer>
     </section>

     <img
       className={styles.articleImage}
       src="https://hips.hearstapps.com/hmg-prod/images/sacred-lotus-gettyimages-1143403162-646fa5a441f5d.jpg?crop=0.535xw:1.00xh;0.0519xw,0&resize=980:*"
       alt="loading..."
     />
   </main>
 )
}