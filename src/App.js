import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ContainerTut, RowTut, OrderTut} from "./components/Static"

function App() {

  var [container, setContainer] = useState(true);
  var [row, setRow] = useState(true);
  var [order, setOrder] = useState(true);

  return (
    <div className="App">
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {
                        container?<Button onClick={()=> setContainer(false)} variant='success'>Container</Button>
                        :<Button onClick={()=> setContainer(true)} variant='danger'>Container</Button>
                    }
                </div>

                <div className='col'>
                    {
                        row?<Button onClick={()=> setRow(false)} variant='success'>Row</Button>
                        :<Button onClick={()=> setRow(true)} variant='danger'>Row</Button>
                    }
                </div>
                
                <div className='col'>
                    {
                        order?<Button onClick={()=> setOrder(false)} variant='success'>Row</Button>
                        :<Button onClick={()=> setOrder(true)} variant='danger'>Row</Button>
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
            <OrderTut /> <br/>
         </div>
      }

          
    </div>
      
    
  );
}

export default App;
