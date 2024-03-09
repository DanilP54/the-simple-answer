import Answer from "./GifAnswer";
import InputForQuestion from "./InputForQuestion";
import { useFetchImageAnswer } from "../../hooks/useFetchImageAnswer";


const MainFunctional = () => {
    
    const {data, isLoading, error, getResultAnswer} = useFetchImageAnswer()

    return (
        <main style={{
            maxWidth: '70%',
            height: '100%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px',
            
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',   
                flex: '1 1 0',
            }}>
                <Answer data={data} isLoading={isLoading} />
            </div>
            <InputForQuestion getResultAnswer={getResultAnswer} />
        </main>
    )
}

export default MainFunctional;