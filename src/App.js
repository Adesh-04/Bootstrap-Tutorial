import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ContainerTut, RowTut} from "./components/Static"

function App() {

  var [container, setContainer] = useState(true);
  var [row, setRow] = useState(true);

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
            </div>
                
        </div><br/>

      

      





      {
         container?null:
          <div className='border'> <br/><br/>
            <ContainerTut /><br/>
          </div>
      }    

      {
         row?null:
         <div className='border'> <br/>
            <RowTut /> <br/>
         </div>
      }

          
    </div>
      
    
  );
}

export default App;
