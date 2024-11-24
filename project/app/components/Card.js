import React from 'react';
import stylese from "../styles/card.module.css"

function Card(data) {
    const listprojs=data.map(proj=>
        <div key={proj.project_id} className={styles.card}>
        <p className={styles.cardtext}>{proj.name}</p>
    </div>
    );

  return (
    <div className={styles.cardcontainer }>
      {listprojs}
    </div>
  );
  console.log(data);
}

export default Card;