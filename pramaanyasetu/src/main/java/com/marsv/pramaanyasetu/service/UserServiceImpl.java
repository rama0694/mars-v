package com.marsv.pramaanyasetu.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.marsv.pramaanyasetu.dto.CertificateBase;
import com.marsv.pramaanyasetu.dto.User;
import com.marsv.pramaanyasetu.utils.CollectionUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

@Component
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final Firestore firestore;

    private CollectionReference getUserReference(){
        return firestore.collection("User");
    }

    private CollectionReference getCertificateReference(){
        return firestore.collection("CertificateBase");
    }

    @Override
    public User getUserDetails(String userId) throws ExecutionException, InterruptedException {
        DocumentReference documentReference = getUserReference().document(userId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot documentSnapshot = future.get();
        if(documentSnapshot.exists()){
            return documentSnapshot.toObject(User.class);
        }
        return null;
    }

    @Override
    public List<CertificateBase> getCertificates(List<String> certificateIds) throws ExecutionException, InterruptedException {
        List<CertificateBase> result = new ArrayList<>();
        for(String certificate: certificateIds){
            DocumentReference documentReference = getUserReference().document(certificate);
            ApiFuture<DocumentSnapshot> future = documentReference.get();
            DocumentSnapshot documentSnapshot = future.get();
            if(documentSnapshot.exists()){
                result.add(documentSnapshot.toObject(CertificateBase.class));
            }
        }
        return result;
    }

    @Override
    public User updateUserDetails(User user){
        user.setUpdated(System.currentTimeMillis());
        ApiFuture<WriteResult> future =  getUserReference().document(user.getId()).set(user);
        return user;
    }

    @Override
    public User createUserDetails(User user){
        if(user == null){
            return null;
        }
        user.setId(UUID.randomUUID().toString());
        user.setUpdated(System.currentTimeMillis());
        user.setCreated(System.currentTimeMillis());
        user.setDeleted(false);
        ApiFuture<WriteResult> future =  getUserReference().document(user.getId()).create(user);
        return user;
    }

    @Override
    public User addCertificate(String certificateId, String userId) throws ExecutionException, InterruptedException {
        User user = getUserDetails(userId);
        if(user == null){
            return null;
        }
        List<String> certificates = CollectionUtils.nullSafeList(user.getCertificates());
        certificates.add(certificateId);
        user.setUpdated(System.currentTimeMillis());
        DocumentReference docRef = getUserReference().document(user.getId());
        ApiFuture<WriteResult> future = docRef.update("certificates", certificates);
        return user;
    }
}
