package com.backend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.backend.repo.*;
import com.backend.entity.*;

@Service
public class MovieService {
    @Autowired private ActionRepo actionRepo;
    @Autowired private ComedyRepo comedyRepo;
    @Autowired private DramaRepo dramaRepo;
    @Autowired private SciFiRepo scifiRepo;
    @Autowired private ThrillerRepo thrillerRepo;

    public List<Action> getAllActionMovies() { return actionRepo.findAll(); }
    public List<Comedy> getAllComedyMovies() { return comedyRepo.findAll(); }
    public List<Drama> getAllDramaMovies() { return dramaRepo.findAll(); }
    public List<SciFiMovies> getAllSciFiMovies() { return scifiRepo.findAll(); }
    public List<Thriller> getAllThrillerMovies() { return thrillerRepo.findAll(); }
}
