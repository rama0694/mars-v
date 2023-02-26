package com.marsv.pramaanyasetu.api;

import com.marsv.pramaanyasetu.common.ResponseEntityBuilder;
import com.marsv.pramaanyasetu.dto.Training;
import com.marsv.pramaanyasetu.service.WorkAndSkillService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/training")
@RequiredArgsConstructor
@Slf4j
public class TrainingController {
    private final WorkAndSkillService service;

    @PostMapping
    public ResponseEntity createUser(@RequestBody Training training) {
        return ResponseEntityBuilder.okResponseEntity(service.createTraining(training));
    }

    @PutMapping
    public ResponseEntity updateUser(@RequestBody Training training) {
        return ResponseEntityBuilder.okResponseEntity(service.updateTraining(training));
    }
}
