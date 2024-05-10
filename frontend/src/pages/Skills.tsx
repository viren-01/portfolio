import { useEffect, useState } from 'react'
import '../skills.css'

export default function Skills() {
    const [skills, setSkills] = useState<{name: string, path: string}[]>([])
  
    useEffect(() => {
        let skills = [
            {
                name: 'REACT JS',
                path: 'icon-react.png'
            },
            {
                name: 'NODE JS',
                path: 'icon-node.png'
            },
            {
                name: 'JAVASCRIPT',
                path: 'icon-js.png'
            },
            {
                name: 'TYPESCRIPT',
                path: 'icon-ts.png'
            },
            {
                name: 'REDUX TOOLKIT',
                path: 'icon-redux.png'
            },
            {
                name: 'GRAPH-QL',
                path: 'icon-graphql.png'
            },
            {
                name: 'MYSQL',
                path: 'icon-mysql.png'
            },
            {
                name: 'NOSQL',
                path: 'icon-mongo.png'
            },
            {
                name: 'AWS',
                path: 'icon-aws.png'
            }
        ]
        setSkills(skills)
    }, [])

    return (
        <div className={`skills`}>
            <h1>SKILLS</h1>
            <div className='btn-container'>
                {
                    skills.map((obj: { name: string, path: string }, idx: number) => {
                        let { name, path } = obj
                        return (
                            <div key={name + idx} className='icon-div'>
                                <img src={path} alt={`${name}`}/>
                                <span className="hover-text">{name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}