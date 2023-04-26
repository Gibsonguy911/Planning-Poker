import { ButtonGroup, Button, Row, Col } from 'reactstrap'

const Admin = () => {
  return (
    <>
      <Row>
        <Col md={12}>Admin</Col>
      </Row>
      <Row>
        <Col>
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </>
  )
}
export default Admin
