package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.model.Projects;
import com.example.demo.model.Tasks;
import com.example.demo.service.dasboardService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;







@RestController
@CrossOrigin
@RequestMapping("/dashboard")
public class dashboardController {
    @Autowired
    private dasboardService service;
    @GetMapping("/allProjects")
    public List<Projects> getAllProjects() {
        return( service.getAllProjects());
    }

    @GetMapping("/allRecentProjs")
    public List<Projects> getAllRecenProjects() {
        return service.getAllRecenProjects();
    }
    
    @GetMapping("/allDeadlineProjs")
    public List<Projects> getAlldeadlinProjects() {
        return service.getAlldeadlinProjects();
    }

    @GetMapping("/Projectdet/{id}")
    public Projects getProject(@PathVariable("id")int param ) {
        return service.getProject(param);
    }
    
    @GetMapping("/taskdet")
    public List<Tasks> getTasks(){
        return (service.getTasks());
    }

    @PostMapping("/addProject")
    public void postMethodName(@RequestBody Projects entity) {
        service.addProject(entity);
    }
    
    
    
    
    
    
    
}
