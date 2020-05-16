package com.bigdata.display;

import com.bigdata.display.fliter.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

/**
 * @author like
 * @version 1.0
 * @date 2020/5/11 22:52
 */
@SpringBootApplication
public class BigDataDisplayApplication {
    public static void main(String[] args) {
        SpringApplication.run(BigDataDisplayApplication.class,args);
    }

    @Bean
    public FilterRegistrationBean registerFilter(){
        FilterRegistrationBean bean = new FilterRegistrationBean();
        bean.addUrlPatterns("/*");
        bean.setFilter(new CorsFilter());
        return bean;
    }
}
