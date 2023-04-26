import { useNavigate } from "react-router-dom";

function Urses(){
    const Navigate = useNavigate()

    function handleClick(){
        navigate('/')
    }

    return (
        <section>
            <p>
                Voltar para a <button onClick={handleClick}>Home</button>
            </p>Urses
            <h1></h1>
        </section>
    )
}

export default Urses