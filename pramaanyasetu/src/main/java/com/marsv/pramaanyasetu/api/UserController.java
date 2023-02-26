package com.marsv.pramaanyasetu.api;


import com.marsv.pramaanyasetu.common.ResponseEntityBuilder;
import com.marsv.pramaanyasetu.dto.User;
import com.marsv.pramaanyasetu.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;

    @GetMapping("/{userId}")
    public ResponseEntity getUser(@PathVariable("userId") String userId) throws ExecutionException, InterruptedException {
        return ResponseEntityBuilder.okResponseEntity(userService.getUserDetails(userId));
    }


    @PostMapping
    public ResponseEntity createUser(@RequestBody User user) {
        return ResponseEntityBuilder.okResponseEntity(userService.createUserDetails(user));
    }

    @PutMapping
    public ResponseEntity updateUser(@RequestBody User user) {
        return ResponseEntityBuilder.okResponseEntity(userService.updateUserDetails(user));
    }


}
