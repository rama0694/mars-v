package com.marsv.pramaanyasetu.service;

import com.marsv.pramaanyasetu.repo.UserRepository;
import com.marsv.pramaanyasetu.utils.CollectionUtils;
import com.marsv.pramaanyasetu.utils.MongoUtils;
import com.marsv.pramaanyasetu.dto.CertificateBase;
import com.marsv.pramaanyasetu.dto.User;
import com.marsv.pramaanyasetu.repo.CertificateBaseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final MongoTemplate mongoTemplate;

    @Override
    public User getUserDetails(String userId) {
        Criteria criteria = MongoUtils.getNonDeletedFilterCriteria();
        criteria.and("id").is(userId);
        return mongoTemplate.findOne(Query.query(criteria), User.class);
    }

    @Override
    public List<CertificateBase> getCertificates(List<String> certificateIds){
        if(CollectionUtils.isEmpty(certificateIds)){
            log.error("Empty list of certificates");
            return new ArrayList<>();
        }
        Criteria criteria = MongoUtils.getNonDeletedFilterCriteria();
        criteria.and("id").in(certificateIds);
        return mongoTemplate.find(Query.query(criteria),CertificateBase.class);
    }

    @Override
    public User updateUserDetails(User user){
        if(user == null){
            return null;
        }
        user.setUpdated(System.currentTimeMillis());
        return userRepository.save(user);
    }

    @Override
    public User createUserDetails(User user){
        if(user == null){
            return null;
        }
        user.setUpdated(System.currentTimeMillis());
        user.setCreated(System.currentTimeMillis());
        user.setDeleted(false);
        return userRepository.save(user);
    }

    @Override
    public User addCertificate(String certificateId, String userId){
        User user = getUserDetails(userId);
        if(user == null){
            return null;
        }
        List<String> certificates = CollectionUtils.nullSafeList(user.getCertificates());
        certificates.add(certificateId);
        user.setUpdated(System.currentTimeMillis());
        return userRepository.save(user);
    }
}
