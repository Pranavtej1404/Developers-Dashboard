
import React from 'react';
import styles from '../../styles/ProjectDetails.module.css';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { api } from '../../components/api';
import { useState,useEffect } from 'react';
import stylese from "../../styles/card.module.css";

export async function generateStaticParams() {
  
  
  
}

export default function ProjectDetails () {
  const params=useParams();
  const {ProjectDetails}=params;
 
  const [Projs,setAllProjs]= useState({});
  const [tasks,setTasks]=useState([]);
 
  useEffect(()=>{
  const fetchdata=async () =>{
    try{
      const response = await axios.get(`${api}/dashboard/Projectdet/${ProjectDetails}`);
      const response1 = await axios.get(`${api}/dashboard/taskdet`);
      setAllProjs(response.data);
      setTasks(response1.data);
      
    }
    catch(error){
      console.log(error);
    }
  };
  fetchdata();
})
  
  return (
    <div className={styles.projectDetails}>
      <h2>Project Details</h2>
      <h3>{Projs.name}</h3>
      <h2>{Projs.description}</h2>
      <div className={styles.projectSections}>
        <div className={styles.taskSection}>Tasks
          <div className={styles.cardHolder}>
          {tasks.map(proj=>
        
        <div  key={proj.project_id} className={stylese.card}>
        <p className={stylese.cardtext}>{proj.title}</p>
        </div>
        )}
          </div>
        
        </div>
        <div className={styles.calendarSection}>Calendar</div>
        <div className={styles.budgetSection}>Budget</div>
        <div className={styles.riskSection}>Risk Management</div>
        <div className={styles.documentSection}>Documents</div>
      </div>
    </div>
  );
};


