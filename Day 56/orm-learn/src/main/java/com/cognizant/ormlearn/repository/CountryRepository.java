package com.cognizant.ormlearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

	public List<Country> findAll();
	
	@Query("select c from Country c where c.name like %:n% order by c.name ")
	public List<Country> findCountryByNameContaining(@Param("n") String name);
	
	@Query("select c from Country c where c.name like :alphabet% order by c.name ")
	public List<Country> findCountryByNameStartingWith(@Param("alphabet") String alphabet);
}
