import { Container,Row,Col,Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function NotFoundPage() {
  
  const navigate=useNavigate()
  
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="text-center">
        <Col>
          <h1 className="display-1 fw-bold text-succes">404</h1>
          <h2 className="mb-3">opps! Página no encontrada</h2>
          <p>La página que estás buscando no existe ya ha sido movida.
          </p>
          <Button variant='success' size='lg' onClick={()=> navigate('/')}>Vuelve al inicio</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFoundPage