package com.example.demo.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Projects;
import com.example.demo.model.Tasks;
import com.example.demo.repository.ProjectRepo;
import com.example.demo.repository.TaksksRepo;

@Service
public class dasboardService {
    
    @Autowired
    private ProjectRepo repo;
    @Autowired
    private TaksksRepo repotask;
    public List<Projects> getAllProjects(){
        return(repo.findAll());
    }

    public List<Projects> getAllRecenProjects(){
        
        return(repo.findAllRecentProjects());

    }

    public List<Projects> getAlldeadlinProjects(){
        return(repo.findAllDueProjects());
    }
    
    public void addProject(Projects entity){
        entity.setUpadated_at(new Date());
        repo.save(entity);
    }

    

    public Projects getProject(int param) {
        return(repo.GetProduct(param));
    }

    public List<Tasks> getTasks() {
        return(repotask.findAll());
    }
} 

