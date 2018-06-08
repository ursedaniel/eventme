package com.licente.eventme.service;

import com.licente.eventme.vo.UserVO;

import java.util.List;

public interface UserService {

    List<UserVO> getAllUsers();

    int registerUser(UserVO userVO);

    int loginUser(UserVO userVO);
}
