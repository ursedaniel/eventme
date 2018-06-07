package com.licente.eventme.repository;

import com.licente.eventme.model.User;
import com.licente.eventme.vo.UserVO;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User,Integer> {

    List<User> findBy();
}
