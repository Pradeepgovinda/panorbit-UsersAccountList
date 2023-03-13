import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './action';



function Home() {

  const [autoData, setData] = useState([]);


  const usenavigate = useNavigate('');

  const dispatch = useDispatch()
  const LoadDetail = (data) => {
    console.log(data);
    dispatch(setCurrentUser(data))
    usenavigate("/profile");
  }


  useEffect(() => {

    fetch("https://panorbit.in/api/users.json").then((res) => {
      return res.json();
    }).then((resp) => {
      setData(resp);
    }).catch((err) => {
      console.log(err.message);
    })

  }, [usenavigate]);


  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog style={{borderRadius:'2rem', width:'150rem', overflow:'hidden', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}}>
    
        <Modal.Header>
          <Modal.Title><h3 className='select-acc'>Select an account</h3></Modal.Title>
        </Modal.Header>
        {autoData.users &&
          <Modal.Body style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto'}} >
            {
              (autoData.users).map((data, i) =>
                <div className="container">
                  <div className="row" key={data.id}>
                    <button className='users-button' onClick={() => { LoadDetail(data) }}>
                      <div className="col-2">
                        <img className='user-pic' alt={data.profilepicture} src={data.profilepicture} />
                      </div>
                      <div className="col-10" style={{textAlign:'start', marginLeft:'5rem'}}>
                        <span className='user-name'>{data.name}</span>
                      </div>
                      </button>
                  </div>
                </div>

              )
            }

          </Modal.Body>
        }
      </Modal.Dialog>
    </div>



  );
}

export default Home;