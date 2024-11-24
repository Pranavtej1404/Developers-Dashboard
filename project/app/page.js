'use client'
import React,{useEffect,useState} from 'react';
import styles from './page.module.css';
import Card from './components/Card';
import { api } from './components/api';
import axios from 'axios';
import stylese from "./styles/card.module.css"
import AddEle from "./components/AddEle"
import Link from 'next/link';
export default  function DashboardOverview() {
  const [allProjs,setAllProjs]= useState([]);
  const [allRecentprojs,setAllRecentProjs]=useState([]);
  const [allDueprojs,setAllDueProjs]=useState([]);
  useEffect(()=>{
    const fetchdata=async () =>{
      try{
        const response = await axios.get(`${api}/dashboard/allProjects`);
        const response1 = await axios.get(`${api}/dashboard/allRecentProjs`);
        const response2 = await axios.get(`${api}/dashboard/allDeadlineProjs`);
        setAllProjs(response.data);
        setAllRecentProjs(response1.data);
        setAllDueProjs(response2.data);
      }
      catch(error){
        console.log(error);
      }
    };
    fetchdata();
  })
  return (
    <div className={styles.dashboardOverview}>
      <h1>Dashboard</h1>
      <AddEle></AddEle>
      <section className={styles.projectSummary} >
        <h2 className={styles.h2}>Project Status Summary</h2>
        <div className={stylese.cardcontainer }>
        {allProjs.map(proj=>
        <Link key={proj.project_id} href={`./ProjectDetails/${proj.project_id}`}>
        <div  className={stylese.card}>
        <p className={stylese.cardtext}>{proj.name}</p>
    </div>
    </Link>)}
        </div>
      </section>
      <section className={styles.activityFeed}>
        <h2 className={styles.h2}>Recent Activity</h2>
        <div className={stylese.cardcontainer }>
        {allProjs.map(proj=>
        <Link key={proj.project_id} href={`./ProjectDetails/${proj.project_id}`}>
        <div  className={stylese.card}>
        <p className={stylese.cardtext}>{proj.name}</p>
    </div>
    </Link>)}
        </div>
      </section>
      <section className={styles.deadlines}>
        <h2 className={styles.h2}>Upcoming Deadlines</h2>
        <div className={stylese.cardcontainer }>
        {allProjs.map(proj=>
        <Link key={proj.project_id} href={`./ProjectDetails/${proj.project_id}`}>
        <div  className={stylese.card}>
        <p className={stylese.cardtext}>{proj.name}</p>
    </div>
    </Link>)}
        </div>
      </section>
      
    </div>
  );
};


