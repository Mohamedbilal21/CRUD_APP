import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";

export default function Popup(dom) {
  console.log(dom, "jkhj");

  const updateData = () => {
    fetch(`https://67d7ed0b9d5e3a10152c9aa9.mockapi.io/user/users/${dom.fieldData.id}`, {
      method: "PUT", // or PATCH
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dom.fieldData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        
        dom.setUpdateData(!dom.updateData)
        // Do something with updated task
      })
      .catch((error) => {
        // handle error
      });
      dom.popClose();
      console.log(dom.updateData,"pop")
  };

  const createData = () =>{
           
    fetch(`https://67d7ed0b9d5e3a10152c9aa9.mockapi.io/user/users`, {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(dom.fieldData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      alert("add successfully")
      dom.setUpdateData(!dom.updateData)
      // do something with the new task
    }).catch(error => {
      // handle error
    })
    dom.popClose()
  }
 
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={dom.popShow} onHide={dom.popClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          {dom.fieldData.id ? "EDIT DATA":"CREATE DATA"}
            <BiSolidEdit />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                autoFocus
                defaultValue={dom.fieldData.name}
                onChange={(e) => {
                  dom.setFieldData({ ...dom.fieldData, name: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={dom.fieldData.email}
                onChange={(e) => {
                  dom.setFieldData({ ...dom.fieldData, email: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampl eForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+91 9992789346"
                autoFocus
                defaultValue={dom.fieldData.phoneno}
                onChange={(e) => {
                  dom.setFieldData({
                    ...dom.fieldData,
                    phoneno: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Qualification"
                autoFocus
                defaultValue={dom.fieldData.qualification}
                onChange={(e) => {
                  dom.setFieldData({
                    ...dom.fieldData,
                    qualification: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Current Location"
                autoFocus
                defaultValue={dom.fieldData.location}
                onChange={(e) => {
                  dom.setFieldData({
                    ...dom.fieldData,
                    location: e.target.value,
                  });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={dom.popClose}>
            Close
          </Button>
          {dom.fieldData.id ? <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> : <Button variant="primary" onClick={createData}>
            Create
          </Button>}
          
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
