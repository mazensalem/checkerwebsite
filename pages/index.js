import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [goal, setgoal] = useState({questions: null, pages: null})
  const [questions, setquestions] = useState(0)
  const [pages, setpages] = useState(0)
  const [cnumber, setcnumber] = useState(0)
  const time = []
  return (
    <div>
      <Head>
        <title>solve and win</title>
        <meta name="description" content="click next to retrive the story" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {(goal.questions) ? <div>
          {(cnumber == questions) ? <div>you finished and unlooked {pages} pages</div> : <div>
            
            {(cnumber != 0) ? <input value="pervious" type="button" onClick={()=>setcnumber(cnumber-1)} /> : null}
            you are in number {cnumber}
            <input type="button" value="next" onClick={() => setcnumber(cnumber +1)} />
            </div>}
        </div> : <div>
          <input type="number" placeholder='questions' value={questions} onChange={(e) => setquestions(e.target.value)} />
          <input type="number" placeholder='pages' value={pages} onChange={(e) => setpages(e.target.value)}/>
          {(questions&pages) ? <input value="start" type="button" onClick={() => setgoal({questions, pages})} /> : null}
          </div>}
      </div>
    </div>
  )
}
