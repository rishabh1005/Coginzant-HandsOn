package com.cognizant.ormlearn;

import org.springframework.boot.SpringApplication;

import java.util.List;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
	private static CountryService countryService;

	// HandsOn 1
	private static void testGetAllCountries() {
		LOGGER.info("Start");
		List<Country> countries = countryService.getAllCountries();
		LOGGER.debug("countries={}", countries);
		LOGGER.info("End");
	}

	// HandsOn 6
	private static void getAllCountriesTest() {
		LOGGER.info("Start");
		Country country = countryService.findCountryByCode("IN");
		LOGGER.debug("Country:{}", country);
		LOGGER.info("End");
	}

	// HandsOn 7
	private static void testAddCountry() {
		LOGGER.info("Start");
		Country c1 = new Country("America", "AA");
		countryService.addCountry(c1);
		LOGGER.debug("Country:{}", c1);
		LOGGER.info("End");

	}

	// HandsOn 8
	private static void testUpdateCountry() {
		LOGGER.info("Start");
		String country = "United America";
		countryService.updateCountry(country, "AA");
		LOGGER.debug("Country:{}", country);
		LOGGER.info("End");

	}

	// HandsOn 9
	private static void testDeleteCountry() {
		LOGGER.info("Start");
		countryService.deleteCountry("AA");
		LOGGER.info("End");
	}
	
	//Day 57 - HandsOn -1
	private static void testDisplayCountryContaining() {
		LOGGER.info("Start");
		List<Country> li=countryService.displayCountryContaining("ou");
		li.stream().forEach(System.out::println);
		LOGGER.info("End");
	}
	
	private static void testDisplayCountryByNameStartingWith() {
		LOGGER.info("Start");
		List<Country> li=countryService.displayCountryByNameStartingWith("Z");
		li.stream().forEach(System.out::println);
		LOGGER.info("End");
	}

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
		countryService = context.getBean(CountryService.class);
		LOGGER.info("Inside main");
//		testGetAllCountries();
//		getAllCountriesTest();
//		testAddCountry();
//		testUpdateCountry();
//		testDeleteCountry();
//		testDisplayCountryContaining();
		testDisplayCountryByNameStartingWith();
	}

}
