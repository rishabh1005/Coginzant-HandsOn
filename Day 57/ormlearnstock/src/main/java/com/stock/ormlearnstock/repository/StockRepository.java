package com.stock.ormlearnstock.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.stock.ormlearnstock.model.Stock;

public interface StockRepository extends JpaRepository<Stock, Integer>{

	@Query("select s from stock s where s.st_code = 'FB' and s.st_date LIKE :date%")
	public List<Stock> getFacebookDeatils(@Param("date") String date);
	
//	@Query("select s from stock s where s.st_code = 'GOOGL' and s.st_date LIKE :date%")
}
