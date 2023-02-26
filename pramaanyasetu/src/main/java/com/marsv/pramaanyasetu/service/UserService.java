package com.marsv.pramaanyasetu.service;

import com.marsv.pramaanyasetu.dto.CertificateBase;
import com.marsv.pramaanyasetu.dto.User;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface UserService {
    User getUserDetails(String userId) throws ExecutionException, InterruptedException;
    List<CertificateBase> getCertificates(List<String> certificateIds) throws ExecutionException, InterruptedException;
    User updateUserDetails(User user);
    User createUserDetails(User user);
    User addCertificate(String certificateId, String userId) throws ExecutionException, InterruptedException;
}
