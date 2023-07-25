import { Container } from "react-bootstrap";

function ErrorPage() {

    return (
        <Container>
            <h1 className={'text-center'}>Oops!</h1>
            <p className={'text-center'}>Sorry, an unexpected error has occurred.</p>
        </Container>
    );
}

export default ErrorPage;