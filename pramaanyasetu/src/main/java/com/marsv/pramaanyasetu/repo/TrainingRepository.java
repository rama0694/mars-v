package com.marsv.pramaanyasetu.repo;

import com.marsv.pramaanyasetu.dto.Training;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingRepository extends MongoRepository<Training,String> {
}
