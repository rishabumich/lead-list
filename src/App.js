import React, { useEffect, useState } from 'react';
import '@radix-ui/themes/styles.css'; 
import DataGrid from './DataGrid';
import { Button } from 'antd';
import { Theme } from "@radix-ui/themes";
import { v4 as uuidv4 } from 'uuid';



function App() {
  const lead1 = {id: 0, name: "Rishab", email: "rishabg@umich.edu", phone: "650-495-5255", contacted: false};
  const lead2 = {id: 1, name: "Sohum", email: "spavaska@umich.edu", phone: "XXX-XXX-XXX", contacted: false};
  const lead3 = {id: uuidv4(), name: "Adi Nimbalkar", email: "adnim@umich.edu", phone: "XXX-XXX-XXX", contacted: false};
  const lead4 = {id: uuidv4(), name: "Adi Gaba", email: "adigaba@umich.edu", phone: "XXX-XXX-XXX", contacted: false};
  const lead5 = {id: uuidv4(), name: "Ayush", email: "ayush@umich.edu", phone: "XXX-XXX-XXX", contacted: false};

  const [leads, setLeads] = useState([]);
  const [addLeadClicked, setAddLeadClicked] = useState(false);
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    setLeads(leads);
  }, [leads])

  function handleAddLead(){
    setLeads([...leads, {id: counter, name: "N/A", email: "N/A", phone: "N/A", contacted: false}]);
    console.log(counter)
    let newCounter = counter + 1;
    setCounter(newCounter)
  }

  function handleClearLeads(){
    setLeads([]);
  }

  function handleClearContacted(){
    const nonContaced = [];
    leads.map(lead => {
      if (!lead.contacted){
        nonContaced.push(lead);
      }
    })
    setLeads(nonContaced);
  }

  return (
    <div>
      <Theme>
      <div className="flex justify-center pt-4 font-bold text-xl">
        Welcome, Rishab!
      </div>
      <div className='flex justify-center'>My Leads 📝</div>
      <div className="mx-auto w-3/4 pt-5" >
        <DataGrid leads={leads} leadSetter={setLeads} />
      </div>
      <div className='flex justify-center pt-2'>
        <Button clsssName="pr-5" onClick={handleClearLeads}>Clear All Leads</Button>
        <Button onClick={handleAddLead}>Add Lead</Button>
      </div>
      </Theme>
    </div>
  );
}

export default App;
