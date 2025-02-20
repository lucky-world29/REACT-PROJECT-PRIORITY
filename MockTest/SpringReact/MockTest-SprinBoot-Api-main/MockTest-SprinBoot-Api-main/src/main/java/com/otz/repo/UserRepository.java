package com.otz.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.otz.entity.User;
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}