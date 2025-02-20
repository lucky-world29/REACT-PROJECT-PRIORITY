package com.otz.binding;

import lombok.Data;
import java.util.Set;

@Data
public class SignupRequest {
	private String fullname;
    private String username;
    private String password;
    private String phone;
    private	String createdBy;
    private Set<String> roles;
}