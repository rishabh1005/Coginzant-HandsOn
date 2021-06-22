package com.stock.ormlearnstock.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stock")
public class Stock {
	
	@Id
	@Column(name = "st_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int stock_id;
	
	@Column(name = "st_code")
	private String stock_code;
	
	@Column(name = "st_date")
	private LocalDate stock_date;
	
	@Column(name = "st_open")
	private double stock_open;
	
	@Column(name = "st_close")
	private double stock_close;
	
	@Column(name = "st_volume")
	private int stock_volume;
	
	public Stock( ) {
		
	}

	public Stock(String stock_code, LocalDate stock_date, double stock_open, double stock_close, int stock_volume) {
		super();
		this.stock_code = stock_code;
		this.stock_date = stock_date;
		this.stock_open = stock_open;
		this.stock_close = stock_close;
		this.stock_volume = stock_volume;
	}

	public int getStock_id() {
		return stock_id;
	}

	public void setStock_id(int stock_id) {
		this.stock_id = stock_id;
	}

	public String getStock_code() {
		return stock_code;
	}

	public void setStock_code(String stock_code) {
		this.stock_code = stock_code;
	}

	public LocalDate getStock_date() {
		return stock_date;
	}

	public void setStock_date(LocalDate stock_date) {
		this.stock_date = stock_date;
	}

	public double getStock_open() {
		return stock_open;
	}

	public void setStock_open(double stock_open) {
		this.stock_open = stock_open;
	}

	public double getStock_close() {
		return stock_close;
	}

	public void setStock_close(double stock_close) {
		this.stock_close = stock_close;
	}

	public int getStock_volume() {
		return stock_volume;
	}

	public void setStock_volume(int stock_volume) {
		this.stock_volume = stock_volume;
	}

	@Override
	public String toString() {
		return "Stock [stock_id=" + stock_id + ", stock_code=" + stock_code + ", stock_date=" + stock_date
				+ ", stock_open=" + stock_open + ", stock_close=" + stock_close + ", stock_volume=" + stock_volume
				+ "]";
	}
	
	
}
