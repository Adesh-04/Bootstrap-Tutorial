import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ContainerTut, RowTut, ColOrderTut, StackTut, FormTutPartOne, FormTutPartTwo, AlertTut, AccordionTut} from "./components/Static"

function App() {

  var [container, setContainer] = useState(true);
  var [row, setRow] = useState(true);
  var [order, setOrder] = useState(true);
  var [stack, setStack] = useState(true);
  var [formOne, setFormOne] = useState(true);
  var [formTwo, setFormTwo] = useState(true);
  var [alert, setAlert] = useState(true);
  var [accordion, setAccordion] = useState(true);

  return (
    <div className="App">

        <Container fluid className='mt-3'>
            <Row>
                <Col>
                {
                        container?
                        
                            <Button variant='outline-primary'
                                    onClick={()=> {     setContainer(false); setRow(true); setOrder(true);
                                                        setStack(true); setFormOne(true); setFormTwo(true);
                                                        setAlert(true); setAccordion(true);}} >
                                Container
                            </Button>
                        :   <Button onClick={()=> setContainer(true)} variant='primary'>Container</Button>
                    }    
                </Col>

                <Col>
                {
                        row?
                        
                            <Button variant='outline-dark'
                                    onClick={()=> {     setRow(false); setContainer(true); setOrder(true);
                                                        setStack(true); setFormOne(true); setFormTwo(true); 
                                                        setAlert(true); setAccordion(true);}} >
                                Row
                            </Button>
                        :   <Button onClick={()=> setRow(true)} variant='dark'>Row</Button>
                    }
                </Col>

                <Col>
                {
                        order?
                        
                            <Button variant='outline-warning'
                                    onClick={()=> {     setOrder(false); setContainer(true); setRow(true); 
                                                        setStack(true); setFormOne(true); setFormTwo(true); 
                                                        setAlert(true); setAccordion(true);}} >
                                Col
                            </Button>
                        :   <Button onClick={()=> setOrder(true)} variant='warning'>Col</Button>
                    }
                </Col>

                <Col>
                {
                        stack?
                        
                            <Button variant='outline-danger'
                                    onClick={()=> {     setStack(false); setContainer(true); setRow(true); 
                                                        setOrder(true); setFormOne(true); setFormTwo(true); 
                                                        setAlert(true); setAccordion(true);}} >
                                Stack
                            </Button>
                        :   <Button onClick={()=> setStack(true)} variant='danger'>Stack</Button>
                    }
                </Col>

                <Col>
                {
                        formOne?
                            
                            <Button variant='outline-info'
                                    onClick={()=> {     setFormOne(false); setContainer(true); setRow(true); 
                                                        setOrder(true); setStack(true); setFormTwo(true); 
                                                        setAlert(true); setAccordion(true);}} >
                            Form 1
                        </Button>
                        :<Button onClick={()=> setFormOne(true)} variant='info'>Form 1</Button>
                    }
                </Col>

                <Col>
                {
                        formTwo?
                            
                            <Button variant='outline-dark'
                                    onClick={()=> {     setFormTwo(false); setContainer(true); setRow(true); 
                                                        setOrder(true); setStack(true); setFormOne(true); 
                                                        setAlert(true); setAccordion(true);}}>
                            Form 2
                        </Button>
                        :<Button onClick={()=> setFormTwo(true)} variant='dark'>Form 2</Button>
                    }
                </Col>
                
                <Col>
                {
                        alert?
                            
                            <Button variant='outline-primary'
                                    onClick={()=> {     setAlert(false); setContainer(true); setRow(true); 
                                                        setOrder(true); setStack(true); setFormOne(true); 
                                                        setFormTwo(true); setAccordion(true);}}>
                            Alert
                        </Button>
                        :<Button onClick={()=> setAlert(true)} variant='primary'>Alert</Button>
                    }
                </Col>

                <Col>
                {
                        accordion?
                        
                            <Button variant='outline-danger'
                                    onClick={()=> {     setAccordion(false); setContainer(true); setRow(true); 
                                                        setOrder(true); setFormOne(true); setFormTwo(true); 
                                                        setAlert(true); setStack(true);                     }} >
                                Accordion
                            </Button>
                        :   <Button onClick={()=> setAccordion(true)} variant='danger'>Accordion</Button>
                    }
                </Col>

            </Row>
        </Container><hr/><br/>


           

      



      {
         container?null:
          <div className='border border-2 border-primary'> <br/><br/>
            <ContainerTut /><br/>
          </div>
      }    

      {
         row?null:
         <div className='border border-3 border-danger'> <br/>
            <RowTut /> <br/>
         </div>
      }
      
      {
         order?null:
         <div className='border border-3 border-info'> <br/>
            <ColOrderTut /> <br/>
         </div>
      }

      {
         stack?null:
         <div className="border border-3 border-warning"> <br/>
            <StackTut /> <br/>
         </div>
      }
      
      {
         formOne?null:
         <div className="border border-3 border-info"> <br/>
            <FormTutPartOne /> <br/>
         </div>
      }
      
      {
         formTwo?null:
         <div className="border border-3 border-primary"> <br/>
            <FormTutPartTwo /> <br/>
         </div>
      }

      {
         alert?null:
         <div className="border border-3 border-danger"> <br/>
            <AlertTut /> <br/>
         </div>
      }

      {
         accordion?null:
         <div className='border border-3 border-secondary'> <br/>
            <AccordionTut /> <br/>
         </div>
      }

          
    </div>
      
    
  );
}

export default App;
