package com.marsv.pramaanyasetu.repo;

import com.marsv.pramaanyasetu.dto.CertificateBase;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificateBaseRepository extends MongoRepository<CertificateBase,String> {
}
