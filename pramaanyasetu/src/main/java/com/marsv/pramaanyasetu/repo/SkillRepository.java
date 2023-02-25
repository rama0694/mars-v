package com.marsv.pramaanyasetu.repo;

import com.marsv.pramaanyasetu.dto.Skill;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends MongoRepository<Skill,String> {
}
