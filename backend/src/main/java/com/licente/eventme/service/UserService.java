package com.licente.eventme.service;

import com.licente.eventme.vo.UserVO;

import java.util.List;

public interface UserService {

    List<UserVO> getAllUsers();

    int getUser(UserVO userVO);
}
