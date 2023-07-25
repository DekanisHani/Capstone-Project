import { Button, Carousel, Container, Row, Col } from "react-bootstrap";

import "./AboutUs.css"; // Import custom CSS file for styling
import ReviewList from "../Reviews/Reviews";

function AboutUs() {
  const imageUrls = [
    "./affair-1238429_640.jpg",
    "./cakes-1734310_640.jpg",
    "./food-2655778_640.jpg",
    "./restaurant-18311_640.jpg",
    "./wedding-reception-1967373_640.jpg",
    "./affair-1238434_640.jpg",
    "./decoration-2697944_640.jpg",
    "./kitchen-utensils-77231_640.jpg",
    "./table-setting-1159423_640.jpg",
    "./buffet-3955616_640.jpg",
    "./drinks-1283608_640.jpg",
    "./kitchen-utensils-77233_640.jpg",
    "./tablecloth-3336687_640.jpg",
  ];
  return (
    <>
      <Container className={"w-10"}>
        <h1 className={"text-center my-5 fs-1 fw-bold text-danger"}>
          QUALCOSA SU DI NOI...
        </h1>
        <p className="fs-5 my-5">
          Benvenuti in Alba Forniture, la soluzione perfetta per realizzare
          eventi indimenticabili! Ci consideriamo più di una semplice azienda di
          forniture per eventi; siamo i vostri partner creativi, pronti a
          trasformare ogni occasione in un'esperienza straordinaria. Con oltre
          dieci anni di esperienza nel settore, abbiamo affinato la nostra
          offerta per fornirvi materiali di altissima qualità, dal design
          raffinato e dalla funzionalità impeccabile. Il nostro catalogo spazia
          dalle scenografie mozzafiato alle attrezzature tecniche
          all'avanguardia, dai dettagli più delicati agli accessori più
          essenziali, il tutto pensato per soddisfare ogni vostra esigenza. Che
          si tratti di un matrimonio da sogno, una festa aziendale o una
          manifestazione di grande impatto, abbiamo la soluzione su misura per
          voi. La nostra missione è quella di ascoltarvi attentamente e lavorare
          a stretto contatto con voi per comprendere le vostre visioni e i
          vostri obiettivi. Grazie a questo approccio personalizzato, siamo in
          grado di fornirvi un servizio altamente professionale, garantendo la
          massima cura dei dettagli e una gestione impeccabile di ogni fase
          dell'evento.
        </p>
        <Row>
          <Col xs="12" lg="6">
            <Carousel interval={3000} className="w-100 h-50 mb-5">
              {imageUrls.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs="12" lg="6">
            <Carousel interval={3000} className="w-100 h-50 mb-5">
              {imageUrls.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        <p className="fs-5">
          La soddisfazione dei nostri clienti è al centro di tutto ciò che
          facciamo, e siamo orgogliosi delle relazioni a lungo termine che
          costruiamo con chi ci sceglie. Con noi, potrete contare su un team
          appassionato e competente, sempre pronto ad affrontare nuove sfide e
          ad adattarsi alle vostre esigenze in continua evoluzione. Siamo
          consapevoli dell'importanza di un evento impeccabile, e ci impegniamo
          a superare ogni vostra aspettativa. La nostra esperienza ci permette
          di anticipare le vostre necessità e di offrire soluzioni innovative e
          all'avanguardia, che aggiungeranno quel tocco di magia che renderà il
          vostro evento unico nel suo genere. Scegliere Alba Forniture significa
          affidarsi a un team di professionisti appassionati, pronti a
          realizzare la vostra visione con creatività, dedizione e attenzione ai
          dettagli. Illuminate i vostri eventi con il nostro supporto: vi
          garantiamo un'esperienza memorabile e impeccabile.
        </p>
        <h3>
          {" "}
          Unisciti a noi nel viaggio di creare momenti indimenticabili. Scoprite
          il mondo di Alba Forniture e lasciatevi ispirare dalla nostra vasta
          gamma di materiali per eventi. Siamo pronti a rendere il vostro evento
          un'esperienza straordinaria.
        </h3>
        <hr />
        <h2 className="text-center fw-bold text-danger">I NOSTRI SERVIZI</h2>
        <p className="fs-5 my-5">
          Siamo molto più di una semplice azienda di forniture per eventi. Siamo
          i vostri partner creativi, pronti ad accompagnare ogni passo del
          vostro percorso verso un evento indimenticabile. Con oltre dieci anni
          di esperienza nel settore, Alba Forniture è sinonimo di qualità, stile
          e professionalità.
        </p>
        <Row>
          <Col xs="12" lg="6">
            <Carousel interval={3000} className="w-100 h-50 mb-5">
              {imageUrls.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs="12" lg="6">
            <Carousel interval={3000} className="w-100 h-50 mb-5">
              {imageUrls.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        <p className="fs-5">
          <strong>Scenografie Creative:</strong> Diamo vita alle vostre idee e alle vostre
          visioni con scenografie uniche e spettacolari. Dalle decorazioni
          floreali che emozionano agli allestimenti tematici che stupiscono,
          trasformiamo gli spazi in ambienti magici, creando l'atmosfera
          perfetta per rendere ogni evento un'esperienza straordinaria. <br />
          <strong>Attrezzature Tecniche Avanzate:</strong> Nessun dettaglio è troppo piccolo
          quando si tratta dell'aspetto tecnico del vostro evento. Con le nostre
          attrezzature audio, luci, video e tecnologiche all'avanguardia,
          garantiamo una performance impeccabile. Il nostro team esperto si
          occuperà dell'installazione, della gestione e del coordinamento di
          ogni aspetto tecnico, consentendovi di concentrarvi sul contenuto del
          vostro evento. <br />
          <strong>Mobili e Accessori Eleganti:</strong> I dettagli fanno la
          differenza. Dai mobili raffinati e confortevoli ai complementi
          d'arredo eleganti, offriamo una vasta gamma di opzioni per
          personalizzare gli spazi e soddisfare ogni vostra esigenza estetica e
          funzionale. Lasciate che la nostra selezione di mobili e accessori
          esprima lo stile unico del vostro evento. <br />
          <strong>Assistenza Personalizzata:</strong>
          La vostra soddisfazione è la nostra priorità assoluta. Siamo qui per
          ascoltarvi, collaborare con voi e comprendere le vostre esigenze
          specifiche. Grazie alla nostra assistenza personalizzata, potrete
          contare su un servizio attento e dedicato, che si adatta alle vostre
          richieste, anche le più particolari. <br />
          <strong>Gestione degli Eventi:</strong> Dalla fase
          di pianificazione all'esecuzione, il nostro team di professionisti si
          impegnerà a gestire ogni aspetto del vostro evento. Con la nostra
          esperienza e attenzione ai dettagli, potrete rilassarvi e godervi ogni
          momento, sapendo che tutto sarà perfettamente organizzato.
        </p>
        <hr />
        <Row>
          <Button href={"/catalogue"} className="my-5 py-3 fs-3 button">
            Check our catalogue
          </Button>
        </Row>
        <hr />
        <ReviewList />

        <footer className="footer">
          <Container>
            <div>
              <Row>
                <h5>Contacts:</h5>
                <br />

                <a href="tel:+061234567" className="text-decoration-none">
                  <i className="bi bi-telephone-fill"></i> 061234567
                </a>
                <a
                  href="mailto:albaforniture@gmail.com"
                  className="text-decoration-none"
                >
                  <i className="bi bi-envelope-fill"></i>{" "}
                  Albaforniture@gmail.com
                </a>
              </Row>
            </div>
            <div className="social-icons">
              <a href={"#facebook"}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href={"#twitter"}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href={"#instagram"}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            &copy; {new Date().getFullYear()} All rights reserved | Design by
            {" ALBA FORNITURE"}
          </Container>
        </footer>
      </Container>
    </>
  );
}

export default AboutUs;
