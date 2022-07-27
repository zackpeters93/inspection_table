import React, { useEffect, useState } from "react";

const Assets = () => {
  //...keyio4TZZi6KLFjjU  curl https://api.airtable.com/v0/appw1xMIcf8ThrJcZ/Assets?api_key=keyio4TZZi6KLFjjU
  const [assets, setAssets] = useState({});

  const getStatus = (Status) => {
    if (Status === "Maintenance Req'd") return 'red';
    if (Status === "Issue Noted") return '#ffac00';
    if (Status === "Ok to Use") return 'green';
    if (Status ==="Needs Inspection") return 'grey';
    if (Status === "Out of Service") return 'black';
    return '';
  };

  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const now = new Date().toLocaleString();



  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appw1xMIcf8ThrJcZ/Assets?view=888%20Only&api_key=keyio4TZZi6KLFjjU"
    )
      .then((res) => res.json())
      .then((data) => {
        setAssets(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-4">
            <img src="https://komatsuevents.info/Web/monitor/images/Komatsu_RGB.png" 
              class="img-fluid" width="200" alt="Komatsu logo"/>
          </div>
          <div class="col-4">
            <h3>Crane Inspections</h3>
          </div>
          <div class="col-4">
           <p><b>Refreshed @ {now}</b></p>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <table class="table">
          <thead>
              <tr class="table-light">
                  <th scope="col">Asset ID</th>
                  <th scope="col">Asset Type</th>
                  <th scope="col">Department</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                  <th scope="col">Last Update</th>
                  <th scope="col">Inspector</th>
                   {/* <th scope="col">X Coord</th>
                  <th scope="col">Y Coord</th> */}
              </tr>
          </thead>
          <tbody>
          {assets.length > 0 ? (
            assets.map((record) => (
              <tr style={{ background: getStatus(record.fields.State), color: 'white', fontWeight: 'bold' }}>
                  <th scope="row">{record.fields.AssetID}</th>
                  <td>{record.fields.AssetType}</td>
                  <td>{record.fields.Department}</td>
                  <td>{record.fields.Description}</td>
                  <td>{record.fields.State}</td>
                  <td>{record.fields.Date}, {record.fields.Time}</td>
                  <td>{record.fields.Inspector}</td>
                  {/* <td>{record.fields.X_Coord}</td>
                  <td>{record.fields.Y_Coord}</td> */}
              </tr>
                      ))     ): (
                        <p>Fetching Data...</p>
                      )}
          </tbody>
        </table>
        {/* <p>{record.fields.asset} key={record.id}</p> */}
      </div>
    </div>
  );
};

export default Assets;
