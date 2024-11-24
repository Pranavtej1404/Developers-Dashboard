import React from 'react';
import styles from '../styles/TaskManagement.module.css';

const TaskManagement = () => {
  return (
    <div className={styles.taskManagement}>
      <h2>Task Management</h2>
      <div className={styles.kanbanBoard}>
        <div className={styles.kanbanColumn}>To-Do</div>
        <div className={styles.kanbanColumn}>In Progress</div>
        <div className={styles.kanbanColumn}>Done</div>
      </div>
    </div>
  );
};

export default TaskManagement;
