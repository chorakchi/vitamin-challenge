import {QuestionsPage} from 'components'
import { mockData as data } from '../src/components/templates/QuestionsPage/QuestionsPage.mock'

export default function Home(props) {
  return <QuestionsPage {...data} data={props.data}
  />
}

// This function gets called at build time on server-side.
// It won't be called on client-side.
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch('http://localhost:3000/api/historical-price')
  const data = await res.json()

  // will receive `data` as a prop at build time
  return {
    props: {
      data,
    },
  }
}