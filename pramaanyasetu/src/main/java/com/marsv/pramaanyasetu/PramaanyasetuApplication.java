package com.marsv.pramaanyasetu;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Objects;

@SpringBootApplication
public class PramaanyasetuApplication {

	public static void main(String[] args) throws IOException {

		ClassLoader classLoader = PramaanyasetuApplication.class.getClassLoader();
///home/ubuntu/serviceAccountKey.json"
		File file = new File("/Users/ramasr/Desktop/serviceAccountKey.json");
		//File file = new File("/home/ubuntu/serviceAccountKey.json");

		FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());

		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.build();

		FirebaseApp.initializeApp(options);

		SpringApplication.run(PramaanyasetuApplication.class, args);
	}

}
