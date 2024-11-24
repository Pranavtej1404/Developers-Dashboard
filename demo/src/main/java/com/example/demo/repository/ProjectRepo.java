package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Projects;

@Repository
public interface ProjectRepo extends JpaRepository<Projects,Integer> {
    @Query(value = "select p from Projects p order by p.upadated_at desc")
    List<Projects> findAllRecentProjects();

    @Query(value = "select p from Projects p order by p.end_date desc")
    List<Projects> findAllDueProjects();

    @Query(value = "select p  from Projects p where p.project_id=:param")
    Projects GetProduct(@Param("param") int param);
}
