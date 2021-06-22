package com.stock.ormlearnstock;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.stock.ormlearnstock.repository.StockRepository;

@SpringBootApplication
public class OrmlearnstockApplication {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(OrmlearnstockApplication.class);
	
	@Autowired
	private StockRepository stockRepository;

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(OrmlearnstockApplication.class, args);
		LOGGER.info("Inside main");
	}

}
