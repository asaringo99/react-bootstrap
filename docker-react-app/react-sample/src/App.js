// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Container, Form, Row, Click, Col, Stack, Alert, Breadcrumb, CloseButton, Nav, Spinner} from 'react-bootstrap';
import Hello from './form/form'
import Example from './library/offcanvas/offcanvas'
import Navigation from './library/navigation/navigation'
import Form1 from './library/form/form1'
import Identification from './library/form/Email_Password'
import CountClick from './library/onclick'

function App() {


  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="card">
      <div>
      <Stack gap={3}>
        <Stack className="col-md-5 mx-auto"><Navigation/></Stack>
        <Stack className="col-md-1 mx-auto"><Example/></Stack>
        <Stack className="col-md-7 mx-auto"><Identification email={"example@example.com"}/></Stack>
        <Stack className="mx-auto">あなたのアイテムを追加してください</Stack>
        <Stack><Form1/></Stack>
        <Stack className="mx-auto"><CountClick/></Stack>
      </Stack>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>

      <>
        <Form.Control size="lg" type="text" placeholder="Large text" />
        <br />
        <Form.Control type="text" placeholder="Normal text" />
        <br />
        <Form.Control size="sm" type="text" placeholder="Small text" />
      </>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="email@example.com" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
      </Form>
      </div>

      <>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Form.Group controlId="formFileDisabled" className="mb-3">
          <Form.Label>Disabled file input example</Form.Label>
          <Form.Control type="file" disabled />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Small file input example</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Large file input example</Form.Label>
          <Form.Control type="file" size="lg" />
        </Form.Group>
      </>

      <>
        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue="#563d7c"
          title="Choose your color"
        />
      </>

      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This example
          text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
        </p>
      </Alert>
      {/* { flg &&
      <div className="card-body">
        <Button variant="outline-primary">プライマリーボタン</Button>
      </div>
      }
      {
        data.map((u) => 
          <p>{u.naem}</p>
        )
      }
        <Hello />,
        <Click />, */}
    </div>
  );
}

export default App;
