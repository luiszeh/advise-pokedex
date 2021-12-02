import '../styles/Content.css';
import { InputGroup, FormControl } from 'react-bootstrap';

export default function Content() {
    return (
        <div className="Content">
            <div className="Content-left">
                
            </div>
            <div className="Content-right">
                <div className="First-content-right">
                    <div className="First-content-right-texts">
                        <h1>Fase teste prático Front_end</h1>
                        <p>pokebusca</p>
                    </div>
                    <div className="First-content-right-search">
                        <InputGroup size="lg" className="mb-3">
                            <FormControl placeholder="Buscar" aria-label="Large" aria-describedby="inputGroup-sizing-lg" />
                        </InputGroup>
                    </div>
                </div>
                <hr />
                <div className="Count-poke">
                    <p>Exibindo 20 de XXX itens</p>
                </div>
                <hr />
            </div>
        </div>
    )
}
