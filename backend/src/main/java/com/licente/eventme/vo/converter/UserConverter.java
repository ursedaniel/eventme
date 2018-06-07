package com.licente.eventme.vo.converter;

import com.licente.eventme.model.User;
import com.licente.eventme.vo.UserVO;
import org.springframework.stereotype.Service;

@Service
public class UserConverter {

    public User fromVO(UserVO userVO) {
        User user = new User();
        user.setEmail(userVO.getEmail());
        user.setId(userVO.getId());
        user.setName(userVO.getName());
        user.setPassword(userVO.getPassword());

        return user;
    }

    public UserVO toVO(User user) {
        UserVO userVO = new UserVO();
        userVO.setEmail(user.getEmail());
        userVO.setId(user.getId());
        userVO.setName(user.getName());
        userVO.setPassword(user.getPassword());

        return userVO;
    }
}
