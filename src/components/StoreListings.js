import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StoreListings() {
    return(
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Raleigh-Durham</h2>
            <Container style={{ marginTop: "50px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Col md="1" style={{width: '110px'}}>
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }}
                        src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png"roundedCircle />
                    </Col>
                    <Col md="3" style={{textAlign: "left"}}>
                        <h5 style={{ fontWeight: "bold" }}>Publix</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                    <Col md="1" style={{width: '110px'}}>
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }}
                        src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"roundedCircle />
                    </Col>
                    <Col md="3" style={{textAlign: "left"}}>
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", marginTop: "20px"}} >
                <Col md="1" style={{width: '110px'}}>
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }}
                        src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"roundedCircle />
                    </Col>
                    <Col md="3" style={{textAlign: "left"}}>
                        <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                        <p>Delivery</p>
                    </Col><Col md="1" style={{width: '110px'}}>
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }}
                        src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png"roundedCircle />
                    </Col>
                    <Col md="3" style={{textAlign: "left"}}>
                        <h5 style={{ fontWeight: "bold" }}>Wegmans</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default StoreListings;