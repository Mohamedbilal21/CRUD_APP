import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { TiUserAddOutline } from "react-icons/ti";

export default function Table_compo(man) {
  const [tableData, setTableData] = useState([]);

  //to get the data through api
  useEffect(() => {
    fetch("https://67d7ed0b9d5e3a10152c9aa9.mockapi.io/user/users", {
      method: "GET", 
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((tasks) => {
        setTableData(tasks);
        console.log(tasks);
      })
      .catch((error) => {
        // handle error
      });
  }, [man.updateData]); //dependency array la changes nadakum pothu intha use effect thirupi trigger aagum
  console.log(man.updateData, "table");
  console.log(man.setUpdateData, "table");

  //to delete the data from the app
  const deleteData = (id) => {
    fetch(`https://67d7ed0b9d5e3a10152c9aa9.mockapi.io/user/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        alert("Delete Successfull")
        man.setUpdateData(!man.updateData)
        // Do something with deleted task
      })
      .catch((error) => {
        // handle error
      });
  };
  return (
    <>
      <h2 className="title fs-2">CRUD APP</h2>

      <Table
        className="table fs-5 bg-secondary"
        bordered
        variant="light"
        striped
      >
        <button className="add-user" onClick={() => man.popOpen()}>
          <TiUserAddOutline  className="add-btn"/>
        </button>
        <thead className="fs-4">
          <tr>
            <th>Ser.No</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone.no</th>
            <th>Qualification</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData&&tableData.map((items, c, d) => {
            return (
              <>
                <tr className="table-row">
                  <td>{c + 1}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.phoneno}</td>
                  <td>{items.qualification}</td>
                  <td>{items.location}</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => man.popOpen(items)}
                    >
                      EDIT
                    </Button>
                    <Button className="ms-3" variant="danger" size="sm" onClick={() => {deleteData(items.id)}}>
                      DELETE
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

{
  /* <tr>
<td>1</td>
<td>Mohamed</td>
<td>Bilal</td>
<td>@md_Bilal</td>
<td>mdbilal212002@gmail.com</td>
<td>Tirunelveli</td>
<td>
  <Button variant="primary" size="sm">
    EDIT
  </Button>
  <Button className="ms-3" variant="danger" size="sm">
    DELETE
  </Button>
</td>
</tr> */
}

{
  /* <tr>
            <td>1</td>
            <td>Mohamed</td>
            <td>Bilal</td>
            <td>@md_Bilal</td>
            <td>mdbilal212002@gmail.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Abd</td>
            <td>Muqsit</td>
            <td>@muqsi</td>
            <td>abdmuqsi@gmail.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sham</td>
            <td></td>
            <td>@shams</td>
            <td>shams@gmail.com</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mohamed</td>
            <td>Afreedh</td>
            <td>@afree</td>
            <td>afree@gmail.com</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Vasistha</td>
            <td>Krishnan</td>
            <td>@Vasi</td>
            <td>vasi@gmail.com</td>
          </tr> */
}
