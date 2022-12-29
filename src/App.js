import Container from 'react-bootstrap/Container';
import Letter from './components/Letter';

function App() {
  return (
    <div className="contenedor">
        <h3 className='titulo'>Listado de Perros</h3>
        <Container className="contenedores">
          <Letter></Letter>
        </Container>
    </div>
  );
}

export default App;
