import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ContainerTut, RowTut, ColOrderTut, StackTut} from "./components/Static"

function App() {

  var [container, setContainer] = useState(true);
  var [row, setRow] = useState(true);
  var [order, setOrder] = useState(true);
  var [stack, setStack] = useState(true);

  return (
    <div className="App">
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {
                        container?<Button onClick={()=> {setContainer(false); setRow(true); setOrder(true); setStack(true);}} variant='success'>Container</Button>
                        :<Button onClick={()=> setContainer(true)} variant='danger'>Container</Button>
                    }
                </div>

                <div className='col'>
                    {
                        row?<Button onClick={()=> {setRow(false); setContainer(true); setOrder(true); setStack(true);}} variant='success'>Row</Button>
                        :<Button onClick={()=> setRow(true)} variant='danger'>Row</Button>
                    }
                </div>
                
                <div className='col'>
                    {
                        order?<Button onClick={()=> {setOrder(false); setContainer(true); setRow(true); setStack(true);}} variant='success'>Col</Button>
                        :<Button onClick={()=> setOrder(true)} variant='danger'>Row</Button>
                    }
                </div>

                <div className='col'>
                    {
                        stack?<Button onClick={()=> {setStack(false); setContainer(true); setRow(true); setOrder(true);}} variant='success'>Stack</Button>
                        :<Button onClick={()=> setStack(true)} variant='danger'>Stack</Button>
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

          
    </div>
      
    
  );
}

export default App;
