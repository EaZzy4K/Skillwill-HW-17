import { useParams } from "react-router-dom"

const data = [
    {factId:1, fact: 'Valeri comes first'},
    {factId:2, fact: 'Valeri teaches chess'},
    {factId:3, fact: 'Valeri has a gang name - Pavle'},
]

const ParamPage = () => {
    const param = useParams()

    const facts = data.find(fact => fact.factId == param.factId)
    if(!facts){
        return <div>Fact not found</div>
    }
    return (
        <div>
            <h1>{facts.fact}</h1>
            <h2>Param route (Dynamic)</h2>
        </div>
    )
}

export default ParamPage