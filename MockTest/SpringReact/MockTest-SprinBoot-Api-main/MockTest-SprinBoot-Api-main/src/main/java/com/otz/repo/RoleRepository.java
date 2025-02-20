package com.otz.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.otz.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Role findByName(Role.RoleName name);
}