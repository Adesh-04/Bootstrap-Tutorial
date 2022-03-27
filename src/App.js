import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ContainerTut, RowTut, ColOrderTut, StackTut, FormTutPartOne, FormTutPartTwo} from "./components/Static"

function App() {

  var [container, setContainer] = useState(true);
  var [row, setRow] = useState(true);
  var [order, setOrder] = useState(true);
  var [stack, setStack] = useState(true);
  var [formOne, setFormOne] = useState(true);
  var [formTwo, setFormTwo] = useState(true);

  return (
    <div className="App">
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {
                        container?<Button onClick={()=> {setContainer(false); setRow(true); setOrder(true); setStack(true); setFormOne(true); setFormTwo(true);}} variant='outline-primary'>Container</Button>
                        :<Button onClick={()=> setContainer(true)} variant='primary'>Container</Button>
                    }
                </div>

                <div className='col'>
                    {
                        row?<Button onClick={()=> {setRow(false); setContainer(true); setOrder(true); setStack(true); setFormOne(true); setFormTwo(true);}} variant='outline-dark'>Row</Button>
                        :<Button onClick={()=> setRow(true)} variant='dark'>Row</Button>
                    }
                </div>
                
                <div className='col'>
                    {
                        order?<Button onClick={()=> {setOrder(false); setContainer(true); setRow(true); setStack(true); setFormOne(true); setFormTwo(true);}} variant='outline-warning'>Col</Button>
                        :<Button onClick={()=> setOrder(true)} variant='warning'>Col</Button>
                    }
                </div>

                <div className='col'>
                    {
                        stack?<Button onClick={()=> {setStack(false); setContainer(true); setRow(true); setOrder(true); setFormOne(true); setFormTwo(true);}} variant='outline-danger'>Stack</Button>
                        :<Button onClick={()=> setStack(true)} variant='danger'>Stack</Button>
                    }
                </div>

                <div className='col'>
                    {
                        formOne?<Button onClick={()=> {setFormOne(false); setContainer(true); setRow(true); setOrder(true); setStack(true); setFormTwo(true);}} variant='outline-info'>Form 1</Button>
                        :<Button onClick={()=> setFormOne(true)} variant='info'>Form 1</Button>
                    }
                </div>

                <div className='col'>
                    {
                        formTwo?<Button onClick={()=> {setFormTwo(false); setContainer(true); setRow(true); setOrder(true); setStack(true); setFormOne(true);}} variant='outline-dark'>Form 2</Button>
                        :<Button onClick={()=> setFormTwo(true)} variant='dark'>Form 2</Button>
                    }
                </div>

                
            </div>
        </div><br/>

      

      





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
         <div className="border border-3 border-info"> <br/>
            <FormTutPartTwo /> <br/>
         </div>
      }

          
    </div>
      
    
  );
}

export default App;
