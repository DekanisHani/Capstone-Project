import React from "react";
import { Button, Carousel, Container, Row } from "react-bootstrap";

import "./Home.css"; // Import custom CSS file for styling

function Home() {
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
        <h1 className={"text-center my-5 fs-1 fw-bold"}>
           Illumina i Tuoi Eventi!
        </h1>
        <p className="fs-5 my-5">
          Benvenuti nell'universo di Alba Forniture - il vostro partner di
          fiducia per materiali di alta qualità per eventi indimenticabili! Con
          oltre un decennio di esperienza nel settore dell'approvvigionamento
          per eventi, ci impegniamo a offrire soluzioni innovative e creative
          per soddisfare ogni vostra esigenza. La nostra passione per
          l'eccellenza e la cura per i dettagli si riflettono in ogni prodotto
          che offriamo, rendendo ogni evento unico e memorabile. Da feste
          private a grandi manifestazioni aziendali, la nostra vasta gamma di
          forniture è stata accuratamente selezionata per garantire una perfetta
          sinergia tra qualità, stile e funzionalità. Che si tratti di
          scenografie spettacolari, attrezzature tecniche all'avanguardia o
          semplici ma eleganti accessori, siamo qui per trasformare la vostra
          visione in realtà.
        </p>
        <Row>
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
        </Row>
        
        <p className="fs-5">
          La nostra filosofia si basa sull'ascolto attento dei vostri desideri e
          sulla collaborazione stretta per assicurarci di fornire il materiale
          ideale per ogni evento. La soddisfazione dei nostri clienti è la
          nostra priorità assoluta, e lavoriamo instancabilmente per superare le
          vostre aspettative, adattandoci alle esigenze specifiche del vostro
          progetto. Con Alba Forniture, potrete godere della tranquillità di
          sapere di essere in mani esperte e affidabili, pronti a supportarvi in
          ogni fase dell'organizzazione del vostro evento. Sia che siate un
          wedding planner alla ricerca di un tocco magico per un matrimonio da
          favola, un'azienda alla ricerca di una presenza scenica unica per una
          conferenza, o semplicemente desideriate aggiungere un tocco speciale a
          una festa privata, noi siamo qui per voi.
        </p>
        <h3> Unisciti a noi nel viaggio
          di creare momenti indimenticabili. Scoprite il mondo di Alba Forniture
          e lasciatevi ispirare dalla nostra vasta gamma di materiali per
          eventi. Siamo pronti a rendere il vostro evento un'esperienza
          straordinaria.</h3>
        <Row>
          <Button href={"/catalogue"} className="my-5 py-3 fs-3 button">Check our catalogue</Button>
        </Row>
      </Container>
      <footer className="footer">
        <Container>
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
          &copy; {new Date().getFullYear()} All rights reserved | Design by{" ALBA FORNITURE"}
        </Container>
      </footer>
    </>
  );
}

export default Home;
