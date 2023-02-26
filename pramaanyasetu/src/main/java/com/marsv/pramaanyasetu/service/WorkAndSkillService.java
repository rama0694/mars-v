package com.marsv.pramaanyasetu.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.marsv.pramaanyasetu.dto.CertificateBase;
import com.marsv.pramaanyasetu.dto.Skill;
import com.marsv.pramaanyasetu.dto.Training;
import com.marsv.pramaanyasetu.dto.WorkRecord;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
@Slf4j
public class WorkAndSkillService {
    private final Firestore firestore;

    private CollectionReference getWorkReference() {
        return firestore.collection("WorkRecord");
    }

    private CollectionReference getSkillReference() {
        return firestore.collection("Skill");
    }

    private CollectionReference getTrainingReference() {
        return firestore.collection("Training");
    }

    public WorkRecord createWork(WorkRecord workRecord) {
        if (workRecord == null) {
            return null;
        }
        workRecord.setId(UUID.randomUUID().toString());
        workRecord.setUpdated(System.currentTimeMillis());
        workRecord.setCreated(System.currentTimeMillis());
        workRecord.setDeleted(false);
        ApiFuture<WriteResult> future = getWorkReference().document(workRecord.getId()).create(workRecord);
        return workRecord;
    }

    public WorkRecord updateWork(WorkRecord workRecord) {
        if (workRecord == null) {
            return null;
        }
        workRecord.setUpdated(System.currentTimeMillis());
        ApiFuture<WriteResult> future = getWorkReference().document(workRecord.getId()).set(workRecord);
        return workRecord;
    }

    public Skill createSkill(Skill skill) {
        if (skill == null) {
            return null;
        }
        skill.setId(UUID.randomUUID().toString());
        skill.setUpdated(System.currentTimeMillis());
        skill.setCreated(System.currentTimeMillis());
        skill.setDeleted(false);
        ApiFuture<WriteResult> future = getWorkReference().document(skill.getId()).create(skill);
        return skill;
    }

    public Skill updateSkill(Skill skill) {
        if (skill == null) {
            return null;
        }
        skill.setUpdated(System.currentTimeMillis());
        ApiFuture<WriteResult> future = getWorkReference().document(skill.getId()).set(skill);
        return skill;
    }

    public Training createTraining(Training training) {
        if (training == null) {
            return null;
        }
        training.setId(UUID.randomUUID().toString());
        training.setUpdated(System.currentTimeMillis());
        training.setCreated(System.currentTimeMillis());
        training.setDeleted(false);
        ApiFuture<WriteResult> future = getWorkReference().document(training.getId()).create(training);
        return training;
    }

    public Training updateTraining(Training training) {
        if (training == null) {
            return null;
        }
        training.setUpdated(System.currentTimeMillis());
        ApiFuture<WriteResult> future = getWorkReference().document(training.getId()).set(training);
        return training;
    }
}
