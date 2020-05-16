package com.bigdata.display.fliter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

@Component
public class CorsFilter implements Filter {
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        //带cookie时，origin 必须完全匹配，不能用 *
//        HttpServletResponse request = (HttpServletResponse) req;
//        String origin = request.getHeader("Origin");
//        if(org.springframework.util.StringUtils.isEmpty(origin)){
//            response.setHeader("Access-Control-Allow-Origin", origin);
//        }
        //允许所有跨域
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "content-type,x-requested-with");

        //带cookie跨域请求  enable
        response.setHeader("Access-Control-Allow-Credentials", "true");
        System.out.println("******************************跨域过滤器被使用**************************");
        chain.doFilter(req, res);
    }

    public void init(FilterConfig filterConfig) {
    }

    public void destroy() {
    }
}  