import useSWR from 'swr'
import axios from 'axios'
import Question from '../components/question.js'

const fetcher = url => axios.get(url).then(res => res.data)

export default function Homepage () {
    const { data, error } = useSWR('/api/questions', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const questions = data.map(item => <Question item={item} key={item.question}></Question>);

    return <div>
        <h2>Welcome to daily trivia</h2>
        <p>Questions will reset tomorrow, do other things until then like laundry or naps</p>

        <div>{questions}</div>
    </div>
}