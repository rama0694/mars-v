package com.marsv.pramaanyasetu.repo;

import com.marsv.pramaanyasetu.dto.WorkRecord;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkRecordRepository extends MongoRepository<WorkRecord,String> {
}
