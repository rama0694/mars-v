package com.marsv.pramaanyasetu.config;

import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FireBaseConfig {

    @Bean
    public Firestore getConfig(){
        return FirestoreClient.getFirestore();
    }
}
