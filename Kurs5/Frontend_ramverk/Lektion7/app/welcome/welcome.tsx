import { useState } from "react"
import { CustomCard } from "~/components/CustomCard"
import { BlogCard } from "~/types/BlogCard"


export function Welcome() {

  /* loop in tsx:  1. Array list, 2. Map through list 
  */
const [highscoreList, setHigscoreList] = useState<number[]>(
  [150,250, 500, 1000 ]
)
const [blogCardList, setBlogCardList] = useState<BlogCard[]>([
  {
    title: "Flowers",
    content: "Beautiful flowers..........",
    tags: "#flowers"
  },
  {
    title: "Singular flowers",
    content: "More flowers..........",
    tags: "#Nature"
  },
  

])

  for (let i = 0; i < 5; i++) {}

  // tsx syntax will not return void
  return <div>
    {
    /*highscoreList.map( (value: number, index: number) => (<p>Did this work? {value} {index}</p>) )*/
    }
    {blogCardList.map( ({title, content, tags}) => (
      <CustomCard title={title} content={content} tags={tags} />
    ))}
    
  </div>
}


